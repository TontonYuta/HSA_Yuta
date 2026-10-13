import React, { useState } from 'react';
import { X, Copy, Check, Send, Sparkles, ExternalLink, ShieldCheck, User, Globe } from 'lucide-react';

import { generateGasScript } from '../data/gasScriptTemplate';

interface WebhookModalProps {
  isOpen: boolean;
  onClose: () => void;
  webhookUrl: string;
  onSaveWebhookUrl: (url: string) => void;
  studentEmail: string;
  onSaveStudentEmail: (email: string) => void;
  studentName: string;
  onSaveStudentName: (name: string) => void;
  teacherEmail?: string;
  onSaveTeacherEmail?: (email: string) => void;
}

export const WebhookModal: React.FC<WebhookModalProps> = ({
  isOpen,
  onClose,
  webhookUrl,
  onSaveWebhookUrl,
  studentEmail,
  onSaveStudentEmail,
  studentName,
  onSaveStudentName,
  teacherEmail = '',
  onSaveTeacherEmail,
}) => {
  const DEFAULT_OFFICIAL_URL =
    'https://script.google.com/macros/s/AKfycbydbnEnhDyyS4zkTvZhm6P2kRLLznrpIVSmwSt0YJBa4n3YJLKdNQ4k_zgzHyDox6Rmiw/exec';
  const [activeTab, setActiveTab] = useState<'config' | 'code' | 'guide'>('config');
  const [localUrl, setLocalUrl] = useState(webhookUrl || DEFAULT_OFFICIAL_URL);
  const [localTeacherEmail, setLocalTeacherEmail] = useState(teacherEmail || 'huyhoang6altt@gmail.com');
  const [localStudentEmail, setLocalStudentEmail] = useState(studentEmail);
  const [localStudentName, setLocalStudentName] = useState(studentName);
  const [copiedCode, setCopiedCode] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveWebhookUrl(localUrl.trim());
    if (onSaveTeacherEmail) onSaveTeacherEmail(localTeacherEmail.trim());
    onSaveStudentEmail(localStudentEmail.trim());
    onSaveStudentName(localStudentName.trim());
    onClose();
  };

  const sampleGasCode = generateGasScript(localTeacherEmail);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleGasCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleTestPing = async () => {
    if (!localUrl.trim()) {
      setTestStatus('error');
      setTestMessage('Vui lòng nhập URL Google Apps Script Web App trước khi kiểm tra.');
      return;
    }

    setTestStatus('testing');
    setTestMessage('Đang gửi tín hiệu kiểm tra đồng bộ dữ liệu...');

    try {
      const payload = {
        teacherEmail: localTeacherEmail || '',
        studentName: localStudentName || 'Thí sinh thử nghiệm',
        studentEmail: localStudentEmail || '',
        examSetTitle: 'Đề 01: Chuẩn Tham Khảo ĐHQGHN (Đồng bộ Google Sheet)',
        completedAt: new Date().toISOString(),
        totalTimeSpentSeconds: 4320,
        totalScore: 42,
        maxScore: 50,
        mcqScore: 30,
        mcqTotal: 35,
        fillScore: 12,
        fillTotal: 15,
        topicBreakdown: [
          { topicName: 'Hàm số & Tính đơn điệu chứa tham số', correctCount: 5, totalCount: 5, percentage: 100 },
          { topicName: 'Cực trị hàm số chứa tham số m', correctCount: 4, totalCount: 5, percentage: 80 },
          { topicName: 'Xác suất có điều kiện & Công thức Bayes', correctCount: 3, totalCount: 4, percentage: 75 },
          { topicName: 'Toán thực tế & Tối ưu hóa', correctCount: 2, totalCount: 4, percentage: 50 },
        ],
        weakestTopic: { topicName: 'Toán thực tế & Tối ưu hóa', percentage: 50 },
        answers: [
          { questionId: 7, topicName: 'Cực trị hàm số', userAnswer: 'B', correctAnswer: 'D', isCorrect: false, type: 'mcq' },
          { questionId: 19, topicName: 'Công thức Bayes', userAnswer: 'C', correctAnswer: 'A', isCorrect: false, type: 'mcq' },
          { questionId: 38, topicName: 'Toán thực tế', userAnswer: '12', correctAnswer: '15', isCorrect: false, type: 'fill' }
        ]
      };

      await fetch(localUrl.trim(), {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      setTestStatus('success');
      setTestMessage('Đã đồng bộ dữ liệu thử nghiệm thành công! Hãy kiểm tra bảng tính Google Sheet của bạn.');
    } catch (err: any) {
      setTestStatus('error');
      setTestMessage(`Không thể gửi tới URL: ${err?.message || 'Lỗi kết nối mạng hoặc sai đường link Webhook'}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span>Đồng Bộ Google Sheets & Webhook</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-normal">
                  Google Apps Script
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Tự động lưu trữ điểm số và bảng phân tích bài làm vào Google Sheet của bạn
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/40">
          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition cursor-pointer ${
              activeTab === 'config'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400 font-semibold'
                : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Cấu hình Webhook
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition cursor-pointer ${
              activeTab === 'code'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400 font-semibold'
                : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Mã Nguồn Google Apps Script Mẫu
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition cursor-pointer ${
              activeTab === 'guide'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400 font-semibold'
                : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Hướng dẫn cài đặt (4 bước)
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-zinc-700 dark:text-zinc-300">
          {activeTab === 'config' && (
            <div className="space-y-4">
              {/* Webhook URL */}
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-zinc-500" />
                  <span>URL Web App Google Apps Script (Webhook Endpoint):</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                    value={localUrl}
                    onChange={(e) => setLocalUrl(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 font-mono text-xs"
                  />
                  <button
                    type="button"
                    onClick={handleTestPing}
                    disabled={testStatus === 'testing'}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs flex items-center gap-1.5 transition disabled:opacity-50 cursor-pointer shadow-xs shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {testStatus === 'testing' ? 'Đang gửi...' : 'Gửi thử nghiệm'}
                  </button>
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  URL ứng dụng web do Google cung cấp khi triển khai, kết thúc bằng <code className="text-zinc-700 dark:text-zinc-300 font-mono">/exec</code>.
                </p>
              </div>

              {testStatus !== 'idle' && (
                <div
                  className={`p-3 rounded-lg text-xs flex items-start gap-2 border ${
                    testStatus === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300'
                      : testStatus === 'error'
                      ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800/80 text-rose-800 dark:text-rose-300'
                      : 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {testStatus === 'success' ? (
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  ) : (
                    <Sparkles className="w-4 h-4 shrink-0 text-sky-600 dark:text-sky-400 mt-0.5" />
                  )}
                  <span>{testMessage}</span>
                </div>
              )}

              {/* Student info */}
              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Họ và tên thí sinh (mặc định)</span>
                </label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  value={localStudentName}
                  onChange={(e) => setLocalStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Dán toàn bộ mã này vào trình soạn thảo Apps Script của Google Sheets:
                </span>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600/10 dark:bg-sky-600/20 border border-sky-500/40 text-sky-700 dark:text-sky-300 hover:bg-sky-600/20 dark:hover:bg-sky-600/30 rounded-lg text-xs font-medium transition cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép mã nguồn</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-lg bg-zinc-900 text-zinc-100 border border-zinc-800 p-3 max-h-72 overflow-y-auto">
                <pre className="text-xs font-mono leading-relaxed">
                  <code>{sampleGasCode}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
                <div className="font-semibold text-sky-600 dark:text-sky-400">Bước 1: Mở Google Sheets mới</div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Truy cập <a href="https://sheets.new" target="_blank" rel="noreferrer" className="text-sky-600 dark:text-sky-300 underline inline-flex items-center gap-0.5">sheets.new <ExternalLink className="w-3 h-3" /></a> để tạo bảng tính mới, đặt tên bảng tính là <strong>HSA_Ket_Qua_TontonYuta</strong>.
                </p>
              </div>

              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
                <div className="font-semibold text-sky-600 dark:text-sky-400">Bước 2: Mở Tiện ích mở rộng &gt; Apps Script</div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Trên thanh menu Google Sheets, chọn <strong>Tiện ích mở rộng (Extensions)</strong> &gt; <strong>Apps Script</strong>.
                </p>
              </div>

              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
                <div className="font-semibold text-sky-600 dark:text-sky-400">Bước 3: Dán mã nguồn & Nhấn Lưu</div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Xóa toàn bộ mã mặc định trong file <code>Code.gs</code>, dán toàn bộ đoạn mã ở tab <strong>"Mã Nguồn Google Apps Script Mẫu"</strong> và nhấn biểu tượng Lưu (Ctrl+S).
                </p>
              </div>

              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-1">
                <div className="font-semibold text-sky-600 dark:text-sky-400">Bước 4: Triển khai Web App (Deploy) & Cấp quyền</div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  - Bấm nút <strong>Triển khai (Deploy)</strong> màu xanh ở góc trên bên phải &gt; <strong>Tùy chọn triển khai mới (New deployment)</strong>.
                  <br />
                  - Chọn loại: <strong>Ứng dụng web (Web app)</strong>.
                  <br />
                  - Thực thi dưới dạng (Execute as): <strong>Tôi (Me)</strong>.
                  <br />
                  - Ai có quyền truy cập (Who has access): <strong>Bất kỳ ai (Anyone)</strong>.
                  <br />
                  - Nhấn <strong>Triển khai</strong>, chọn tài khoản Google của bạn và nhấn <strong>Cho phép (Authorize / Allow)</strong> để cấp quyền ghi dữ liệu vào Google Sheet.
                  <br />
                  - Sao chép <strong>URL Ứng dụng web</strong> và dán vào ô Webhook URL ở tab Cấu hình.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
          <span className="text-xs text-zinc-500">
            Cấu hình được lưu tự động trong trình duyệt (localStorage)
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition cursor-pointer"
            >
              Lưu cấu hình
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

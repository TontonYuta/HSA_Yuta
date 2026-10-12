import React, { useState } from 'react';
import { X, Copy, Check, Send, Sparkles, ExternalLink, ShieldCheck, Mail, User, Globe } from 'lucide-react';

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

  const sampleGasCode = `/**
 * =========================================================================
 * LUYỆN THI HSA CÙNG TONTONYUTA - GOOGLE APPS SCRIPT WEBHOOK VÀ EMAIL SENDER
 * =========================================================================
 * Hướng dẫn:
 * 1. Mở Google Sheet mới -> Tiện ích mở rộng (Extensions) -> Apps Script
 * 2. Dán toàn bộ mã này vào Code.gs và nhấn Lưu (Ctrl+S)
 * 3. Điền email của bạn vào TEACHER_EMAIL bên dưới (hoặc để trống để tự lấy email Google của bạn)
 * 4. Nhấn "Triển khai" -> "Tùy chọn triển khai mới" -> Chọn "Ứng dụng web" (Web app)
 *    - Thực thi dưới dạng: "Tôi" (Me)
 *    - Người có quyền truy cập: "Bất kỳ ai" (Anyone)
 * 5. Sao chép URL Web App dán vào ô Webhook URL trên hệ thống Webtest
 * =========================================================================
 */

// ĐIỀN EMAIL CỦA BẠN VÀO ĐÂY (hoặc để trống để script tự động lấy email tài khoản Google của bạn)
const DEFAULT_TEACHER_EMAIL = "${localTeacherEmail || ''}";

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(15000); // Tránh xung đột khi nhiều học sinh nộp bài cùng lúc

    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);

    // 1. Xác định Email nhận báo cáo của Giáo viên / Admin
    let teacherEmail = (data.teacherEmail && data.teacherEmail.trim()) || DEFAULT_TEACHER_EMAIL.trim();
    if (!teacherEmail) {
      try {
        teacherEmail = Session.getActiveUser().getEmail();
      } catch (err) {}
    }

    // 2. Xử lý trường hợp Học sinh mới tham gia / Cập nhật tên (STUDENT_JOINED)
    if (data.type === "STUDENT_JOINED") {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      let sheetStudents = ss.getSheetByName("DanhSach_HocSinh");
      if (!sheetStudents) {
        sheetStudents = ss.insertSheet("DanhSach_HocSinh");
        sheetStudents.appendRow(["Thời Gian", "Họ Tên Học Sinh", "Lớp / Trường THPT", "Email Học Sinh", "Trình Duyệt"]);
        sheetStudents.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#0284c7").setFontColor("#ffffff");
      }
      sheetStudents.appendRow([
        new Date().toLocaleString("vi-VN"),
        data.studentName || "Chưa rõ",
        data.school || "Chưa cung cấp",
        data.studentEmail || "Chưa cung cấp",
        data.userAgent || ""
      ]);
      lock.releaseLock();

      // Gửi email thông báo cho Giáo viên
      if (teacherEmail && teacherEmail.indexOf("@") !== -1) {
        MailApp.sendEmail({
          to: teacherEmail,
          subject: "[HSA TontonYuta] Học sinh mới tham gia: " + (data.studentName || "Học sinh mới"),
          htmlBody: "<div style='font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px;'>" +
            "<h3 style='color: #0284c7; margin-top: 0;'>🎉 Học sinh mới vừa tham gia hệ thống luyện thi HSA!</h3>" +
            "<p><strong>Họ và tên:</strong> " + (data.studentName || "") + "</p>" +
            "<p><strong>Lớp / Trường:</strong> " + (data.school || "Chưa cung cấp") + "</p>" +
            "<p><strong>Email học sinh:</strong> " + (data.studentEmail || "Chưa cung cấp") + "</p>" +
            "<p><strong>Thời gian:</strong> " + (data.joinedAt || new Date().toLocaleString("vi-VN")) + "</p>" +
            "<hr style='border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;'/>" +
            "<p style='font-size: 12px; color: #64748b;'>Hệ thống Luyện thi HSA cùng TontonYuta (Email mặc định: " + teacherEmail + ")</p>" +
            "</div>",
          name: "Luyện thi HSA cùng TontonYuta"
        });
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", type: "STUDENT_JOINED" })).setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Xử lý Ping lưu lượng (TRAFFIC_PING)
    if (data.type === "TRAFFIC_PING") {
      lock.releaseLock();
      return ContentService.createTextOutput(JSON.stringify({ status: "success", type: "TRAFFIC_PING" })).setMimeType(ContentService.MimeType.JSON);
    }

    // 4. Ghi kết quả bài thi vào Google Sheet "KetQua_HSA_TontonYuta"
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("KetQua_HSA_TontonYuta");
    if (!sheet) {
      sheet = ss.insertSheet("KetQua_HSA_TontonYuta");
      sheet.appendRow([
        "Thời Gian Nộp",
        "Bộ Đề Thi",
        "Họ Tên Thí Sinh",
        "Email Thí Sinh",
        "Email Giáo Viên",
        "Tổng Điểm",
        "Trắc Nghiệm (MCQ)",
        "Điền Đáp Số (Fill)",
        "Thời Gian Làm",
        "Chuyên Đề Yếu Nhất",
        "Số Câu Sai"
      ]);
      sheet.getRange(1, 1, 1, 11)
        .setFontWeight("bold")
        .setBackground("#0284c7")
        .setFontColor("#ffffff");
    }

    const timeSpentMin = Math.round((data.totalTimeSpentSeconds || 0) / 60);
    const incorrectCount = (data.answers ? data.answers.filter(function(a) { return !a.isCorrect; }).length : (data.maxScore - data.totalScore));

    sheet.appendRow([
      new Date().toLocaleString("vi-VN"),
      data.examSetTitle || "Đề Chuẩn HSA",
      data.studentName || "Thí sinh HSA",
      data.studentEmail || "Chưa cung cấp",
      teacherEmail || "Chưa cung cấp",
      data.totalScore + " / " + data.maxScore,
      data.mcqScore + " / " + data.mcqTotal,
      data.fillScore + " / " + data.fillTotal,
      timeSpentMin + " phút",
      (data.weakestTopic ? data.weakestTopic.topicName + " (" + data.weakestTopic.percentage + "%)" : "Không có"),
      incorrectCount
    ]);

    lock.releaseLock();

    // 3. Xây dựng nội dung Email HTML báo cáo chuyên sâu
    const scorePercent = Math.round((data.totalScore / (data.maxScore || 50)) * 100);
    let rankBadge = "Cần bổ sung kiến thức";
    let rankBg = "#ef4444";
    if (data.totalScore >= 45) { rankBadge = "Xuất sắc (Top 1% HSA)"; rankBg = "#10b981"; }
    else if (data.totalScore >= 40) { rankBadge = "Rất giỏi (Mục tiêu 100+ ĐHQG)"; rankBg = "#0284c7"; }
    else if (data.totalScore >= 32) { rankBadge = "Khá tốt (Đạt chuẩn tuyển sinh)"; rankBg = "#f59e0b"; }

    // Bảng chuyên đề
    let breakdownHtml = "";
    if (data.topicBreakdown && data.topicBreakdown.length > 0) {
      breakdownHtml += "<table style='width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px;'>";
      breakdownHtml += "<tr style='background: #f1f5f9; text-align: left;'><th style='padding: 8px; border: 1px solid #e2e8f0;'>Chuyên đề</th><th style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'>Đúng/Tổng</th><th style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'>Tỷ lệ</th></tr>";
      data.topicBreakdown.forEach(function(item) {
        const barColor = item.percentage >= 80 ? "#10b981" : (item.percentage >= 50 ? "#f59e0b" : "#ef4444");
        breakdownHtml += "<tr>";
        breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 500;'>" + item.topicName + "</td>";
        breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'>" + item.correctCount + "/" + item.totalCount + "</td>";
        breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'><span style='color: " + barColor + "; font-weight: bold;'>" + item.percentage + "%</span></td>";
        breakdownHtml += "</tr>";
      });
      breakdownHtml += "</table>";
    }

    // Bảng chi tiết các câu làm SAI
    let incorrectListHtml = "";
    if (data.answers && data.answers.length > 0) {
      const wrongAnswers = data.answers.filter(function(a) { return !a.isCorrect; });
      if (wrongAnswers.length > 0) {
        incorrectListHtml += "<h4 style='color: #dc2626; margin: 20px 0 8px;'>Danh sách " + wrongAnswers.length + " câu thí sinh làm sai / cần chữa bài:</h4>";
        incorrectListHtml += "<table style='width: 100%; border-collapse: collapse; font-size: 12px;'>";
        incorrectListHtml += "<tr style='background: #fef2f2; color: #991b1b; text-align: left;'><th style='padding: 6px; border: 1px solid #fecaca;'>Câu</th><th style='padding: 6px; border: 1px solid #fecaca;'>Chuyên đề</th><th style='padding: 6px; border: 1px solid #fecaca; text-align: center;'>Thí sinh chọn</th><th style='padding: 6px; border: 1px solid #fecaca; text-align: center;'>Đáp án đúng</th></tr>";
        wrongAnswers.forEach(function(w) {
          incorrectListHtml += "<tr>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca; font-weight: bold;'>Câu " + w.questionId + "</td>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca;'>" + (w.topicName || "Chuyên đề") + "</td>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca; text-align: center; color: #dc2626; font-weight: bold;'>" + (w.userAnswer || "(Bỏ trống)") + "</td>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca; text-align: center; color: #16a34a; font-weight: bold;'>" + w.correctAnswer + "</td>";
          incorrectListHtml += "</tr>";
        });
        incorrectListHtml += "</table>";
      } else {
        incorrectListHtml = "<p style='color: #16a34a; font-weight: bold; margin-top: 15px;'>🎉 Thí sinh làm đúng tuyệt đối 100% tất cả các câu hỏi!</p>";
      }
    }

    const emailHtmlBody = 
      "<div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; line-height: 1.6; color: #1e293b; padding: 24px; border: 1px solid #e2e8f0; border-radius: 14px; background-color: #ffffff;'>" +
      "<div style='background: linear-gradient(135deg, #0284c7, #0369a1); padding: 20px; border-radius: 10px; color: #ffffff; margin-bottom: 20px; text-align: center;'>" +
      "<h2 style='margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;'>LUYỆN THI HSA CÙNG TONTONYUTA</h2>" +
      "<p style='margin: 4px 0 0; font-size: 13px; color: #e0f2fe;'>Báo Cáo Kết Quả Thi Môn Toán Học & Tư Duy Định Lượng (ĐHQGHN)</p>" +
      "</div>" +

      "<p>Kính gửi Thầy/Cô và Thí sinh <strong>" + (data.studentName || "Thí sinh HSA") + "</strong>,</p>" +
      "<p>Hệ thống vừa ghi nhận kết quả hoàn thành bài thi <strong>" + (data.examSetTitle || "Đề Chuẩn HSA") + "</strong>. Thông tin chi tiết kết quả như sau:</p>" +

      "<div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; margin: 18px 0;'>" +
      "<div style='text-align: center; margin-bottom: 14px;'>" +
      "<span style='font-size: 13px; color: #64748b; text-transform: uppercase; font-weight: 600;'>Tổng điểm đạt được</span><br/>" +
      "<span style='font-size: 32px; font-weight: 800; color: #0284c7;'>" + data.totalScore + " / " + data.maxScore + "</span>" +
      "<div style='margin-top: 4px;'><span style='background: " + rankBg + "; color: #ffffff; padding: 3px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold;'>" + rankBadge + " (" + scorePercent + "%)</span></div>" +
      "</div>" +
      "<table style='width: 100%; border-collapse: collapse; font-size: 13px;'>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Họ và tên thí sinh:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + (data.studentName || "Thí sinh tự do") + "</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Email thí sinh:</td><td style='padding: 6px 0; text-align: right;'>" + (data.studentEmail || "Chưa cung cấp") + "</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Thời gian làm bài:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + timeSpentMin + " phút (" + (data.totalTimeSpentSeconds || 0) + " giây)</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Phần Trắc nghiệm 4 lựa chọn:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + data.mcqScore + " / " + data.mcqTotal + " câu</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Phần Tự luận điền số ngắn:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + data.fillScore + " / " + data.fillTotal + " câu</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #dc2626;'>Chuyên đề cần bổ trợ cấp tốc:</td><td style='padding: 6px 0; font-weight: bold; color: #dc2626; text-align: right;'>" + (data.weakestTopic ? data.weakestTopic.topicName + " (" + data.weakestTopic.percentage + "%)" : "Không có") + "</td></tr>" +
      "</table>" +
      "</div>" +

      "<h4 style='color: #0f172a; margin: 20px 0 8px;'>Phân tích năng lực theo từng chuyên đề:</h4>" +
      breakdownHtml +

      incorrectListHtml +

      "<p style='margin-top: 25px; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px; text-align: center;'>" +
      "Hệ thống Luyện thi HSA cùng TontonYuta · Nền tảng luyện thi chuẩn cấu trúc GDPT 2018." +
      "</p>" +
      "</div>";

    const emailSubject = "[HSA TontonYuta] Báo cáo kết quả: " + (data.studentName || "Thí sinh") + " - " + (data.examSetTitle || "Đề HSA") + " (" + data.totalScore + "/" + data.maxScore + " điểm)";

    // 4. Gửi email trực tiếp về cho Giáo viên / Admin ("Gửi mail về cho tôi")
    let sentCount = 0;
    if (teacherEmail && teacherEmail.indexOf("@") !== -1) {
      MailApp.sendEmail({
        to: teacherEmail,
        subject: emailSubject,
        htmlBody: emailHtmlBody,
        name: "Luyện thi HSA cùng TontonYuta"
      });
      sentCount++;
    }

    // 5. Gửi bản sao cho Thí sinh nếu thí sinh cung cấp email riêng
    if (data.studentEmail && data.studentEmail.indexOf("@") !== -1 && data.studentEmail.toLowerCase() !== teacherEmail.toLowerCase()) {
      MailApp.sendEmail({
        to: data.studentEmail,
        subject: "[Kết quả bài thi] " + emailSubject,
        htmlBody: emailHtmlBody,
        name: "Luyện thi HSA cùng TontonYuta"
      });
      sentCount++;
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Đã lưu vào Google Sheet và gửi email thành công tới " + sentCount + " địa chỉ!",
        teacherEmailSent: teacherEmail || null,
        sheetRecorded: true
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Webhook Luyện thi HSA cùng TontonYuta đang hoạt động bình thường!",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}`;

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
    setTestMessage('Đang gửi tín hiệu kiểm tra kèm email báo cáo thử nghiệm...');

    try {
      const payload = {
        teacherEmail: localTeacherEmail || '',
        studentName: localStudentName || 'Thí sinh thử nghiệm',
        studentEmail: localStudentEmail || '',
        examSetTitle: 'Đề 01: Chuẩn Tham Khảo ĐHQGHN (Test Email)',
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
      setTestMessage(`Đã gửi dữ liệu thử nghiệm thành công! Hãy kiểm tra Google Sheet và hộp thư ${localTeacherEmail ? `(${localTeacherEmail})` : 'của bạn'}.`);
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
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span>Tự Động Gửi Email & Lưu Google Sheet</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-normal">
                  Google Apps Script
                </span>
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Tự động gửi email báo cáo chi tiết về cho bạn mỗi khi học sinh nộp bài
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/40">
          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition ${
              activeTab === 'config'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400 font-semibold'
                : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Cấu hình Webhook & Email
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-xs font-medium border-b-2 transition ${
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
            className={`px-4 py-2 text-xs font-medium border-b-2 transition ${
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
              {/* Teacher Email - Key user request: gửi mail về cho tôi */}
              <div className="p-4 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 space-y-2">
                <label className="block text-xs font-bold text-sky-950 dark:text-sky-200 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>Email của bạn (Giáo viên / Admin) — Nhận mail báo cáo kết quả:</span>
                </label>
                <input
                  type="email"
                  placeholder="Ví dụ: email_cua_ban@gmail.com"
                  value={localTeacherEmail}
                  onChange={(e) => setLocalTeacherEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-zinc-950 border border-sky-300 dark:border-sky-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-sky-500 font-medium"
                />
                <p className="text-[11px] text-sky-800 dark:text-sky-300 leading-relaxed">
                  Mỗi khi học sinh hoàn thành bài thi, hệ thống sẽ tự động gửi email báo cáo chi tiết (kèm điểm số, bảng phân tích chuyên đề, và danh sách câu sai) về email này.
                </p>
              </div>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
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
                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Email thí sinh (tùy chọn gửi kèm cho học sinh)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="hocsinh@example.com"
                    value={localStudentEmail}
                    onChange={(e) => setLocalStudentEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500"
                  />
                </div>
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
                  - Thực thi dưới dạng (Execute as): <strong>Tôi (Me / email của bạn)</strong>.
                  <br />
                  - Ai có quyền truy cập (Who has access): <strong>Bất kỳ ai (Anyone)</strong>.
                  <br />
                  - Nhấn <strong>Triển khai</strong>, chọn tài khoản Google của bạn và nhấn <strong>Cho phép (Authorize / Allow)</strong> để cấp quyền gửi mail qua Gmail và ghi Google Sheet.
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

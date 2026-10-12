import React from 'react';
import {
  Send,
  X,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

interface TopicSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTopicName: string;
  correctCount: number;
  totalCount: number;
  answeredCount: number;
  modalTimeSpent: number;
  studentName: string;
  setStudentName: (name: string) => void;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'sending' | 'success' | 'error';
  onSubmit: () => void;
  onRetryTopic: () => void;
  onBackToExam: () => void;
}

export const TopicSubmitModal: React.FC<TopicSubmitModalProps> = ({
  isOpen,
  onClose,
  currentTopicName,
  correctCount,
  totalCount,
  answeredCount,
  modalTimeSpent,
  studentName,
  setStudentName,
  isSubmitting,
  submitStatus,
  onSubmit,
  onRetryTopic,
  onBackToExam,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-2xl space-y-4 transition-colors relative my-8">
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">
                Xác Nhận Nộp Bài Chuyên Đề
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-1">
                {currentTopicName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Practice Stats Card */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 dark:bg-zinc-950 rounded-xl border border-slate-200/80 dark:border-zinc-800 text-center">
          <div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
              Số câu đúng
            </span>
            <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              {correctCount} / {totalCount}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-mono">
              ({totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0}%)
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
              Đã làm
            </span>
            <span className="text-base sm:text-lg font-bold text-sky-600 dark:text-sky-400 font-mono">
              {answeredCount} / {totalCount}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-zinc-400 block">
              câu hỏi
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
              Thời gian
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-800 dark:text-zinc-200 font-mono">
              {Math.floor(modalTimeSpent / 60)}:{String(modalTimeSpent % 60).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-zinc-400 block">
              phút:giây
            </span>
          </div>
        </div>

        {/* Form Fields & Submit Action */}
        {submitStatus !== 'success' ? (
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
                Họ và tên thí sinh:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Nhập họ và tên học sinh..."
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
              />
            </div>

            {/* Save & Record Notice */}
            <div className="p-3 bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 rounded-xl text-xs text-sky-800 dark:text-sky-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                Hệ thống sẽ <strong>tự động lưu trữ kết quả</strong> và cập nhật tiến độ vào hồ sơ năng lực của bạn.
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
              >
                Tiếp tục làm bài
              </button>

              <button
                type="button"
                onClick={onSubmit}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Đang gửi kết quả...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Xác nhận nộp bài</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-center py-2 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                Đã Nộp Bài & Lưu Kết Quả Thành Công!
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
                Kết quả chuyên đề <strong>{currentTopicName}</strong> đã được ghi nhận vào hồ sơ học sinh.
              </p>
            </div>

            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-left text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-zinc-400">Thí sinh:</span>
                <span className="font-bold text-slate-800 dark:text-zinc-200">{studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-zinc-400">Điểm đạt:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {correctCount} / {totalCount} câu ({totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0}%)
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-semibold hover:bg-slate-200 transition cursor-pointer"
              >
                Xem lại bài làm
              </button>
              <button
                type="button"
                onClick={onRetryTopic}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition cursor-pointer shadow-xs"
              >
                Làm lại chuyên đề này
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBackToExam();
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-zinc-800 transition cursor-pointer"
              >
                Về trang chủ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { RotateCcw, Clock, CheckCircle2, Play, Trash2 } from 'lucide-react';
import { Question, UserAnswer } from '../types/exam';

export interface SavedExamState {
  examSetId: string;
  examSetTitle: string;
  activeQuestions: Question[];
  userAnswers: Record<number, UserAnswer>;
  currentQuestionIndex: number;
  startTime: number;
  totalSeconds: number;
  timeRemainingSeconds: number;
  lastSavedAt: number;
  checksum?: string;
  tabSwitchCount?: number;
}

interface ResumeExamModalProps {
  isOpen: boolean;
  savedExam: SavedExamState | null;
  onResume: () => void;
  onDiscard: () => void;
}

export const ResumeExamModal: React.FC<ResumeExamModalProps> = ({
  isOpen,
  savedExam,
  onResume,
  onDiscard,
}) => {
  if (!isOpen || !savedExam) return null;

  const answeredCount = Object.values(savedExam.userAnswers || {}).filter(
    (a) => a && a.value && a.value.trim() !== ''
  ).length;

  const totalQuestions = savedExam.activeQuestions?.length || 50;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const remainingMinutes = Math.floor(savedExam.timeRemainingSeconds / 60);
  const remainingSeconds = savedExam.timeRemainingSeconds % 60;
  const formattedTime = `${remainingMinutes} phút ${String(remainingSeconds).padStart(2, '0')} giây`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in font-sans select-none">
      <div
        className="w-full max-w-md rounded-3xl bg-white dark:bg-[#121217] border border-slate-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-7 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Header Icon & Tag */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-xs">
              <RotateCcw className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                Tự động lưu bài thi
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mt-0.5">
                Khôi phục bài thi dở dang
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
            Hệ thống phát hiện bạn vừa rời khỏi hoặc tải lại trang khi đang làm bài thi thử. Bạn có thể tiếp tục ngay mà không bị mất đáp án.
          </p>

          {/* Exam Summary Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 truncate">
                {savedExam.examSetTitle}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 shrink-0">
                Đang làm dở
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/60">
                <Clock className="w-4 h-4 text-sky-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 dark:text-zinc-500">Thời gian còn lại</div>
                  <div className="font-bold font-mono text-slate-800 dark:text-zinc-200 truncate">
                    {formattedTime}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-400 dark:text-zinc-500">Tiến độ làm bài</div>
                  <div className="font-bold text-slate-800 dark:text-zinc-200 truncate">
                    {answeredCount}/{totalQuestions} câu ({progressPercent}%)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={onResume}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white text-xs font-bold shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Tiếp tục làm bài ngay</span>
            </button>

            <button
              type="button"
              onClick={onDiscard}
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 border border-transparent hover:border-rose-200 dark:hover:border-rose-800 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              title="Bỏ qua bài thi này và làm bài mới"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Hủy bài này</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

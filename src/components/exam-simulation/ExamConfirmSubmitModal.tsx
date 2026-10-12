import React from 'react';
import { HelpCircle, AlertTriangle, Check } from 'lucide-react';
import { ExamSet } from '../../types/exam';

interface ExamConfirmSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  currentExamSet: ExamSet;
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
  flaggedCount: number;
  unansweredIndices: number[];
  onSelectQuestion: (index: number) => void;
}

export const ExamConfirmSubmitModal: React.FC<ExamConfirmSubmitModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentExamSet,
  totalQuestions,
  answeredCount,
  unansweredCount,
  flaggedCount,
  unansweredIndices,
  onSelectQuestion,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in select-none">
      <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
              Xác nhận nộp bài thi?
            </h3>
            <p className="text-xs text-slate-500 font-mono">{currentExamSet.title}</p>
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-3 gap-2.5 text-center py-1 font-mono text-xs">
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
            <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{answeredCount}</div>
            <div className="text-[11px] text-emerald-800 dark:text-emerald-300 font-sans mt-0.5">Đã làm</div>
          </div>
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40">
            <div className="text-xl font-bold text-rose-600 dark:text-rose-400">{unansweredCount}</div>
            <div className="text-[11px] text-rose-800 dark:text-rose-300 font-sans mt-0.5">Chưa làm</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">{flaggedCount}</div>
            <div className="text-[11px] text-amber-800 dark:text-amber-300 font-sans mt-0.5">Gắn cờ</div>
          </div>
        </div>

        {/* Detailed Unanswered Warning with Clickable Jump Chips */}
        {unansweredCount > 0 ? (
          <div className="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2">
            <div className="text-xs font-semibold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                Bạn còn <strong className="font-mono">{unansweredCount} câu</strong> chưa trả lời:
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pt-1">
              {unansweredIndices.map((uIdx) => (
                <button
                  key={uIdx}
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectQuestion(uIdx);
                  }}
                  className="px-2 py-0.5 rounded bg-white dark:bg-zinc-900 border border-rose-300 dark:border-rose-800 text-[11px] font-mono text-rose-700 dark:text-rose-300 hover:bg-rose-600 hover:text-white transition cursor-pointer"
                  title={`Nhảy tới Câu ${uIdx + 1}`}
                >
                  Câu {uIdx + 1}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-rose-600 dark:text-rose-400 italic">
              💡 Nhấp vào số câu trên để chuyển ngay đến câu đó và hoàn thành trước khi nộp.
            </p>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Tuyệt vời! Bạn đã hoàn thành toàn bộ {totalQuestions} câu hỏi.</span>
          </div>
        )}

        <div className="flex items-center justify-end gap-2.5 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
          >
            Tiếp tục làm bài
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSubmit();
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-md transition cursor-pointer"
          >
            Xác nhận nộp bài
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Flag, CheckCircle2, X, Filter } from 'lucide-react';
import { Question, UserAnswer } from '../types/exam';

interface QuestionPaletteProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, UserAnswer>;
  onSelectQuestion: (index: number) => void;
  className?: string;
  onCloseSidebar?: () => void;
}

export type PaletteFilter = 'all' | 'unanswered' | 'answered' | 'flagged';

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  onSelectQuestion,
  className = '',
  onCloseSidebar,
}) => {
  const [activeFilter, setActiveFilter] = useState<PaletteFilter>('all');
  const totalQuestions = questions.length;
  let answeredCount = 0;
  let flaggedCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans && ans.value && ans.value.trim() !== '') {
      answeredCount++;
    }
    if (ans && ans.isFlagged) {
      flaggedCount++;
    }
  });

  const unansweredCount = totalQuestions - answeredCount;
  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  // Filter helper
  const matchesFilter = (q: Question) => {
    const ans = userAnswers[q.id];
    const isAnswered = ans && ans.value && ans.value.trim() !== '';
    const isFlagged = ans?.isFlagged;

    if (activeFilter === 'answered') return isAnswered;
    if (activeFilter === 'unanswered') return !isAnswered;
    if (activeFilter === 'flagged') return isFlagged;
    return true; // 'all'
  };

  const mcqQuestions = questions.filter((q) => q.type === 'mcq');
  const fillQuestions = questions.filter((q) => q.type === 'fill');

  return (
    <div className={`flex flex-col h-full bg-white dark:bg-[#101014] select-none ${className}`}>
      {/* Sidebar Header - Compact & Sleek */}
      <div className="p-3 sm:p-3.5 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/60 space-y-2 shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
              Bảng {totalQuestions} Câu Hỏi
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400">
              Đã làm <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{answeredCount}</span>/{totalQuestions} ({progressPercent}%)
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {flaggedCount > 0 && (
              <div className="flex items-center gap-1 px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded-md text-amber-600 dark:text-amber-400 text-[11px] font-mono font-medium">
                <Flag className="w-3 h-3 fill-amber-400" />
                <span>{flaggedCount}</span>
              </div>
            )}

            {onCloseSidebar && (
              <button
                type="button"
                onClick={onCloseSidebar}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-200/70 dark:hover:bg-zinc-800 transition cursor-pointer"
                title="Đóng bảng câu hỏi (Chế độ tập trung Zen)"
                aria-label="Đóng bảng câu hỏi"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Slim Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-zinc-800 h-1 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Compact Filter Tabs */}
        <div className="grid grid-cols-4 gap-1 p-0.5 bg-slate-200/60 dark:bg-zinc-800/60 rounded-lg text-[10px] font-medium">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`py-1 px-0.5 rounded-md transition text-center cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900'
            }`}
          >
            Tất cả ({totalQuestions})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('unanswered')}
            className={`py-1 px-0.5 rounded-md transition text-center cursor-pointer ${
              activeFilter === 'unanswered'
                ? 'bg-rose-500 text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-rose-600'
            }`}
          >
            Chưa ({unansweredCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('answered')}
            className={`py-1 px-0.5 rounded-md transition text-center cursor-pointer ${
              activeFilter === 'answered'
                ? 'bg-emerald-500 text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-emerald-600'
            }`}
          >
            Đã làm ({answeredCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('flagged')}
            className={`py-1 px-0.5 rounded-md transition text-center cursor-pointer ${
              activeFilter === 'flagged'
                ? 'bg-amber-500 text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-amber-600'
            }`}
          >
            Cờ ({flaggedCount})
          </button>
        </div>

        {/* Single-Row Status Legend */}
        <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-zinc-400 font-medium pt-1 border-t border-slate-200/60 dark:border-zinc-800/60">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-xs bg-emerald-500 shrink-0" />
            <span>Đã làm</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-xs bg-slate-200 dark:bg-zinc-700 shrink-0" />
            <span>Chưa làm</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0" />
            <span>Cờ</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-xs bg-sky-500 ring-1 ring-sky-500/50 shrink-0" />
            <span>Đang chọn</span>
          </div>
        </div>
      </div>

      {/* Questions Grid (Single-viewport fit, no-scroll on standard screens) */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
        {/* Section 1: MCQ */}
        {mcqQuestions.length > 0 && (
          <div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider mb-1.5 pb-1 border-b border-slate-100 dark:border-zinc-800/80">
              <span>Phần I: Trắc nghiệm 4 lựa chọn</span>
              <span className="font-mono">{mcqQuestions.length} câu</span>
            </div>
            <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
              {mcqQuestions.map((q) => {
                const idx = questions.findIndex((item) => item.id === q.id);
                const ans = userAnswers[q.id];
                const isAnswered = ans && ans.value && ans.value.trim() !== '';
                const isFlagged = ans?.isFlagged;
                const isCurrent = idx === currentQuestionIndex;
                const isFilteredOut = !matchesFilter(q);

                let btnClass = 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-400 dark:hover:border-zinc-600';

                if (isAnswered) {
                  btnClass = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs';
                }

                if (isFlagged) {
                  btnClass = isAnswered
                    ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-400 dark:border-amber-700 font-semibold';
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-sky-500 ring-offset-1 dark:ring-offset-zinc-950 border-sky-500 font-extrabold';
                }

                if (isFilteredOut) {
                  btnClass += ' opacity-25 grayscale hover:opacity-100 transition-opacity';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => onSelectQuestion(idx)}
                    className={`relative h-7.5 sm:h-8 rounded-lg text-xs font-mono transition-all flex items-center justify-center border cursor-pointer active:scale-95 ${btnClass}`}
                    title={`Câu ${idx + 1}: ${q.topicName} ${isAnswered ? `[Đã chọn: ${ans?.value}]` : '[Chưa làm]'}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && !isAnswered && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white dark:ring-zinc-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 2: Fill-in */}
        {fillQuestions.length > 0 && (
          <div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider mb-1.5 pb-1 border-b border-slate-100 dark:border-zinc-800/80">
              <span>Phần II: Điền đáp số ngắn</span>
              <span className="font-mono text-sky-600 dark:text-sky-400">{fillQuestions.length} câu</span>
            </div>
            <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
              {fillQuestions.map((q) => {
                const idx = questions.findIndex((item) => item.id === q.id);
                const ans = userAnswers[q.id];
                const isAnswered = ans && ans.value && ans.value.trim() !== '';
                const isFlagged = ans?.isFlagged;
                const isCurrent = idx === currentQuestionIndex;
                const isFilteredOut = !matchesFilter(q);

                let btnClass = 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-400 dark:hover:border-zinc-600';

                if (isAnswered) {
                  btnClass = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs';
                }

                if (isFlagged) {
                  btnClass = isAnswered
                    ? 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-400 dark:border-amber-700 font-semibold';
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-sky-500 ring-offset-1 dark:ring-offset-zinc-950 border-sky-500 font-extrabold';
                }

                if (isFilteredOut) {
                  btnClass += ' opacity-25 grayscale hover:opacity-100 transition-opacity';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => onSelectQuestion(idx)}
                    className={`relative h-7.5 sm:h-8 rounded-lg text-xs font-mono transition-all flex items-center justify-center border cursor-pointer active:scale-95 ${btnClass}`}
                    title={`Câu ${idx + 1}: Điền đáp số ${isAnswered ? `[Đã điền: ${ans?.value}]` : '[Chưa làm]'}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && !isAnswered && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white dark:ring-zinc-900" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

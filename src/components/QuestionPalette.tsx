import React from 'react';
import { Flag, CheckCircle2, X } from 'lucide-react';
import { Question, UserAnswer } from '../types/exam';

interface QuestionPaletteProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, UserAnswer>;
  onSelectQuestion: (index: number) => void;
  className?: string;
  onCloseSidebar?: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  onSelectQuestion,
  className = '',
  onCloseSidebar,
}) => {
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

  const mcqQuestions = questions.filter((q) => q.type === 'mcq');
  const fillQuestions = questions.filter((q) => q.type === 'fill');

  return (
    <div className={`flex flex-col h-full bg-white dark:bg-[#101014] select-none ${className}`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/60">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200">
              Bảng 50 Câu Hỏi
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Đã làm <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{answeredCount}</span>/{totalQuestions} câu
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {flaggedCount > 0 && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded-md text-amber-600 dark:text-amber-400 text-xs font-mono font-medium">
                <Flag className="w-3 h-3 fill-amber-400" />
                <span>{flaggedCount}</span>
              </div>
            )}

            {onCloseSidebar && (
              <button
                type="button"
                onClick={onCloseSidebar}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-200/70 dark:hover:bg-zinc-800 transition cursor-pointer"
                title="Đóng bảng câu hỏi (Chế độ tập trung Zen)"
                aria-label="Đóng bảng câu hỏi"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Status Legend */}
        <div className="grid grid-cols-2 gap-1.5 pt-3 mt-3 border-t border-slate-200/80 dark:border-zinc-800/80 text-[11px] text-slate-600 dark:text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 shrink-0" />
            <span>Đã làm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 shrink-0" />
            <span>Chưa làm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 shrink-0" />
            <span>Gắn cờ</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-sky-500 ring-2 ring-sky-500/30 shrink-0" />
            <span>Đang làm</span>
          </div>
        </div>
      </div>

      {/* Scrollable Questions Grid */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Section 1: MCQ */}
        {mcqQuestions.length > 0 && (
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-semibold mb-2.5">
              <span className="uppercase tracking-wider text-[11px]">Phần I: Trắc nghiệm</span>
              <span className="font-mono text-[11px]">{mcqQuestions.length} câu</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {mcqQuestions.map((q) => {
                const idx = questions.findIndex((item) => item.id === q.id);
                const ans = userAnswers[q.id];
                const isAnswered = ans && ans.value && ans.value.trim() !== '';
                const isFlagged = ans?.isFlagged;
                const isCurrent = idx === currentQuestionIndex;

                let btnClass = 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-400 dark:hover:border-zinc-600';

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

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => onSelectQuestion(idx)}
                    className={`relative h-9 rounded-lg text-xs font-mono transition-all flex items-center justify-center border cursor-pointer active:scale-95 ${btnClass}`}
                    title={`Câu ${idx + 1}: ${q.topicName}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && !isAnswered && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
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
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-semibold mb-2.5">
              <span className="uppercase tracking-wider text-[11px]">Phần II: Điền đáp số</span>
              <span className="font-mono text-[11px] text-sky-600 dark:text-sky-400">{fillQuestions.length} câu</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {fillQuestions.map((q) => {
                const idx = questions.findIndex((item) => item.id === q.id);
                const ans = userAnswers[q.id];
                const isAnswered = ans && ans.value && ans.value.trim() !== '';
                const isFlagged = ans?.isFlagged;
                const isCurrent = idx === currentQuestionIndex;

                let btnClass = 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-400 dark:hover:border-zinc-600';

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

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => onSelectQuestion(idx)}
                    className={`relative h-9 rounded-lg text-xs font-mono transition-all flex items-center justify-center border cursor-pointer active:scale-95 ${btnClass}`}
                    title={`Câu ${idx + 1}: Điền đáp số`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && !isAnswered && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
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

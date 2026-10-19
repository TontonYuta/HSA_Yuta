import React from 'react';
import { Check, XCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { Question, ExamReport } from '../../types/exam';
import { MathRenderer } from '../MathRenderer';
import { parseQuestionSource } from '../../utils/questionSource';
import { QuestionSourceBadge } from '../QuestionSourceBadge';

export type ExamAnswerItem = ExamReport['answers'][number];

interface QuestionReviewCardProps {
  item: ExamAnswerItem;
  originalQ?: Question;
  index: number;
  isExpanded: boolean;
  onToggleSolution: () => void;
}

export const QuestionReviewCard: React.FC<QuestionReviewCardProps> = ({
  item,
  originalQ,
  index,
  isExpanded,
  onToggleSolution,
}) => {
  const { sourceTag, cleanContent } = parseQuestionSource(originalQ?.content || '');

  return (
    <div
      className={`p-4 sm:p-5 rounded-xl border transition-colors ${
        item.isCorrect
          ? 'bg-emerald-50/20 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/40'
          : 'bg-rose-50/20 dark:bg-rose-950/10 border-rose-200 dark:border-rose-900/40'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-zinc-800 font-mono text-xs font-bold flex items-center justify-center shrink-0 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700">
            {index + 1}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-semibold text-slate-900 dark:text-zinc-100">
                {item.topicName}
              </span>
              <span className="text-slate-400 dark:text-zinc-600">·</span>
              <span className="text-slate-500 dark:text-zinc-400 font-mono">
                {item.type === 'mcq' ? 'Trắc nghiệm' : 'Điền đáp số'}
              </span>
            </div>

            {sourceTag && (
              <div className="mt-2 mb-1.5">
                <QuestionSourceBadge source={sourceTag} showHideButton={false} />
              </div>
            )}

            <div className="mt-1 text-[15px] sm:text-[16.5px] text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
              <MathRenderer content={cleanContent} />
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 self-end sm:self-start">
          {item.isCorrect ? (
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold inline-flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
              <Check className="w-3 h-3" />
              <span>Đúng (+1đ)</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-bold inline-flex items-center gap-1 border border-rose-300 dark:border-rose-800">
              <XCircle className="w-3 h-3" />
              <span>Sai (0đ)</span>
            </span>
          )}
        </div>
      </div>

      {/* User Answer vs Correct Answer */}
      <div className="mt-3.5 pt-3 border-t border-slate-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-4 flex-wrap font-mono">
          <div>
            <span className="text-slate-500 dark:text-zinc-400">Đáp án của bạn: </span>
            <strong
              className={`px-2 py-0.5 rounded ${
                item.isCorrect
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                  : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'
              }`}
            >
              {item.userAnswer ? item.userAnswer : '(Bỏ trống)'}
            </strong>
          </div>

          <div>
            <span className="text-slate-500 dark:text-zinc-400">Đáp án chính xác: </span>
            <strong className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300">
              {item.correctAnswer}
            </strong>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggleSolution}
          className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 cursor-pointer ml-auto"
        >
          <span>{isExpanded ? 'Thu gọn lời giải' : 'Xem lời giải chi tiết'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Collapsible Detailed Solution */}
      {isExpanded && originalQ && (
        <div className="mt-3.5 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-3 animate-fade-in text-xs sm:text-sm">
          <div className="font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Hướng dẫn giải chi tiết:</span>
          </div>
          <div className="text-[14.5px] sm:text-[15.5px] text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
            <MathRenderer content={originalQ.detailedSolution} />
          </div>

          {originalQ.socraticHint && (
            <div className="mt-2.5 p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm">
              <strong className="text-amber-800 dark:text-amber-300 block mb-0.5">Phương pháp tư duy nhanh:</strong>
              <div className="text-[13.5px] sm:text-[14.5px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                <MathRenderer content={originalQ.socraticHint} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

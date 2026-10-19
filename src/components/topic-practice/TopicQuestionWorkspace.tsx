import React from 'react';
import {
  Check,
  X,
  Lightbulb,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  LayoutGrid,
} from 'lucide-react';
import { Question } from '../../types/exam';
import { MathRenderer } from '../MathRenderer';
import { VirtualMathKeyboard } from '../VirtualMathKeyboard';
import { parseQuestionSource } from '../../utils/questionSource';
import { QuestionSourceBadge } from '../QuestionSourceBadge';

interface TopicQuestionWorkspaceProps {
  currentQ: Question | undefined;
  currentAnswer: string;
  isChecked: boolean;
  isCorrect: boolean;
  isSolutionVisible: boolean;
  isHintVisible: boolean;
  onSelectOption: (key: string) => void;
  onCheckAnswer: () => void;
  onToggleSolution: () => void;
  mainScrollRef: React.RefObject<HTMLElement | null>;
  currentIdx: number;
  totalQuestions: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenSidebar: () => void;
}

export const TopicQuestionWorkspace: React.FC<TopicQuestionWorkspaceProps> = ({
  currentQ,
  currentAnswer,
  isChecked,
  isCorrect,
  isSolutionVisible,
  isHintVisible,
  onSelectOption,
  onCheckAnswer,
  onToggleSolution,
  mainScrollRef,
  currentIdx,
  totalQuestions,
  onPrev,
  onNext,
  onOpenSidebar,
}) => {
  return (
    <>
      {/* Question Workspace - Scrollable within card (Only scrolls if content is very long) */}
      <main
        ref={mainScrollRef}
        className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-5 lg:p-6 pb-24 sm:pb-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700"
      >
        {currentQ ? (
          <div className="w-full max-w-4xl mx-auto space-y-3.5">
            {/* Question Card */}
            <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3.5 transition-colors">
              {/* Micro Metadata */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sky-600 dark:text-sky-400 font-mono">
                    Câu {currentIdx + 1}/{totalQuestions}
                  </span>
                  <span>·</span>
                  <span className="font-semibold text-slate-700 dark:text-zinc-300">
                    {currentQ.topicName}
                  </span>
                  <span>·</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-[11px] font-medium text-slate-600 dark:text-zinc-300">
                    {currentQ.difficulty}
                  </span>
                  {currentQ.isPracticalMath && (
                    <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800/60 flex items-center gap-1">
                      🎯 Toán thực tế
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-mono opacity-70">
                  ID #{currentQ.id}
                </span>
              </div>

              {/* Socratic Hint Box */}
              {isHintVisible && currentQ.socraticHint && (
                <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-2.5 animate-fade-in">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-amber-800 dark:text-amber-300 font-bold mb-0.5">
                      Gợi ý định hướng tư duy:
                    </strong>
                    <div className="leading-relaxed">
                      <MathRenderer content={currentQ.socraticHint} />
                    </div>
                  </div>
                </div>
              )}

              {/* Question Stem with KaTeX & Source Badge */}
              {(() => {
                const { sourceTag, cleanContent } = parseQuestionSource(currentQ.content);
                return (
                  <div>
                    {sourceTag && (
                      <div className="mb-2.5">
                        <QuestionSourceBadge source={sourceTag} showHideButton={false} />
                      </div>
                    )}
                    <div className="text-[15.5px] sm:text-[17.5px] text-slate-900 dark:text-zinc-100 leading-relaxed font-sans">
                      <MathRenderer content={cleanContent} />
                    </div>
                  </div>
                );
              })()}

              {/* Answers Interaction */}
              {currentQ.type === 'mcq' && currentQ.options ? (
                <div className="grid grid-cols-1 gap-2.5 pt-1.5">
                  {currentQ.options.map((opt) => {
                    const isSelected = currentAnswer === opt.key;
                    const isRightOpt = currentQ.correctAnswer === opt.key;

                    let optStyle =
                      'bg-slate-50/60 dark:bg-zinc-950/60 border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-700';

                    if (isSelected) {
                      optStyle =
                        'bg-sky-50 dark:bg-sky-950/40 border-sky-500 text-slate-950 dark:text-white ring-1 ring-sky-500';
                    }

                    if (isChecked) {
                      if (isRightOpt) {
                        optStyle =
                          'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 ring-2 ring-emerald-500';
                      } else if (isSelected && !isRightOpt) {
                        optStyle =
                          'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-200 ring-2 ring-rose-500';
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => onSelectOption(opt.key)}
                        className={`p-3 sm:p-3.5 rounded-xl border text-left transition flex items-start gap-3 cursor-pointer ${optStyle}`}
                      >
                        <span className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 flex items-center justify-center font-mono text-xs sm:text-sm font-bold shrink-0 text-slate-800 dark:text-zinc-200">
                          {opt.key}
                        </span>
                        <div className="flex-1 text-[15px] sm:text-base pt-0.5 leading-relaxed">
                          <MathRenderer content={opt.content} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2">
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-400">
                      Nhập đáp số (Số nguyên, số thập phân hoặc phân số):
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ví dụ: 2.5, -4, 5/2..."
                        value={currentAnswer}
                        onChange={(e) => onSelectOption(e.target.value)}
                        className="flex-1 px-3.5 py-2.5 bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 rounded-xl text-sm sm:text-base text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-mono font-medium"
                      />
                      <button
                        type="button"
                        onClick={onCheckAnswer}
                        className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shadow-xs"
                      >
                        Kiểm tra
                      </button>
                    </div>
                  </div>

                  <div className="max-w-xs">
                    <VirtualMathKeyboard
                      value={currentAnswer}
                      onChange={(val) => onSelectOption(val)}
                    />
                  </div>
                </div>
              )}

              {/* Validation Feedback Banner */}
              {isChecked && (
                <div
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    )}
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        {isCorrect ? 'Chính xác!' : 'Chưa chính xác.'}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-zinc-400">
                        Đáp án đúng:{' '}
                        <span className="font-mono text-slate-900 dark:text-zinc-100 font-bold">
                          {currentQ.correctAnswer}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Solution Box with KaTeX */}
              {isSolutionVisible && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2 animate-fade-in">
                  <div className="font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>Lời giải chi tiết từng bước:</span>
                  </div>
                  <div className="text-[14.5px] sm:text-[16px] text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
                    <MathRenderer content={currentQ.detailedSolution} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl">
            Chưa có câu hỏi trong chuyên đề này.
          </div>
        )}

        {/* Mobile Fixed Bottom Navigation Bar (1-Thumb Thumbzone) */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#0e0e12]/95 backdrop-blur-md border-t border-slate-200 dark:border-zinc-800 px-3 py-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg flex items-center justify-between gap-2 touch-manipulation">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIdx === 0}
            className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 font-semibold text-xs flex items-center justify-center gap-1 disabled:opacity-30 active:scale-95 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Trước</span>
          </button>

          {currentQ?.type === 'mcq' && !isChecked ? (
            <button
              type="button"
              onClick={onCheckAnswer}
              disabled={!currentAnswer}
              className="flex-1 py-2 px-3 rounded-xl bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-1 disabled:opacity-30 active:scale-95 transition cursor-pointer shadow-xs"
            >
              <span>Kiểm tra</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenSidebar}
              className="flex-1 py-2 px-2 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 font-mono font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition cursor-pointer"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>
                {currentIdx + 1}/{totalQuestions}
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={onNext}
            disabled={currentIdx === totalQuestions - 1}
            className="py-2 px-3 rounded-xl bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs flex items-center justify-center gap-1 disabled:opacity-30 active:scale-95 transition cursor-pointer shadow-xs"
          >
            <span>Sau</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>

      {/* Desktop Docked Navigation Bar (Pinned at bottom, zero scrolling needed) */}
      <div className="hidden sm:flex shrink-0 bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-xs border-t border-slate-200 dark:border-zinc-800 px-6 py-3 items-center justify-between z-20">
        <div className="w-full max-w-4xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIdx === 0}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-semibold transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Câu trước</span>
          </button>

          <div className="flex items-center gap-2">
            {currentQ?.type === 'mcq' &&
              (!isChecked ? (
                <button
                  type="button"
                  onClick={onCheckAnswer}
                  disabled={!currentAnswer}
                  className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition disabled:opacity-30 shadow-xs cursor-pointer active:scale-95"
                >
                  Kiểm tra đáp án
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onToggleSolution}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-semibold transition cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                  <span>{isSolutionVisible ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
                </button>
              ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            disabled={currentIdx === totalQuestions - 1}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-xs font-semibold shadow-xs transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Câu tiếp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};

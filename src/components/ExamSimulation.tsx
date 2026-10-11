import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Flag, 
  Check, 
  AlertTriangle, 
  HelpCircle,
  Lightbulb,
  X,
  Keyboard,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Question, UserAnswer, ExamSet } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { VirtualMathKeyboard } from './VirtualMathKeyboard';
import { QuestionPalette } from './QuestionPalette';

interface ExamSimulationProps {
  questions: Question[];
  currentExamSet: ExamSet;
  currentQuestionIndex: number;
  userAnswers: Record<number, UserAnswer>;
  onSelectQuestion: (index: number) => void;
  onAnswerQuestion: (questionId: number, value: string) => void;
  onToggleFlag: (questionId: number) => void;
  onSubmitExam: () => void;
  isConfirmSubmitOpen: boolean;
  setIsConfirmSubmitOpen: (open: boolean) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

export const ExamSimulation: React.FC<ExamSimulationProps> = ({
  questions,
  currentExamSet,
  currentQuestionIndex,
  userAnswers,
  onSelectQuestion,
  onAnswerQuestion,
  onToggleFlag,
  onSubmitExam,
  isConfirmSubmitOpen,
  setIsConfirmSubmitOpen,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const currentQ = questions[currentQuestionIndex] || questions[0];
  const currentAns = userAnswers[currentQ?.id];
  const currentValue = currentAns?.value || '';
  const isFlagged = currentAns?.isFlagged || false;

  const [showKeyboard, setShowKeyboard] = useState(true);
  const [showHintModal, setShowHintModal] = useState(false);

  const totalQuestions = questions.length;
  let answeredCount = 0;
  let flaggedCount = 0;

  questions.forEach((q) => {
    const a = userAnswers[q.id];
    if (a && a.value && a.value.trim() !== '') answeredCount++;
    if (a && a.isFlagged) flaggedCount++;
  });

  const unansweredCount = totalQuestions - answeredCount;

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      onSelectQuestion(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      onSelectQuestion(currentQuestionIndex + 1);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if student is typing inside an input/textarea
      const target = e.target as HTMLElement;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');

      if (e.key === 'ArrowLeft' && !isInput) {
        e.preventDefault();
        handlePrev();
        return;
      }

      if (e.key === 'ArrowRight' && !isInput) {
        e.preventDefault();
        handleNext();
        return;
      }

      if (currentQ?.type === 'mcq' && !isInput) {
        const key = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(key)) {
          e.preventDefault();
          onAnswerQuestion(currentQ.id, key);
        } else if (['1', '2', '3', '4'].includes(key)) {
          e.preventDefault();
          const mapKey: Record<string, string> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
          onAnswerQuestion(currentQ.id, mapKey[key]);
        }
      }

      if ((e.key === 'f' || e.key === 'F') && !isInput) {
        e.preventDefault();
        onToggleFlag(currentQ.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, currentQ, onAnswerQuestion, onToggleFlag]);

  return (
    <div className="h-[calc(100vh-52px)] flex overflow-hidden bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 transition-colors">
      {/* ============================================================== */}
      {/* MAIN QUESTION WORKSPACE (Left / Center - Scrollable)            */}
      {/* ============================================================== */}
      <main className="flex-1 overflow-y-auto flex flex-col justify-between p-4 sm:p-6 lg:p-8">
        <div className={`w-full mx-auto space-y-6 transition-all duration-200 ${isSidebarOpen ? 'max-w-4xl' : 'max-w-4xl lg:max-w-5xl'}`}>
          {/* Question Metadata Bar */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-zinc-800">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 rounded-lg bg-sky-600 text-white font-mono text-xs font-bold shadow-xs">
                Câu {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-semibold">
                {currentQ.topicName}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-500 hidden sm:inline">
                {currentQ.type === 'mcq' ? 'Phần I: Trắc nghiệm 4 lựa chọn' : 'Phần II: Tự luận điền số ngắn'}
              </span>
            </div>

            {/* Quick Actions (Flag & Hint) */}
            <div className="flex items-center gap-2">
              {currentQ.socraticHint && (
                <button
                  type="button"
                  onClick={() => setShowHintModal(true)}
                  className="px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 hover:bg-amber-100 text-xs font-medium inline-flex items-center gap-1.5 transition cursor-pointer"
                  title="Xem gợi ý tư duy cho câu hỏi này"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden sm:inline">Gợi ý tư duy</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onToggleFlag(currentQ.id)}
                className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition inline-flex items-center gap-1.5 cursor-pointer ${
                  isFlagged
                    ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                    : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
                title="Đánh dấu câu hỏi cần xem lại sau (Phím tắt: F)"
              >
                <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
                <span>{isFlagged ? 'Đã gắn cờ' : 'Gắn cờ'}</span>
              </button>
            </div>
          </div>

          {/* Question Text Box with Clear KaTeX Styling */}
          <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-xs">
            <div className="text-base sm:text-lg leading-relaxed select-text font-normal text-slate-900 dark:text-zinc-100">
              <MathRenderer content={currentQ.content} />
            </div>
          </div>

          {/* Answer Interaction Area */}
          {currentQ.type === 'mcq' && currentQ.options && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center justify-between">
                <span>Chọn 1 trong 4 đáp án (Phím tắt: A, B, C, D hoặc 1, 2, 3, 4):</span>
                {currentValue && (
                  <span className="font-mono text-sky-600 dark:text-sky-400">
                    Đã chọn: [{currentValue}]
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = currentValue === opt.key;

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => onAnswerQuestion(currentQ.id, opt.key)}
                      className={`p-4 rounded-xl border text-left transition-all duration-150 active:scale-[0.99] flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 dark:border-sky-500/80 ring-2 ring-sky-500/30 text-slate-950 dark:text-white shadow-xs'
                          : 'bg-white dark:bg-[#121216] border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-700 hover:bg-slate-50/70 dark:hover:bg-zinc-900/60'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border transition ${
                          isSelected
                            ? 'bg-sky-600 border-sky-600 text-white'
                            : 'bg-slate-100 dark:bg-zinc-800 border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <div className="text-sm sm:text-base pt-0.5 flex-1">
                        <MathRenderer content={opt.content} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentQ.type === 'fill' && (
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 space-y-3 shadow-xs">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                  Nhập đáp số (Số nguyên, số thập phân hoặc phân số ví dụ 2.5, -4, 5/2):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Gõ kết quả hoặc bấm bàn phím ảo bên dưới..."
                    value={currentValue}
                    onChange={(e) => onAnswerQuestion(currentQ.id, e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-base text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 font-mono tracking-wide font-medium"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowKeyboard((prev) => !prev)}
                    className="px-3.5 py-2.5 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 rounded-xl text-xs font-medium transition inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Keyboard className="w-4 h-4" />
                    <span>{showKeyboard ? 'Ẩn phím ảo' : 'Mở phím ảo'}</span>
                  </button>
                </div>
              </div>

              {showKeyboard && (
                <div className="max-w-sm">
                  <VirtualMathKeyboard
                    value={currentValue}
                    onChange={(val) => onAnswerQuestion(currentQ.id, val)}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Question Navigation Bar */}
        <div className={`w-full mx-auto pt-6 mt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-3 transition-all duration-200 ${isSidebarOpen ? 'max-w-4xl' : 'max-w-4xl lg:max-w-5xl'}`}>
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs sm:text-sm font-semibold transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Câu trước</span>
          </button>

          <div className="flex items-center gap-3">
            {currentValue && (
              <button
                type="button"
                onClick={() => onAnswerQuestion(currentQ.id, '')}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition cursor-pointer font-medium"
              >
                Xóa đáp án
              </button>
            )}

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-xs sm:text-sm font-semibold shadow-sm transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsConfirmSubmitOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-semibold shadow-md transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Nộp bài thi</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* ============================================================== */}
      {/* RIGHT SIDEBAR (Collapsible 50 Questions Palette)               */}
      {/* ============================================================== */}
      {isSidebarOpen ? (
        <>
          {/* Mobile backdrop */}
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs animate-fade-in"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="fixed md:static inset-y-0 right-0 z-50 md:z-20 w-80 max-w-[88vw] md:max-w-none border-l border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#101014] flex flex-col shrink-0 animate-slide-in-right md:animate-fade-in shadow-2xl md:shadow-none">
            <QuestionPalette
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              userAnswers={userAnswers}
              onSelectQuestion={(idx) => {
                onSelectQuestion(idx);
                if (window.innerWidth < 768) {
                  setIsSidebarOpen(false);
                }
              }}
              onCloseSidebar={() => setIsSidebarOpen(false)}
            />
          </aside>
        </>
      ) : (
        /* Floating Handle on Right Edge to Re-open Palette with One Click */
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-[#101014] border-l-2 border-y border-l-sky-500 border-slate-200 dark:border-zinc-800 shadow-xl px-2 py-4 rounded-l-xl text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all flex flex-col items-center gap-2 group cursor-pointer"
          title="Mở bảng 50 câu hỏi"
        >
          <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-transform group-hover:-translate-x-0.5" />
          <span className="[writing-mode:vertical-rl] font-mono tracking-wider text-[11px] font-bold text-slate-700 dark:text-zinc-200">
            50 CÂU ({answeredCount}/{totalQuestions})
          </span>
        </button>
      )}

      {/* ============================================================== */}
      {/* SOCRATIC / PEDAGOGICAL HINT MODAL                              */}
      {/* ============================================================== */}
      {showHintModal && currentQ.socraticHint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Gợi ý định hướng tư duy câu {currentQuestionIndex + 1}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowHintModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
              <MathRenderer content={currentQ.socraticHint} />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowHintModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold cursor-pointer"
              >
                Đã hiểu, quay lại làm bài
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* CONFIRMATION SUBMISSION MODAL                                  */}
      {/* ============================================================== */}
      {isConfirmSubmitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                  Xác nhận nộp bài thi?
                </h3>
                <p className="text-xs text-slate-500 font-mono">{currentExamSet.title}</p>
              </div>
            </div>

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

            {unansweredCount > 0 && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Bạn còn <strong className="font-mono">{unansweredCount} câu</strong> chưa làm. Bạn vẫn có thể nộp hoặc tiếp tục hoàn thành.
                </span>
              </div>
            )}

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setIsConfirmSubmitOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsConfirmSubmitOpen(false);
                  onSubmitExam();
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-md transition cursor-pointer"
              >
                Xác nhận nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

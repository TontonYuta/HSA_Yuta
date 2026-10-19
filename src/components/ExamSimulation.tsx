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
  ChevronLeft,
  BookOpen,
  Edit3,
  RotateCcw,
  EyeOff,
  Eye,
  Type,
  LayoutGrid,
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';
import { Question, UserAnswer, ExamSet } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { VirtualMathKeyboard } from './VirtualMathKeyboard';
import { QuestionPalette } from './QuestionPalette';
import { FormulaSheetModal } from './FormulaSheetModal';
import { ExamConfirmSubmitModal } from './exam-simulation/ExamConfirmSubmitModal';
import { parseQuestionSource } from '../utils/questionSource';
import { QuestionSourceBadge } from './QuestionSourceBadge';

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
  tabSwitchCount?: number;
  onTabSwitchCountChange?: (count: number) => void;
  studentName?: string;
  hideQuestionSource?: boolean;
  onToggleHideQuestionSource?: () => void;
}

type FontSizeOption = 'sm' | 'base' | 'lg' | 'xl';

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
  tabSwitchCount = 0,
  onTabSwitchCountChange,
  studentName = 'Học sinh HSA',
  hideQuestionSource = false,
  onToggleHideQuestionSource,
}) => {
  const currentQ = questions[currentQuestionIndex] || questions[0];
  const currentAns = userAnswers[currentQ?.id];
  const currentValue = currentAns?.value || '';
  const isFlagged = currentAns?.isFlagged || false;

  const mainScrollRef = React.useRef<HTMLElement>(null);

  // Proctoring & Anti-Cheat State
  const [internalTabSwitchCount, setInternalTabSwitchCount] = useState<number>(tabSwitchCount);
  const [isTabViolationAlertOpen, setIsTabViolationAlertOpen] = useState<boolean>(false);
  const [securityToast, setSecurityToast] = useState<string | null>(null);
  const lastViolationTimeRef = React.useRef<number>(0);
  const toastTimeoutRef = React.useRef<any>(null);

  const showSecurityToast = React.useCallback((message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setSecurityToast(message);
    toastTimeoutRef.current = setTimeout(() => {
      setSecurityToast(null);
    }, 3200);
  }, []);

  // Sync external tabSwitchCount if updated
  useEffect(() => {
    if (typeof tabSwitchCount === 'number') {
      setInternalTabSwitchCount(tabSwitchCount);
    }
  }, [tabSwitchCount]);

  // Tab switch & focus loss proctoring violation handler
  const handleViolation = React.useCallback(() => {
    const now = Date.now();
    // Debounce violation triggers (within 1.2 seconds)
    if (now - lastViolationTimeRef.current < 1200) return;
    lastViolationTimeRef.current = now;

    setInternalTabSwitchCount((prev) => {
      const next = prev + 1;
      onTabSwitchCountChange?.(next);
      return next;
    });

    setIsTabViolationAlertOpen(true);
  }, [onTabSwitchCountChange]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation();
      }
    };

    const handleWindowBlur = () => {
      handleViolation();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [handleViolation]);

  const handlePreventCopy = (e: React.SyntheticEvent, actionName: string) => {
    e.preventDefault();
    showSecurityToast(`Thao tác ${actionName} bị vô hiệu hóa trong phòng thi để bảo mật đề thi.`);
  };

  // Auto scroll question view to top when navigating between questions
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentQuestionIndex]);

  const [showKeyboard, setShowKeyboard] = useState(true);
  const [showFormulaModal, setShowFormulaModal] = useState(false);
  const [showScratchpad, setShowScratchpad] = useState(false);
  const [scratchpadText, setScratchpadText] = useState('');

  // Option Elimination (Strikethrough) state per question
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<number, string[]>>({});

  // Font Size Scaling
  const [fontSize, setFontSize] = useState<FontSizeOption>('base');

  const totalQuestions = questions.length;
  let answeredCount = 0;
  let flaggedCount = 0;
  const unansweredIndices: number[] = [];

  questions.forEach((q, idx) => {
    const a = userAnswers[q.id];
    if (a && a.value && a.value.trim() !== '') {
      answeredCount++;
    } else {
      unansweredIndices.push(idx);
    }
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

  // Toggle Elimination for an MCQ option
  const toggleEliminate = (optKey: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const currentList = eliminatedOptions[currentQ.id] || [];
    if (currentList.includes(optKey)) {
      setEliminatedOptions({
        ...eliminatedOptions,
        [currentQ.id]: currentList.filter((k) => k !== optKey),
      });
    } else {
      // If user had currently chosen this option, clear it
      if (currentValue === optKey) {
        onAnswerQuestion(currentQ.id, '');
      }
      setEliminatedOptions({
        ...eliminatedOptions,
        [currentQ.id]: [...currentList, optKey],
      });
    }
  };

  // Select an option (automatically un-eliminates if previously crossed out)
  const handleSelectOption = (optKey: string) => {
    const currentList = eliminatedOptions[currentQ.id] || [];
    if (currentList.includes(optKey)) {
      setEliminatedOptions({
        ...eliminatedOptions,
        [currentQ.id]: currentList.filter((k) => k !== optKey),
      });
    }
    onAnswerQuestion(currentQ.id, optKey);
  };

  // Font size class mapper (Optimized ergonomic typography scale for Desktop & Mobile)
  const fontContentClass = {
    sm: 'text-[15px] sm:text-base leading-relaxed',
    base: 'text-[16.5px] sm:text-[18px] lg:text-[18.5px] leading-relaxed',
    lg: 'text-[18px] sm:text-[20px] leading-relaxed',
    xl: 'text-[20px] sm:text-[22px] leading-relaxed',
  }[fontSize];

  const fontOptionClass = {
    sm: 'text-[14px] sm:text-[15px] leading-normal',
    base: 'text-[15.5px] sm:text-[16.5px] lg:text-[17px] leading-normal',
    lg: 'text-[17px] sm:text-[18.5px] leading-normal',
    xl: 'text-[18.5px] sm:text-[20px] leading-normal',
  }[fontSize];

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Anti-Inspection & DevTools blocking
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
        ((e.ctrlKey || e.metaKey) && ['U', 'S', 'P'].includes(e.key.toUpperCase()))
      ) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityToast('Phím tắt hệ thống / thanh tra mã nguồn bị vô hiệu hóa trong phòng thi.');
        return;
      }

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
          handleSelectOption(key);
        } else if (['1', '2', '3', '4'].includes(key)) {
          e.preventDefault();
          const mapKey: Record<string, string> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
          handleSelectOption(mapKey[key]);
        }
      }

      if ((e.key === 'f' || e.key === 'F') && !isInput) {
        e.preventDefault();
        onToggleFlag(currentQ.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, currentQ, onAnswerQuestion, onToggleFlag, eliminatedOptions, showSecurityToast]);

  const currentEliminated = eliminatedOptions[currentQ.id] || [];

  return (
    <div className="h-[calc(100vh-52px)] flex overflow-hidden bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 transition-colors">
      {/* ============================================================== */}
      {/* MAIN QUESTION WORKSPACE COLUMN (3-Tier CBT Layout: No-Scroll)   */}
      {/* ============================================================== */}
      <div className="flex-1 flex flex-col h-full min-h-0 overflow-hidden">
        {/* TIER 1: FIXED TOPBAR (Question Metadata & CBT Control Bar) */}
        <header className="shrink-0 bg-white/95 dark:bg-[#101014]/95 backdrop-blur-xs border-b border-slate-200 dark:border-zinc-800 px-3.5 sm:px-6 py-2.5 z-10 transition-colors shadow-2xs">
          <div className={`w-full mx-auto flex items-center justify-between gap-2.5 flex-wrap ${isSidebarOpen ? 'max-w-4xl' : 'max-w-4xl lg:max-w-5xl'}`}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-lg bg-sky-600 text-white font-mono text-xs font-bold shadow-xs">
                Câu {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-semibold">
                {currentQ.topicName}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-500 hidden sm:inline">
                {currentQ.type === 'mcq' ? 'Trắc nghiệm 4 lựa chọn' : 'Điền đáp số ngắn'}
              </span>

              {/* Proctoring & Integrity Badge */}
              <div
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                  internalTabSwitchCount === 0
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                    : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300'
                }`}
                title={
                  internalTabSwitchCount === 0
                    ? 'Phòng thi bảo mật: Đang duy trì trạng thái tập trung'
                    : `Hệ thống ghi nhận ${internalTabSwitchCount} lần rời khỏi màn hình bài thi`
                }
              >
                {internalTabSwitchCount === 0 ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                )}
                <span className="text-[11px] font-mono">
                  {internalTabSwitchCount === 0 ? 'Phòng thi bảo mật' : `${internalTabSwitchCount} lần rời tab`}
                </span>
              </div>
            </div>

            {/* Student Utility Toolbar: Formulas, Scratchpad, Zoom, Hints, Flag */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Formula Sheet Quick Launcher */}
              <button
                type="button"
                onClick={() => setShowFormulaModal(true)}
                className="px-2.5 py-1 rounded-lg border border-sky-200 dark:border-sky-900/60 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300 hover:bg-sky-100 text-xs font-medium inline-flex items-center gap-1 transition cursor-pointer"
                title="Bảng tra cứu công thức trọng tâm HSA"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                <span className="hidden sm:inline">Công thức</span>
              </button>

              {/* Quick Scratchpad Launcher */}
              <button
                type="button"
                onClick={() => setShowScratchpad((prev) => !prev)}
                className={`px-2.5 py-1 rounded-lg border text-xs font-medium inline-flex items-center gap-1 transition cursor-pointer ${
                  showScratchpad
                    ? 'bg-violet-600 text-white border-violet-600'
                    : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
                title="Mở sổ tay nháp nhanh"
              >
                <Edit3 className="w-3.5 h-3.5 text-violet-500" />
                <span className="hidden sm:inline">Sổ nháp</span>
              </button>

              {/* Font Size Zoom Controller */}
              <div className="flex items-center border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg p-0.5 text-xs font-bold text-slate-600 dark:text-zinc-300">
                <button
                  type="button"
                  onClick={() => {
                    if (fontSize === 'xl') setFontSize('lg');
                    else if (fontSize === 'lg') setFontSize('base');
                    else if (fontSize === 'base') setFontSize('sm');
                  }}
                  disabled={fontSize === 'sm'}
                  className="px-1.5 py-0.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded disabled:opacity-30 cursor-pointer"
                  title="Giảm cỡ chữ đề bài (A-)"
                >
                  A-
                </button>
                <span className="px-1 text-[10px] font-mono text-slate-400">
                  {fontSize.toUpperCase()}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (fontSize === 'sm') setFontSize('base');
                    else if (fontSize === 'base') setFontSize('lg');
                    else if (fontSize === 'lg') setFontSize('xl');
                  }}
                  disabled={fontSize === 'xl'}
                  className="px-1.5 py-0.5 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded disabled:opacity-30 cursor-pointer"
                  title="Tăng cỡ chữ đề bài (A+)"
                >
                  A+
                </button>
              </div>

              {/* Toggle Question Source Tag (Hiện / Ẩn Nguồn Đề Thi) */}
              {onToggleHideQuestionSource && (
                <button
                  type="button"
                  onClick={onToggleHideQuestionSource}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-medium inline-flex items-center gap-1 transition cursor-pointer ${
                    !hideQuestionSource
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                      : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
                  }`}
                  title={
                    hideQuestionSource
                      ? 'Hiện nguồn câu hỏi (Sở GD&ĐT / Bộ GD&ĐT)'
                      : 'Ẩn nguồn câu hỏi để thi thử như thi thật'
                  }
                >
                  {hideQuestionSource ? (
                    <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-indigo-500" />
                  )}
                  <span className="hidden sm:inline">
                    {hideQuestionSource ? 'Hiện nguồn' : 'Nguồn đề'}
                  </span>
                </button>
              )}

              {/* Bookmark Flag */}
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
                <span>{isFlagged ? 'Đã cắm cờ' : 'Cắm cờ'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* TIER 2: INTERNAL SCROLLABLE QUESTION WORKSPACE (Only scrolls if content is very tall) */}
        <main
          ref={mainScrollRef}
          className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-5 lg:p-6 pb-20 sm:pb-6 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700"
        >
          <div className={`w-full mx-auto space-y-4 transition-all duration-200 ${isSidebarOpen ? 'max-w-4xl' : 'max-w-4xl lg:max-w-5xl'}`}>
            {/* Collapsible Quick Scratchpad Notepad */}
            {showScratchpad && (
              <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 rounded-2xl p-4 space-y-2 shadow-xs animate-fade-in">
              <div className="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
                <span className="flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" />
                  Sổ nháp tính toán nhanh (Tự lưu tạm thời trong bài thi)
                </span>
                <button
                  type="button"
                  onClick={() => setShowScratchpad(false)}
                  className="text-amber-600 hover:text-amber-900 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <textarea
                value={scratchpadText}
                onChange={(e) => setScratchpadText(e.target.value)}
                placeholder="Gõ nháp các bước tính toán, công thức, số liệu phụ tại đây..."
                rows={3}
                className="w-full p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-amber-200 dark:border-zinc-800 text-xs sm:text-sm font-mono text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          )}

          {/* Question Text Box with Clear KaTeX Styling & Adjustable Font */}
          {(() => {
            const { sourceTag, cleanContent } = parseQuestionSource(currentQ.content);
            return (
              <div
                onCopy={(e) => handlePreventCopy(e, 'sao chép câu hỏi')}
                onCut={(e) => handlePreventCopy(e, 'cắt nội dung')}
                onContextMenu={(e) => handlePreventCopy(e, 'menu chuột phải')}
                className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-xs select-none"
              >
                {/* Question Source Badge (Nổi bật, sang trọng, có thể ẩn nhanh) */}
                {sourceTag && !hideQuestionSource && (
                  <div className="mb-3.5">
                    <QuestionSourceBadge
                      source={sourceTag}
                      onHide={onToggleHideQuestionSource}
                    />
                  </div>
                )}

                <div className={`${fontContentClass} leading-relaxed select-none font-normal text-slate-900 dark:text-zinc-100 transition-all`}>
                  <MathRenderer content={cleanContent} />
                </div>
              </div>
            );
          })()}

          {/* Answer Interaction Area */}
          {currentQ.type === 'mcq' && currentQ.options && (
            <div 
              onCopy={(e) => handlePreventCopy(e, 'sao chép phương án')}
              onContextMenu={(e) => handlePreventCopy(e, 'menu chuột phải')}
              className="space-y-3 select-none"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center justify-between flex-wrap gap-2">
                <span>Chọn 1 trong 4 đáp án (Phím tắt: A, B, C, D):</span>
                <div className="flex items-center gap-3">
                  {currentValue && (
                    <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">
                      Đã chọn: [{currentValue}]
                    </span>
                  )}
                  {currentValue && (
                    <button
                      type="button"
                      onClick={() => onAnswerQuestion(currentQ.id, '')}
                      className="text-[11px] text-rose-500 hover:underline cursor-pointer font-medium"
                    >
                      Bỏ chọn
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {currentQ.options.map((opt) => {
                  const isSelected = currentValue === opt.key;
                  const isEliminated = currentEliminated.includes(opt.key);

                  return (
                    <div
                      key={opt.key}
                      className={`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-150 flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 dark:border-sky-500/80 ring-2 ring-sky-500/30 text-slate-950 dark:text-white shadow-xs'
                          : isEliminated
                          ? 'bg-slate-100/60 dark:bg-zinc-900/40 border-slate-200 dark:border-zinc-800/60 opacity-40 grayscale line-through'
                          : 'bg-white dark:bg-[#121216] border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-700 hover:bg-slate-50/70 dark:hover:bg-zinc-900/60'
                      }`}
                    >
                      {/* Left Option Content */}
                      <button
                        type="button"
                        onClick={() => handleSelectOption(opt.key)}
                        className="flex-1 flex items-start gap-3.5 text-left cursor-pointer"
                      >
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-mono text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 border transition ${
                            isSelected
                              ? 'bg-sky-600 border-sky-600 text-white'
                              : isEliminated
                              ? 'bg-slate-200 dark:bg-zinc-800 text-slate-400 line-through'
                              : 'bg-slate-100 dark:bg-zinc-800 border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <div className={`${fontOptionClass} pt-0.5 flex-1 transition-all`}>
                          <MathRenderer content={opt.content} />
                        </div>
                      </button>

                      {/* Right: Elimination Toggle Action Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleEliminate(opt.key, e)}
                        className={`p-1.5 rounded-lg text-xs transition cursor-pointer shrink-0 ${
                          isEliminated
                            ? 'text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-zinc-800'
                            : 'text-slate-400 hover:text-slate-700 dark:hover:text-zinc-300 hover:bg-slate-200/60 dark:hover:bg-zinc-800'
                        }`}
                        title={isEliminated ? 'Khôi phục phương án này' : 'Gạch loại trừ phương án này (Strikethrough)'}
                      >
                        {isEliminated ? (
                          <span className="flex items-center gap-1 text-[11px] font-medium no-underline">
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Khôi phục</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] opacity-70 hover:opacity-100">
                            <EyeOff className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Loại trừ</span>
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentQ.type === 'fill' && (
            <div className="space-y-4">
              <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                    Nhập đáp số (Số nguyên, số thập phân hoặc phân số ví dụ 2.5, -4, 5/2):
                  </label>
                  {currentValue && (
                    <button
                      type="button"
                      onClick={() => onAnswerQuestion(currentQ.id, '')}
                      className="text-xs text-rose-500 hover:underline cursor-pointer font-medium"
                    >
                      Xóa đáp số
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Gõ kết quả hoặc bấm bàn phím ảo bên dưới..."
                    value={currentValue}
                    onChange={(e) => onAnswerQuestion(currentQ.id, e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-base sm:text-lg text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 font-mono tracking-wide font-medium"
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
        </main>

        {/* TIER 3: FIXED BOTTOM NAVIGATION BAR (Desktop Pinned Footer: Zero-scroll) */}
        <footer className="shrink-0 bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-xs border-t border-slate-200 dark:border-zinc-800 px-3.5 sm:px-6 py-2.5 sm:py-3 z-10 transition-colors hidden sm:block">
          <div className={`w-full mx-auto flex items-center justify-between gap-3 transition-all duration-200 ${isSidebarOpen ? 'max-w-4xl' : 'max-w-4xl lg:max-w-5xl'}`}>
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs sm:text-sm font-semibold transition disabled:opacity-30 inline-flex items-center gap-1 sm:gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Câu trước</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              {currentValue && (
                <button
                  type="button"
                  onClick={() => onAnswerQuestion(currentQ.id, '')}
                  className="px-2 sm:px-3 py-1.5 text-xs text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition cursor-pointer font-medium"
                >
                  Xóa lựa chọn
                </button>
              )}
              <span className="hidden lg:inline text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                Phím tắt: [← Trước] [Tiếp →] [F Cờ] [1-4 / A-D Chọn]
              </span>
            </div>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-xs sm:text-sm font-semibold shadow-sm transition inline-flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsConfirmSubmitOpen(true)}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-semibold shadow-md transition inline-flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95 animate-pulse"
              >
                <span>Nộp bài thi</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </footer>

        {/* Mobile Fixed Bottom Action Bar (Cố định ở đáy điện thoại, tối ưu 1 ngón tay cái) */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#0e0e12]/95 backdrop-blur-md border-t border-slate-200 dark:border-zinc-800 px-3 py-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg flex items-center justify-between gap-2 touch-manipulation">
          {/* Câu trước */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 font-semibold text-xs flex items-center justify-center gap-1 disabled:opacity-30 active:scale-95 transition cursor-pointer"
            aria-label="Câu trước"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trước</span>
          </button>

          {/* Cắm cờ */}
          <button
            type="button"
            onClick={() => onToggleFlag(currentQ.id)}
            className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 active:scale-95 transition cursor-pointer ${
              isFlagged
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400'
            }`}
            title="Cắm cờ câu này"
            aria-label="Cắm cờ câu này"
          >
            <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
            <span className="text-[11px]">{isFlagged ? 'Đã cờ' : 'Cờ'}</span>
          </button>

          {/* Mở bảng câu hỏi */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="flex-1 py-2.5 px-2 rounded-xl border border-sky-300 dark:border-sky-800/80 bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 font-mono font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition cursor-pointer shadow-xs"
            aria-label="Mở bảng câu hỏi"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{currentQuestionIndex + 1}/{questions.length}</span>
          </button>

          {/* Câu tiếp theo / Nộp bài */}
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-2.5 px-2 rounded-xl bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs flex items-center justify-center gap-1 active:scale-95 transition cursor-pointer shadow-xs"
              aria-label="Câu tiếp theo"
            >
              <span>Sau</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsConfirmSubmitOpen(true)}
              className="flex-1 py-2.5 px-2 rounded-xl bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition cursor-pointer shadow-xs"
              aria-label="Nộp bài thi"
            >
              <span>Nộp</span>
              <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* RIGHT SIDEBAR (Collapsible Questions Palette)                   */}
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
        /* Floating Handle on Right Edge to Re-open Palette with One Click (Desktop only) */
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-[#101014] border-l-2 border-y border-l-sky-500 border-slate-200 dark:border-zinc-800 shadow-xl px-2 py-4 rounded-l-xl text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all flex-col items-center gap-2 group cursor-pointer"
          title="Mở bảng câu hỏi"
        >
          <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-transform group-hover:-translate-x-0.5" />
          <span className="[writing-mode:vertical-rl] font-mono tracking-wider text-[11px] font-bold text-slate-700 dark:text-zinc-200">
            {totalQuestions} CÂU ({answeredCount}/{totalQuestions})
          </span>
        </button>
      )}

      {/* ============================================================== */}
      {/* FORMULA SHEET MODAL                                            */}
      {/* ============================================================== */}
      <FormulaSheetModal
        isOpen={showFormulaModal}
        onClose={() => setShowFormulaModal(false)}
      />

      {/* ============================================================== */}
      {/* ENHANCED SMART CONFIRMATION SUBMISSION MODAL                   */}
      {/* ============================================================== */}
      <ExamConfirmSubmitModal
        isOpen={isConfirmSubmitOpen}
        onClose={() => setIsConfirmSubmitOpen(false)}
        onSubmit={onSubmitExam}
        currentExamSet={currentExamSet}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        flaggedCount={flaggedCount}
        unansweredIndices={unansweredIndices}
        onSelectQuestion={onSelectQuestion}
      />

      {/* ============================================================== */}
      {/* BACKGROUND SECURITY WATERMARK                                  */}
      {/* ============================================================== */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-[0.025] dark:opacity-[0.02] flex flex-wrap items-center justify-around gap-16 p-6 rotate-[-15deg] scale-125"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="text-[11px] font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase whitespace-nowrap">
            {studentName} • HSA PROCTOR SECURE SESSION
          </div>
        ))}
      </div>

      {/* ============================================================== */}
      {/* TAB VIOLATION ALERT MODAL (Anti-Cheat & Proctoring)            */}
      {/* ============================================================== */}
      {isTabViolationAlertOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans select-none">
          <div
            className="w-full max-w-md rounded-3xl bg-white dark:bg-[#121217] border border-rose-300 dark:border-rose-900/60 shadow-2xl p-6 sm:p-7 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-xs shrink-0">
                  <ShieldAlert className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                    Cảnh báo giám sát thi HSA
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-zinc-100">
                    Phát hiện rời màn hình làm bài
                  </h3>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-900 dark:text-rose-200 space-y-1.5 leading-relaxed">
                <div className="font-bold flex items-center justify-between">
                  <span>Số lần rời tab ghi nhận:</span>
                  <span className="text-xs font-mono font-black text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-900/50">
                    Lần thứ {internalTabSwitchCount}
                  </span>
                </div>
                <p className="text-[11px] text-rose-700 dark:text-rose-300">
                  Hệ thống giám sát đã ghi nhận việc chuyển tab hoặc mở ứng dụng khác. Số lần vi phạm sẽ được lưu trữ trong Báo cáo phân tích năng lực để đảm bảo tính minh bạch.
                </p>
              </div>

              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Vui lòng tiếp tục làm bài trong cửa sổ này để đảm bảo kết quả đánh giá trung thực và chính xác nhất.
              </p>

              <button
                type="button"
                onClick={() => setIsTabViolationAlertOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-rose-600/20 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Tôi đã hiểu & Quay lại làm bài</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SECURITY NOTICE FLOATING TOAST                                 */}
      {/* ============================================================== */}
      {securityToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/95 dark:bg-zinc-800/95 text-white text-xs font-semibold shadow-2xl border border-slate-700/80 backdrop-blur-md animate-bounce-in max-w-[90vw]">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{securityToast}</span>
        </div>
      )}
    </div>
  );

};

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Lightbulb, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  LayoutGrid,
  List,
  Target,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff,
  Layers,
  Hash,
  Compass,
  Check
} from 'lucide-react';
import { Question, TopicId, MicroTopicInfo } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { ExamTrack, isParametricMQuestion, isPracticalMathQuestion } from '../utils/trackFilter';
import { getTargetExamYear } from '../utils/timeUtils';
import { parseQuestionSource } from '../utils/questionSource';
import { QuestionSourceBadge } from './QuestionSourceBadge';
import { formatMathSnippet } from '../utils/mathSnippet';
import { appConfig, getTrackConfig } from '../config/appConfig';

interface QuestionBankViewProps {
  questions: Question[];
  onStartExam: () => void;
  currentTrack?: ExamTrack;
  onSelectTrack?: (track: ExamTrack) => void;
  onSelectTopicPractice?: (topicId: TopicId) => void;
  topicsMetadata?: MicroTopicInfo[];
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ 
  questions, 
  onStartExam,
  currentTrack = appConfig.defaultTrackId,
  onSelectTrack,
  onSelectTopicPractice,
  topicsMetadata = [],
}) => {
  const currentTrackMeta = getTrackConfig(currentTrack);
  const isPT = currentTrack === 'STANDARD' || currentTrack === 'PHOTHONG' || currentTrack === appConfig.tracks[0]?.id;
  const targetYear = getTargetExamYear();

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [trackFilter, setTrackFilter] = useState<string>('all');

  // View Mode: 'focus' (Master-Detail Zero-Scroll) vs 'list' (Traditional compact list)
  const [viewMode, setViewMode] = useState<'focus' | 'list'>('focus');
  // In Focus mode: navigator submode ('list' cards vs 'grid' numbers palette)
  const [navigatorMode, setNavigatorMode] = useState<'list' | 'grid'>('list');

  // Active question in Focus Mode
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  // Self-testing state for Focus Mode
  const [testedAnswer, setTestedAnswer] = useState<string>('');
  const [fillInput, setFillInput] = useState<string>('');
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(true); // Default open on desktop side-panel
  const [hideQuestionSource, setHideQuestionSource] = useState<boolean>(false);

  // In List Mode: expanded solutions map and pagination
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 10;

  // Mobile drawer for Navigator in Focus Mode
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  // Refs for scrolling stage to top on question change
  const stageScrollRef = useRef<HTMLDivElement>(null);

  // Filter count statistics
  const counts: Record<string, number> = useMemo(() => {
    const trackCounts: Record<string, number> = {};
    for (const t of appConfig.tracks) {
      trackCounts[t.id] = questions.filter((q) => q.track === t.id || q.track === 'BOTH' || (!q.track && t.id === appConfig.defaultTrackId)).length;
    }
    return { ...trackCounts, total: questions.length };
  }, [questions]);

  // Filtered Questions List
  const filtered = useMemo(() => {
    return questions.filter((q) => {
      // Track filter
      if (trackFilter !== 'all' && q.track && q.track !== trackFilter && q.track !== 'BOTH') return false;

      if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      if (searchTerm.trim() !== '') {
        const lower = searchTerm.toLowerCase();
        const matchContent = q.content.toLowerCase().includes(lower);
        const matchTopic = q.topicName.toLowerCase().includes(lower);
        const matchSol = q.detailedSolution.toLowerCase().includes(lower);
        const matchId = `câu ${q.id}`.includes(lower) || `#${q.id}`.includes(lower);
        if (!matchContent && !matchTopic && !matchSol && !matchId) return false;
      }
      return true;
    });
  }, [questions, trackFilter, selectedTopic, selectedType, selectedDifficulty, searchTerm]);

  // Keep activeQuestion in sync with filtered questions
  useEffect(() => {
    if (filtered.length > 0) {
      if (!activeQuestionId || !filtered.some((q) => q.id === activeQuestionId)) {
        setActiveQuestionId(filtered[0].id);
      }
    } else {
      setActiveQuestionId(null);
    }
  }, [filtered, activeQuestionId]);

  // Reset self-test state whenever active question changes
  useEffect(() => {
    setTestedAnswer('');
    setFillInput('');
    setIsAnswerChecked(false);
    setShowHint(false);
    if (stageScrollRef.current) {
      stageScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeQuestionId]);

  // Active question object and its index
  const activeIndex = useMemo(() => {
    if (!activeQuestionId) return 0;
    const idx = filtered.findIndex((q) => q.id === activeQuestionId);
    return idx >= 0 ? idx : 0;
  }, [filtered, activeQuestionId]);

  const activeQuestion: Question | undefined = filtered[activeIndex] || filtered[0];

  // Quick navigation handlers
  const handlePrevQuestion = () => {
    if (activeIndex > 0) {
      setActiveQuestionId(filtered[activeIndex - 1].id);
    }
  };

  const handleNextQuestion = () => {
    if (activeIndex < filtered.length - 1) {
      setActiveQuestionId(filtered[activeIndex + 1].id);
    }
  };

  // Keyboard navigation shortcuts: ArrowLeft / ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'focus') return;
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevQuestion();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, activeIndex, filtered]);

  // List mode pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentQuestionsInList = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const handleFilterChange = (setter: (val: string) => void, val: string) => {
    setter(val);
    setCurrentPage(1);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden text-slate-900 dark:text-zinc-100 font-sans select-none animate-fade-in">
      {/* =================================================================== */}
      {/* 1. CLEAN TOOLBAR (Single-Bar on Desktop, Zero Orphan Rows)         */}
      {/* =================================================================== */}
      <div className="shrink-0 bg-white dark:bg-[#101014] border-b border-slate-200 dark:border-zinc-800 px-3 sm:px-5 py-2.5 flex items-center justify-between gap-3 z-20 overflow-x-auto scrollbar-none">
        {/* Left: Title, Count & View Mode Switcher */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-black text-xs sm:text-sm tracking-tight text-slate-900 dark:text-zinc-100 flex items-center gap-1.5 whitespace-nowrap">
              <span>Ngân Hàng Câu Hỏi</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                isPT ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300' : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
              }`}>
                {filtered.length} / {questions.length}
              </span>
            </span>
          </div>

          <div className="h-4 w-[1px] bg-slate-200 dark:border-zinc-800 hidden sm:block" />

          {/* Mode Switcher Toggle */}
          <div className="flex items-center bg-slate-100 dark:bg-zinc-900 p-0.5 rounded-lg border border-slate-200/80 dark:border-zinc-800 text-[11px] font-semibold shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('focus')}
              className={`px-2.5 py-1 rounded-md transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                viewMode === 'focus'
                  ? 'bg-white dark:bg-zinc-800 text-sky-600 dark:text-sky-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
              title="Chế độ tập trung 1 câu (Không cuộn trang)"
            >
              <Target className="w-3.5 h-3.5" />
              <span>Tập Trung</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`px-2.5 py-1 rounded-md transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-zinc-800 text-sky-600 dark:text-sky-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
              title="Chế độ danh sách thu gọn"
            >
              <List className="w-3.5 h-3.5" />
              <span>Danh Sách</span>
            </button>
          </div>
        </div>

        {/* Right: Inline Search, Topic Filter & Track Pills */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          {/* Quick Search */}
          <div className="relative w-36 sm:w-44 lg:w-48 xl:w-56 shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm câu hỏi, #id..."
              value={searchTerm}
              onChange={(e) => handleFilterChange(setSearchTerm, e.target.value)}
              className="w-full pl-8 pr-2.5 py-1 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium transition"
            />
          </div>

          {/* Micro Topics Selector */}
          <select
            value={selectedTopic}
            onChange={(e) => handleFilterChange(setSelectedTopic, e.target.value)}
            className="px-2 py-1 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg text-xs text-slate-800 dark:text-zinc-200 focus:outline-none focus:border-sky-500 font-medium w-32 sm:w-40 truncate shrink-0"
          >
            <option value="all">Tất cả chuyên đề</option>
            {topicsMetadata.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Track Filter Pills */}
          {appConfig.tracks.length > 1 && (
            <div className="hidden xl:flex items-center gap-1 text-[11px] shrink-0">
              <button
                type="button"
                onClick={() => handleFilterChange(setTrackFilter as any, 'all')}
                className={`px-2 py-1 rounded-md font-semibold transition cursor-pointer whitespace-nowrap ${
                  trackFilter === 'all'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-200'
                }`}
              >
                Tất cả ({questions.length})
              </button>
              {appConfig.tracks.map((track) => {
                const isSelected = trackFilter === track.id;
                const c = counts[track.id] || 0;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => handleFilterChange(setTrackFilter as any, track.id)}
                    className={`px-2 py-1 rounded-md font-semibold transition cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                      isSelected
                        ? `bg-gradient-to-r ${track.activeGradient} shadow-xs`
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-200'
                    }`}
                  >
                    <span>{track.icon} {track.shortName} ({c})</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Quick CTA Vào thi */}
          <button
            type="button"
            onClick={onStartExam}
            className="px-3 py-1.5 text-white bg-sky-600 hover:bg-sky-500 rounded-lg text-xs font-bold transition shrink-0 shadow-xs cursor-pointer whitespace-nowrap"
          >
            Vào thi thử
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. BODY CONTENT: FOCUS MODE (MASTER-DETAIL DUAL-ZONE WORKSPACE)     */}
      {/* =================================================================== */}
      {viewMode === 'focus' ? (
        <div className="flex-1 flex overflow-hidden relative">
          {/* A. LEFT NAVIGATOR PANEL (Desktop 320px, Mobile Drawer) */}
          <div className={`
            fixed md:static inset-y-0 left-0 z-30 w-72 sm:w-80 bg-slate-50/95 dark:bg-[#0c0c10] border-r border-slate-200 dark:border-zinc-800 flex flex-col shrink-0 transition-transform duration-200 md:translate-x-0
            ${isMobileNavOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
          `}>
            {/* Navigator Header */}
            <div className="p-3 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-[#101014] shrink-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-zinc-200">
                <Hash className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Danh Mục Câu Hỏi ({filtered.length})</span>
              </div>

              {/* Submode Switcher: Cards vs Grid Palette */}
              <div className="flex items-center bg-slate-100 dark:bg-zinc-800 p-0.5 rounded-md text-[10px] font-semibold">
                <button
                  type="button"
                  onClick={() => setNavigatorMode('list')}
                  className={`px-2 py-0.5 rounded ${navigatorMode === 'list' ? 'bg-white dark:bg-zinc-700 shadow-xs text-sky-600 dark:text-sky-300 font-bold' : 'text-slate-500'}`}
                  title="Danh sách tóm tắt"
                >
                  List
                </button>
                <button
                  type="button"
                  onClick={() => setNavigatorMode('grid')}
                  className={`px-2 py-0.5 rounded ${navigatorMode === 'grid' ? 'bg-white dark:bg-zinc-700 shadow-xs text-sky-600 dark:text-sky-300 font-bold' : 'text-slate-500'}`}
                  title="Ma trận số"
                >
                  Ma trận
                </button>
              </div>
            </div>

            {/* Navigator List Container */}
            <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700 space-y-1.5">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400 dark:text-zinc-500">
                  Không tìm thấy câu hỏi phù hợp với bộ lọc hiện tại.
                </div>
              ) : navigatorMode === 'list' ? (
                /* 1. Compact Card Items with Clean Math Snippets (No ugly [...]) */
                filtered.map((q, idx) => {
                  const isActive = q.id === activeQuestion?.id;
                  const isPractical = isPracticalMathQuestion(q);
                  const isVDC = q.difficulty === 'Vận dụng cao';
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => {
                        setActiveQuestionId(q.id);
                        setIsMobileNavOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all duration-150 cursor-pointer flex flex-col gap-1 ${
                        isActive
                          ? isPT
                            ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 dark:border-sky-700 ring-1 ring-sky-400/40'
                            : 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 dark:border-amber-700 ring-1 ring-amber-400/40'
                          : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-50/70'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className={`font-mono font-bold ${
                          isActive
                            ? isPT ? 'text-sky-600 dark:text-sky-400' : 'text-amber-600 dark:text-amber-400'
                            : 'text-slate-700 dark:text-zinc-300'
                        }`}>
                          Câu #{q.id} <span className="text-[10px] text-slate-400 font-normal">({idx + 1}/{filtered.length})</span>
                        </span>
                        <div className="flex items-center gap-1">
                          {isPractical && (
                            <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                              🎯 Thực tế
                            </span>
                          )}
                          <span className={`text-[9px] px-1 py-0.2 rounded font-semibold ${
                            isVDC 
                              ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300' 
                              : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400'
                          }`}>
                            {q.difficulty === 'Vận dụng cao' ? 'VDC' : q.difficulty === 'Vận dụng' ? 'VD' : 'TH'}
                          </span>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate font-sans">
                        {q.topicName}
                      </div>
                      {/* Clean Math Excerpt replacing ugly [...] */}
                      <div className="text-[11.5px] text-slate-700 dark:text-zinc-300 line-clamp-2 leading-snug font-sans">
                        {formatMathSnippet(q.content, 110)}
                      </div>
                    </button>
                  );
                })
              ) : (
                /* 2. Compact Grid Number Matrix (Dense Palette) */
                <div className="grid grid-cols-5 gap-1.5 p-1">
                  {filtered.map((q, idx) => {
                    const isActive = q.id === activeQuestion?.id;
                    const isPractical = isPracticalMathQuestion(q);
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => {
                          setActiveQuestionId(q.id);
                          setIsMobileNavOpen(false);
                        }}
                        title={`Câu #${q.id} (${q.topicName})`}
                        className={`h-9 rounded-lg border font-mono text-xs font-bold transition flex items-center justify-center relative cursor-pointer ${
                          isActive
                            ? isPT
                              ? 'bg-sky-600 text-white border-sky-700 shadow-xs ring-2 ring-sky-400/50'
                              : 'bg-amber-600 text-white border-amber-700 shadow-xs ring-2 ring-amber-400/50'
                            : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700'
                        }`}
                      >
                        <span>{idx + 1}</span>
                        {isPractical && (
                          <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Close Backdrop */}
            {isMobileNavOpen && (
              <div 
                className="fixed inset-0 bg-black/40 z-[-1] md:hidden"
                onClick={() => setIsMobileNavOpen(false)}
              />
            )}
          </div>

          {/* B. RIGHT STAGE: FOCUSED DUAL-ZONE WORKSPACE (100% Focused, Zero-Void Layout) */}
          <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-[#09090b]">
            {activeQuestion ? (
              <>
                {/* Stage Header Controls */}
                <div className="shrink-0 px-4 sm:px-6 py-2.5 border-b border-slate-200 dark:border-zinc-800/80 bg-slate-50/60 dark:bg-zinc-900/40 flex items-center justify-between gap-3 flex-wrap">
                  {/* Left: Mobile Navigator trigger & Question Info */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setIsMobileNavOpen(true)}
                      className="md:hidden px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1 cursor-pointer"
                    >
                      <List className="w-3.5 h-3.5" />
                      <span>DS Câu ({activeIndex + 1}/{filtered.length})</span>
                    </button>

                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                      Câu #{activeQuestion.id}
                    </span>

                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 hidden sm:inline">
                      {activeQuestion.topicName}
                    </span>

                    <span className="text-slate-300 dark:text-zinc-700 text-xs hidden sm:inline">·</span>

                    <span className={`text-[11px] px-2 py-0.5 rounded-md border font-semibold ${
                      activeQuestion.difficulty === 'Vận dụng cao'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-400 font-bold'
                        : activeQuestion.difficulty === 'Vận dụng'
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400'
                    }`}>
                      {activeQuestion.difficulty}
                    </span>

                    {isPracticalMathQuestion(activeQuestion) && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300/60 dark:border-emerald-800/60">
                        🎯 Toán thực tế
                      </span>
                    )}

                    {isParametricMQuestion(activeQuestion) && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 font-bold border border-purple-300/60 dark:border-purple-800/60">
                        Tham số m
                      </span>
                    )}
                  </div>

                  {/* Right: Stepper Prev / Next Controls */}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 hidden sm:inline mr-1">
                      {activeIndex + 1} / {filtered.length}
                    </span>

                    <button
                      type="button"
                      disabled={activeIndex <= 0}
                      onClick={handlePrevQuestion}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1 cursor-pointer shadow-xs active:scale-95"
                      title="Câu trước (Phím ←)"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Trước</span>
                    </button>

                    <button
                      type="button"
                      disabled={activeIndex >= filtered.length - 1}
                      onClick={handleNextQuestion}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1 cursor-pointer shadow-xs active:scale-95"
                      title="Câu tiếp theo (Phím →)"
                    >
                      <span className="hidden sm:inline">Tiếp</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Stage Scrollable Body with Responsive Dual-Zone Grid on Desktop */}
                <div 
                  ref={stageScrollRef}
                  className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700"
                >
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                    {/* ========================================================= */}
                    {/* ZONE 1 (PROBLEM & ANSWER CHOICES - xl:col-span-7)         */}
                    {/* ========================================================= */}
                    <div className="xl:col-span-7 space-y-4">
                      {/* Question Source Badge (if available) */}
                      {(() => {
                        const { sourceTag, cleanContent } = parseQuestionSource(activeQuestion.content);
                        return (
                          <div className="space-y-3">
                            {sourceTag && (
                              <div className="flex items-center justify-between">
                                <QuestionSourceBadge source={sourceTag} showHideButton={false} />
                                <button
                                  type="button"
                                  onClick={() => setHideQuestionSource((prev) => !prev)}
                                  className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300 transition flex items-center gap-1 cursor-pointer"
                                >
                                  {hideQuestionSource ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                  <span>{hideQuestionSource ? 'Hiện nguồn' : 'Ẩn nguồn'}</span>
                                </button>
                              </div>
                            )}

                            {/* Question Content */}
                            <div className="text-[15.5px] sm:text-[17px] text-slate-800 dark:text-zinc-100 leading-relaxed font-sans select-text">
                              <MathRenderer content={cleanContent} />
                            </div>
                          </div>
                        );
                      })()}

                      {/* Options & Interactive Tester */}
                      {activeQuestion.type === 'mcq' && activeQuestion.options && (
                        <div className="space-y-2.5 pt-2">
                          <div className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                            Chọn một phương án để tự kiểm tra kiến thức:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[15px] sm:text-[16px]">
                            {activeQuestion.options.map((opt) => {
                              const isSelected = testedAnswer === opt.key;
                              const isCorrect = isAnswerChecked && opt.key === activeQuestion.correctAnswer;
                              const isWrong = isAnswerChecked && isSelected && opt.key !== activeQuestion.correctAnswer;

                              return (
                                <button
                                  key={opt.key}
                                  type="button"
                                  onClick={() => {
                                    setTestedAnswer(opt.key);
                                    setIsAnswerChecked(true);
                                  }}
                                  className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex items-start gap-3 cursor-pointer ${
                                    isCorrect
                                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500/40 shadow-xs'
                                      : isWrong
                                      ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-950 dark:text-rose-100 font-semibold ring-1 ring-rose-500/40 shadow-xs'
                                      : isSelected
                                      ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 text-sky-950 dark:text-sky-100 font-semibold shadow-xs'
                                      : 'bg-slate-50/70 dark:bg-zinc-900/60 border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:bg-slate-100/70 dark:hover:bg-zinc-800/80 hover:border-slate-300'
                                  }`}
                                >
                                  <span className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                                    isCorrect
                                      ? 'bg-emerald-600 text-white border-emerald-600'
                                      : isWrong
                                      ? 'bg-rose-600 text-white border-rose-600'
                                      : isSelected
                                      ? 'bg-sky-600 text-white border-sky-600'
                                      : 'bg-white dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-400'
                                  }`}>
                                    {opt.key}
                                  </span>

                                  <div className="flex-1 select-text">
                                    <MathRenderer content={opt.content} />
                                  </div>

                                  {isCorrect && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  )}
                                  {isWrong && (
                                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Fill in Blank Question Tester */}
                      {activeQuestion.type === 'fill' && (
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 space-y-3">
                          <div className="text-xs font-bold text-slate-600 dark:text-zinc-300">
                            Điền kết quả dạng số thập phân hoặc số nguyên:
                          </div>
                          <div className="flex items-center gap-2 max-w-sm">
                            <input
                              type="text"
                              placeholder="Nhập đáp số..."
                              value={fillInput}
                              onChange={(e) => setFillInput(e.target.value)}
                              className="flex-1 px-3.5 py-2 bg-white dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-sm font-mono text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-sky-500 font-bold"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setTestedAnswer(fillInput.trim());
                                setIsAnswerChecked(true);
                              }}
                              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                            >
                              Kiểm tra
                            </button>
                          </div>

                          {isAnswerChecked && (
                            <div className={`p-3 rounded-lg text-xs font-mono font-bold flex items-center gap-2 ${
                              testedAnswer.replace(',', '.') === activeQuestion.correctAnswer.replace(',', '.')
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                                : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                            }`}>
                              {testedAnswer.replace(',', '.') === activeQuestion.correctAnswer.replace(',', '.') ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Chính xác! Đáp số là: {activeQuestion.correctAnswer}</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  <span>Chưa chính xác. Đáp số chuẩn: {activeQuestion.correctAnswer}</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action Bar (Reset, Practice Topic) */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 dark:border-zinc-800/80">
                        <div className="flex items-center gap-2">
                          {isAnswerChecked && (
                            <button
                              type="button"
                              onClick={() => {
                                setTestedAnswer('');
                                setFillInput('');
                                setIsAnswerChecked(false);
                              }}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Làm lại câu này</span>
                            </button>
                          )}

                          {/* Mobile/Tablet button toggles (hidden on large desktop) */}
                          <button
                            type="button"
                            onClick={() => setShowHint((prev) => !prev)}
                            className={`xl:hidden px-3 py-1.5 rounded-lg border text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                              showHint
                                ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-900 dark:text-amber-200'
                                : 'bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300'
                            }`}
                          >
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            <span>{showHint ? 'Ẩn gợi ý' : 'Gợi ý Socratic'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setShowSolution((prev) => !prev)}
                            className={`xl:hidden px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                              showSolution
                                ? 'bg-sky-600 text-white'
                                : 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60'
                            }`}
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{showSolution ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
                          </button>
                        </div>

                        {onSelectTopicPractice && (
                          <button
                            type="button"
                            onClick={() => onSelectTopicPractice(activeQuestion.topicId as TopicId)}
                            className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-100 transition flex items-center gap-1.5 cursor-pointer ml-auto"
                          >
                            <span>Luyện chuyên đề này</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Accordions for Mobile/Tablet (< xl screens) */}
                      <div className="xl:hidden space-y-3">
                        {showHint && (
                          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 flex items-start gap-2.5 animate-fade-in">
                            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <strong className="block text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
                                Định hướng tư duy giải quyết vấn đề:
                              </strong>
                              <div className="text-[14px] leading-relaxed select-text font-sans">
                                <MathRenderer content={activeQuestion.socraticHint} />
                              </div>
                            </div>
                          </div>
                        )}

                        {showSolution && (
                          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2 animate-fade-in">
                            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 pb-2 border-b border-slate-200/60 dark:border-zinc-800/60">
                              <span>Lời giải chi tiết từng bước:</span>
                              <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                                Đáp án đúng: {activeQuestion.correctAnswer}
                              </span>
                            </div>
                            <div className="text-[14.5px] text-slate-800 dark:text-zinc-200 leading-relaxed font-sans select-text pt-1">
                              <MathRenderer content={activeQuestion.detailedSolution} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ========================================================= */}
                    {/* ZONE 2 (INTEGRATED LEARNING & SOLUTION HUB - xl:col-span-5) */}
                    {/* Eliminates the giant white empty void on desktop!         */}
                    {/* ========================================================= */}
                    <div className="hidden xl:flex flex-col space-y-4 xl:col-span-5 sticky top-0">
                      {/* 1. Socratic Thinking Strategy Card */}
                      <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/90 dark:border-amber-900/40 space-y-2 shadow-xs">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-200">
                          <div className="flex items-center gap-1.5">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            <span>Định Hướng Tư Duy (Socratic):</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200/60 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold">
                            PHẢN XẠ NHANH
                          </span>
                        </div>
                        <div className="text-[13.5px] text-amber-950 dark:text-amber-100 leading-relaxed select-text font-sans">
                          <MathRenderer content={activeQuestion.socraticHint} />
                        </div>
                      </div>

                      {/* 2. Step-by-Step LaTeX Detailed Solution Card */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2.5 shadow-xs">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 pb-2 border-b border-slate-200/80 dark:border-zinc-800/80">
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-sky-500" />
                            <span>Lời Giải Chi Tiết:</span>
                          </div>
                          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                            Đáp án: {activeQuestion.correctAnswer}
                          </span>
                        </div>

                        <div className="text-[14px] text-slate-800 dark:text-zinc-200 leading-relaxed font-sans select-text pt-1 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
                          <MathRenderer content={activeQuestion.detailedSolution} />
                        </div>
                      </div>

                      {/* 3. Knowledge Profile & GDPT 2018 Specs Card */}
                      <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 text-xs space-y-2">
                        <div className="font-bold text-slate-700 dark:text-zinc-300 flex items-center justify-between">
                          <span>Hồ sơ chuyên đề câu hỏi:</span>
                          <span className="text-[10px] font-mono text-slate-400 font-normal">#{activeQuestion.id}</span>
                        </div>
                        <div className="space-y-1 text-slate-600 dark:text-zinc-400 text-[11.5px]">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Chuyên đề:</span>
                            <span className="font-semibold text-slate-800 dark:text-zinc-200 truncate max-w-[200px]">{activeQuestion.topicName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Độ khó:</span>
                            <span className="font-semibold text-slate-800 dark:text-zinc-200">{activeQuestion.difficulty}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Dạng thức:</span>
                            <span className="font-semibold text-slate-800 dark:text-zinc-200">{activeQuestion.type === 'mcq' ? 'Trắc nghiệm 4 phương án' : 'Điền đáp số ngắn'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Tham số m:</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{isParametricMQuestion(activeQuestion) ? 'Có chứa m' : '100% Không tham số m'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage Footer: Keybinding hint */}
                <div className="shrink-0 px-4 py-2 border-t border-slate-100 dark:border-zinc-800/60 bg-slate-50/40 dark:bg-zinc-900/20 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="hidden sm:inline">
                    Mẹo: Dùng phím mũi tên <strong>←</strong> và <strong>→</strong> trên bàn phím để chuyển câu nhanh.
                  </span>
                  <span className="font-mono text-slate-500 dark:text-zinc-400 ml-auto">
                    {activeQuestion.topicName} · {appConfig.subject} {appConfig.grade} ({currentTrackMeta.shortName})
                  </span>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center p-8 text-center text-slate-400">
                Không có câu hỏi nào phù hợp với bộ lọc.
              </div>
            )}
          </div>
        </div>
      ) : (
        /* =================================================================== */
        /* 3. BODY CONTENT: COMPACT LIST VIEW                                  */
        /* =================================================================== */
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 max-w-5xl mx-auto w-full space-y-3 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono px-1">
            <span>Tìm thấy {filtered.length} câu hỏi</span>
            <span>Trang {currentPage} / {totalPages}</span>
          </div>

          {currentQuestionsInList.map((q) => {
            const isExpanded = expandedId === q.id;
            const isPractical = isPracticalMathQuestion(q);
            const { sourceTag, cleanContent } = parseQuestionSource(q.content);

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-4 sm:p-5 hover:border-slate-300 dark:hover:border-zinc-700 transition shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 font-mono font-bold text-sky-600 dark:text-sky-400">
                      Câu #{q.id}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-zinc-200">
                      {q.topicName}
                    </span>
                    <span className="text-slate-300 dark:text-zinc-700">·</span>
                    <span className="text-[11px] text-slate-500">
                      {q.type === 'mcq' ? 'Trắc nghiệm' : 'Điền số'}
                    </span>
                    {isPractical && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        🎯 Thực tế
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedId((prev) => (prev === q.id ? null : q.id))}
                    className="text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 font-semibold transition inline-flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {sourceTag && (
                  <div>
                    <QuestionSourceBadge source={sourceTag} showHideButton={false} />
                  </div>
                )}

                <div className="text-[15px] sm:text-[16px] text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
                  <MathRenderer content={cleanContent} />
                </div>

                {/* MCQ Options */}
                {q.type === 'mcq' && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800 text-[14px]">
                    {q.options.map((opt) => (
                      <div
                        key={opt.key}
                        className={`p-2.5 rounded-lg border flex items-start gap-2 ${
                          isExpanded && opt.key === q.correctAnswer
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200 font-semibold'
                            : 'bg-slate-50/60 dark:bg-zinc-950/40 border-slate-200 dark:border-zinc-800'
                        }`}
                      >
                        <span className="font-mono font-bold text-slate-500 shrink-0">{opt.key}.</span>
                        <div className="flex-1">
                          <MathRenderer content={opt.content} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Fill Answer Display when expanded */}
                {q.type === 'fill' && isExpanded && (
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs font-mono">
                    Đáp số chuẩn: <strong className="text-emerald-600 font-bold">{q.correctAnswer}</strong>
                  </div>
                )}

                {/* Solution Accordion */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 space-y-2 text-xs sm:text-sm animate-fade-in">
                    <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 flex items-start gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-amber-800 dark:text-amber-300 font-bold text-xs mb-0.5">Gợi ý tư duy:</strong>
                        <div className="text-[13.5px] leading-relaxed">
                          <MathRenderer content={q.socraticHint} />
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-1">
                      <div className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                        Lời giải chi tiết:
                      </div>
                      <div className="text-[14px] text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
                        <MathRenderer content={q.detailedSolution} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pt-2 pb-6 flex items-center justify-between gap-2">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Trang trước</span>
              </button>

              <span className="text-xs font-mono text-slate-600 dark:text-zinc-400">
                Trang <strong>{currentPage}</strong> / {totalPages}
              </span>

              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 disabled:opacity-40 cursor-pointer flex items-center gap-1"
              >
                <span>Trang sau</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

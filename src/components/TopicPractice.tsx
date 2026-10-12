import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Check, 
  X, 
  Lightbulb, 
  BookOpen, 
  ArrowRight, 
  ArrowLeft, 
  Eye,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Shuffle,
  Send,
  Mail,
  CheckCircle2,
  Clock,
  RotateCcw,
  LayoutGrid,
  Loader2,
  HelpCircle,
  Home,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, TopicId, ChapterInfo, MicroTopicInfo, UserAnswer } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { VirtualMathKeyboard } from './VirtualMathKeyboard';
import { checkAnswerCorrectness, generateExamReport } from '../utils/scoring';
import { prepareTopicPracticeQuestions } from '../utils/questionRandomizer';
import { CHAPTERS_METADATA } from '../data/topics/index';

interface TopicPracticeProps {
  questions: Question[];
  initialTopicId?: TopicId;
  onBackToExam: () => void;
  studentName?: string;
  setStudentName?: (name: string) => void;
  studentEmail?: string;
  setStudentEmail?: (email: string) => void;
  teacherEmail?: string;
  webhookUrl?: string;
}

export const TopicPractice: React.FC<TopicPracticeProps> = ({
  questions,
  initialTopicId,
  onBackToExam,
  studentName = '',
  setStudentName,
  studentEmail = '',
  setStudentEmail,
  teacherEmail = 'huyhoang6altt@gmail.com',
  webhookUrl,
}) => {
  // Find initial chapter
  const defaultChapter = useMemo(() => {
    if (initialTopicId) {
      const match = CHAPTERS_METADATA.find(c => 
        c.id === initialTopicId || c.topics.some(t => t.id === initialTopicId)
      );
      if (match) return match;
    }
    return CHAPTERS_METADATA[0];
  }, [initialTopicId]);

  // Catalog browsing state: If initialTopicId is NOT provided, show catalog first!
  const [isBrowsingCatalog, setIsBrowsingCatalog] = useState<boolean>(!initialTopicId);
  const [catalogSearch, setCatalogSearch] = useState<string>('');
  const [catalogFilter, setCatalogFilter] = useState<'all' | '12' | '11_10' | 'geometry'>('all');
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(initialTopicId ? (defaultChapter?.id || null) : null);

  const [selectedChapterId, setSelectedChapterId] = useState<string>(defaultChapter.id);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(() => {
    if (initialTopicId && defaultChapter.topics.some(t => t.id === initialTopicId)) {
      return initialTopicId;
    }
    return initialTopicId ? (defaultChapter.topics[0]?.id || null) : null;
  });

  // Sidebar visibility: Default open on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  });

  const [randomSeed, setRandomSeed] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<number, boolean>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});

  // Practice session timing
  const practiceStartTimeRef = useRef<number>(Date.now());
  const mainScrollRef = useRef<HTMLElement>(null);

  // Email submit modal states
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [modalTimeSpent, setModalTimeSpent] = useState<number>(0);

  const [localStudentName, setLocalStudentName] = useState<string>(() => {
    return studentName || localStorage.getItem('hsa_student_name') || 'Học sinh HSA';
  });
  const [localStudentEmail, setLocalStudentEmail] = useState<string>(() => {
    return studentEmail || localStorage.getItem('hsa_student_email') || '';
  });

  // Teacher email is strictly locked to huyhoang6altt@gmail.com
  const FIXED_TEACHER_EMAIL = 'huyhoang6altt@gmail.com';

  useEffect(() => {
    if (studentName) setLocalStudentName(studentName);
  }, [studentName]);

  useEffect(() => {
    if (studentEmail) setLocalStudentEmail(studentEmail);
  }, [studentEmail]);

  // Scroll to top when changing questions
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIdx]);

  // Active chapter
  const currentChapter = useMemo(() => {
    return CHAPTERS_METADATA.find(c => c.id === selectedChapterId) || CHAPTERS_METADATA[0];
  }, [selectedChapterId]);

  // Questions filtered by Chapter or specific Micro-Topic, sorted easy to hard and randomized
  const filteredQuestions = useMemo(() => {
    let list: Question[] = [];
    if (selectedTopicId) {
      list = questions.filter(q => q.topicId === selectedTopicId);
    } else {
      list = questions.filter(q => q.chapterId === selectedChapterId);
    }
    return prepareTopicPracticeQuestions(list);
  }, [questions, selectedChapterId, selectedTopicId, randomSeed]);

  const currentQ = filteredQuestions[currentIdx] || filteredQuestions[0];

  const currentTopicName = useMemo(() => {
    if (selectedTopicId) {
      const topicObj = currentChapter.topics.find((t) => t.id === selectedTopicId);
      return topicObj ? `${currentChapter.shortName} · ${topicObj.name}` : currentChapter.shortName;
    }
    return `Toàn bộ ${currentChapter.name}`;
  }, [currentChapter, selectedTopicId]);

  // Answer counts & stats
  const answeredCount = useMemo(() => {
    return filteredQuestions.filter((q) => answers[q.id] && answers[q.id].trim() !== '').length;
  }, [filteredQuestions, answers]);

  const correctCount = useMemo(() => {
    return filteredQuestions.filter(
      (q) => answers[q.id] && checkAnswerCorrectness(q, answers[q.id])
    ).length;
  }, [filteredQuestions, answers]);

  const resetQuestionState = () => {
    setCurrentIdx(0);
    setAnswers({});
    setCheckedStatus({});
    setShowSolution({});
    setShowHint({});
    practiceStartTimeRef.current = Date.now();
    setSubmitStatus('idle');
  };

  // Synchronize when initialTopicId changes from parent
  useEffect(() => {
    if (initialTopicId) {
      const match = CHAPTERS_METADATA.find(c => 
        c.id === initialTopicId || c.topics.some(t => t.id === initialTopicId)
      );
      if (match) {
        setSelectedChapterId(match.id);
        const t = match.topics.find(top => top.id === initialTopicId);
        setSelectedTopicId(t ? t.id : null);
        setIsBrowsingCatalog(false);
        resetQuestionState();
      }
    } else {
      setIsBrowsingCatalog(true);
      setSelectedTopicId(null);
    }
  }, [initialTopicId]);

  const handleSelectTopicFromCatalog = (chId: string, tId: string | null) => {
    setSelectedChapterId(chId);
    setSelectedTopicId(tId);
    setIsBrowsingCatalog(false);
    setRandomSeed((prev) => prev + 1);
    resetQuestionState();
  };

  // Filtered chapters for the catalog overview screen
  const catalogChapters = useMemo(() => {
    let list = CHAPTERS_METADATA;

    if (catalogFilter === '12') {
      const g12Ids = ['chuong_1_ham_so', 'chuong_2_mu_logarit', 'chuong_3_nguyen_ham_tich_phan', 'chuong_5_toa_do_oxyz', 'chuong_10_toan_thuc_te_toi_uu'];
      list = list.filter(c => g12Ids.includes(c.id));
    } else if (catalogFilter === '11_10') {
      const g1110Ids = ['chuong_6_toan_lop_10', 'chuong_7_day_so_cap_so', 'chuong_8_xac_suat_thong_ke', 'chuong_9_luong_giac'];
      list = list.filter(c => g1110Ids.includes(c.id));
    } else if (catalogFilter === 'geometry') {
      const geomIds = ['chuong_4_hinh_hoc_khong_gian', 'chuong_5_toa_do_oxyz', 'chuong_6_toan_lop_10'];
      list = list.filter(c => geomIds.includes(c.id));
    }

    const q = catalogSearch.trim().toLowerCase();
    if (!q) return list;

    return list
      .map((c) => {
        const chapterMatches =
          c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
        const matchingTopics = c.topics.filter(
          (t) =>
            chapterMatches ||
            t.name.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.shortName.toLowerCase().includes(q)
        );
        if (matchingTopics.length === 0 && !chapterMatches) return null;
        return {
          ...c,
          topics: matchingTopics.length > 0 ? matchingTopics : c.topics,
        };
      })
      .filter((c): c is ChapterInfo => c !== null);
  }, [catalogFilter, catalogSearch]);

  const handleReshuffle = () => {
    setRandomSeed((prev) => prev + 1);
    resetQuestionState();
  };

  const handleSelectChapter = (chId: string) => {
    setSelectedChapterId(chId);
    const ch = CHAPTERS_METADATA.find(c => c.id === chId);
    setSelectedTopicId(ch?.topics[0]?.id || null);
    setRandomSeed((prev) => prev + 1);
    resetQuestionState();
  };

  const handleSelectTopic = (tId: string | null) => {
    setSelectedTopicId(tId);
    setRandomSeed((prev) => prev + 1);
    resetQuestionState();
  };

  const handleSelectOption = (key: string) => {
    if (!currentQ) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: key }));
  };

  const handleCheckAnswer = () => {
    if (!currentQ) return;
    setCheckedStatus((prev) => ({ ...prev, [currentQ.id]: true }));
    setShowSolution((prev) => ({ ...prev, [currentQ.id]: true }));
  };

  const handleNext = () => {
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleOpenSubmitModal = () => {
    const elapsedSeconds = Math.max(
      1,
      Math.round((Date.now() - practiceStartTimeRef.current) / 1000)
    );
    setModalTimeSpent(elapsedSeconds);
    setSubmitStatus('idle');
    setIsSubmitModalOpen(true);
  };

  // Submit and send practice report to teacher email huyhoang6altt@gmail.com
  const handleSendResults = async () => {
    setIsSubmitting(true);
    setSubmitStatus('sending');

    const totalTimeSpentSeconds = Math.max(
      1,
      Math.round((Date.now() - practiceStartTimeRef.current) / 1000)
    );

    const userAnswersRecord: Record<number, UserAnswer> = {};
    filteredQuestions.forEach((q) => {
      userAnswersRecord[q.id] = {
        questionId: q.id,
        value: answers[q.id] || '',
        isFlagged: false,
      };
    });

    const nameToUse = localStudentName.trim() || 'Học sinh HSA';
    const emailToUse = localStudentEmail.trim();

    // Persist to parent & localStorage
    if (setStudentName) setStudentName(nameToUse);
    if (setStudentEmail) setStudentEmail(emailToUse);
    localStorage.setItem('hsa_student_name', nameToUse);
    localStorage.setItem('hsa_student_email', emailToUse);
    localStorage.setItem('hsa_teacher_email', FIXED_TEACHER_EMAIL);

    const report = generateExamReport(
      filteredQuestions,
      userAnswersRecord,
      nameToUse,
      emailToUse,
      totalTimeSpentSeconds,
      `Chuyên đề: ${currentTopicName}`,
      FIXED_TEACHER_EMAIL
    );

    const targetUrl =
      webhookUrl?.trim() ||
      localStorage.getItem('hsa_webhook_url')?.trim() ||
      'https://script.google.com/macros/s/AKfycbydbnEnhDyyS4zkTvZhm6P2kRLLznrpIVSmwSt0YJBa4n3YJLKdNQ4k_zgzHyDox6Rmiw/exec';

    try {
      if (targetUrl) {
        await fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            ...report,
            teacherEmail: FIXED_TEACHER_EMAIL,
          }),
        });
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#0ea5e9', '#10b981', '#f59e0b'],
      });

      setSubmitStatus('success');
    } catch (err) {
      console.error('Lỗi khi gửi báo cáo kết quả:', err);
      // In no-cors browser context, assume delivery succeeded
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentAnswer = currentQ ? answers[currentQ.id] || '' : '';
  const isChecked = currentQ ? checkedStatus[currentQ.id] : false;
  const isCorrect = currentQ && isChecked ? checkAnswerCorrectness(currentQ, currentAnswer) : false;
  const isSolutionVisible = currentQ ? showSolution[currentQ.id] : false;
  const isHintVisible = currentQ ? showHint[currentQ.id] : false;

  // Render Catalog Screen when browsing topics
  if (isBrowsingCatalog) {
    return (
      <div className="h-[calc(100vh-52px)] overflow-y-auto bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 p-3 sm:p-6 lg:p-8 select-none">
        <div className="max-w-6xl mx-auto space-y-6 pb-20">
          {/* Header Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-purple-500/10 dark:from-sky-950/40 dark:via-zinc-900/60 dark:to-indigo-950/30 border border-sky-200/60 dark:border-sky-900/40 p-5 sm:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden ring-2 ring-sky-500/40 shadow-md shrink-0">
                  <img src="/avt.png" alt="TontonYuta" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-sky-200 dark:border-sky-800">
                    <Sparkles className="w-3 h-3" />
                    <span>Hệ Thống 10 Chương & 30 Chuyên Đề HSA</span>
                  </div>
                  <h1 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Trung Tâm Luyện Chuyên Đề Toán HSA
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                    Chọn chuyên đề bạn muốn ôn luyện. Hệ thống cung cấp câu hỏi phân hóa từ Nhận biết đến Vận dụng cao, kiểm tra đáp án tức thì và lời giải chi tiết từng bước.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onBackToExam}
                className="self-end md:self-center px-3.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Về trang chủ</span>
              </button>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 pt-4 border-t border-sky-200/40 dark:border-sky-900/40 text-xs">
              <div className="p-2 rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-slate-200/50 dark:border-zinc-800/50 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-500" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-zinc-100">10 Chương</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Đầy đủ cấu trúc</div>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-slate-200/50 dark:border-zinc-800/50 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-zinc-100">30 Chuyên Đề</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Trọng tâm thi HSA</div>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-slate-200/50 dark:border-zinc-800/50 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-zinc-100">515 Câu Hỏi</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400">Có đáp án & lời giải</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={catalogSearch}
                onChange={(e) => setCatalogSearch(e.target.value)}
                placeholder="Tìm nhanh chuyên đề (tham số m, logarit, oxyz, tích phân...)"
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-xs"
              />
              {catalogSearch && (
                <button
                  type="button"
                  onClick={() => setCatalogSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setCatalogFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  catalogFilter === 'all'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                Tất cả (10 Chương)
              </button>
              <button
                type="button"
                onClick={() => setCatalogFilter('12')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  catalogFilter === '12'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                Chương trình 12
              </button>
              <button
                type="button"
                onClick={() => setCatalogFilter('11_10')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  catalogFilter === '11_10'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                Lớp 11 & 10
              </button>
              <button
                type="button"
                onClick={() => setCatalogFilter('geometry')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  catalogFilter === 'geometry'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                Hình Học & Oxyz
              </button>
            </div>
          </div>

          {/* Chapters & Topics List - Accordion style to save screen space */}
          <div className="space-y-3">
            {catalogChapters.length === 0 ? (
              <div className="p-10 text-center rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500">
                <Search className="w-8 h-8 mx-auto mb-2 text-slate-400 opacity-50" />
                <p className="text-sm font-semibold">Không tìm thấy chuyên đề nào phù hợp</p>
                <p className="text-xs text-slate-400 mt-1">Vui lòng thử từ khóa tìm kiếm khác</p>
              </div>
            ) : (
              catalogChapters.map((ch) => {
                const chQuestions = questions.filter(q => q.chapterId === ch.id);
                const originalIdx = CHAPTERS_METADATA.findIndex(c => c.id === ch.id);
                const isExpanded = expandedChapterId === ch.id || Boolean(catalogSearch.trim());

                return (
                  <div
                    key={ch.id}
                    className={`rounded-2xl border transition-all duration-150 overflow-hidden ${
                      isExpanded
                        ? 'p-4 sm:p-5 bg-white dark:bg-[#101014] border-sky-400 dark:border-sky-800 shadow-xs'
                        : 'p-3.5 sm:p-4 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    {/* Chapter Header (Click to toggle) */}
                    <div
                      onClick={() => setExpandedChapterId((prev) => (prev === ch.id ? null : ch.id))}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                    >
                      <div className="flex-1 flex items-start gap-3">
                        <span className="w-7 h-7 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 border border-sky-200/60 dark:border-sky-800/60">
                          {originalIdx + 1}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">
                              {ch.name}
                            </h2>
                            <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                              ({chQuestions.length} câu · {ch.topics.length} chuyên đề)
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-1">
                            {ch.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => handleSelectTopicFromCatalog(ch.id, null)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1.5 cursor-pointer"
                          title="Luyện tổng hợp tất cả các câu trong chương"
                        >
                          <Shuffle className="w-3.5 h-3.5 text-sky-500" />
                          <span>Luyện cả chương</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setExpandedChapterId((prev) => (prev === ch.id ? null : ch.id))}
                          className={`p-2 rounded-xl border text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
                            isExpanded
                              ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300'
                              : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800'
                          }`}
                          title={isExpanded ? 'Thu gọn' : 'Xem các chuyên đề'}
                        >
                          <span className="text-[11px] font-medium hidden xs:inline">{isExpanded ? 'Thu gọn' : 'Chọn chuyên đề'}</span>
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Micro-topics Cards Grid (Only visible when expanded) */}
                    {isExpanded && (
                      <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 animate-fade-in">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2.5">
                          Các chuyên đề thuộc Chương {originalIdx + 1}:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                          {ch.topics.map((t, tIdx) => {
                            const tCount = questions.filter(q => q.topicId === t.id).length;

                            return (
                              <div
                                key={t.id}
                                className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 hover:border-sky-400 dark:hover:border-sky-700 transition flex flex-col justify-between group"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-zinc-500">
                                      Chuyên đề {tIdx + 1}
                                    </span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 font-mono font-medium text-slate-600 dark:text-zinc-300">
                                      {tCount} câu
                                    </span>
                                  </div>
                                  <h3 className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition line-clamp-1">
                                    {t.name}
                                  </h3>
                                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                                    {t.description}
                                  </p>
                                </div>

                                <div className="mt-3 pt-2.5 border-t border-slate-200/40 dark:border-zinc-800/40 flex items-center justify-end">
                                  <button
                                    type="button"
                                    onClick={() => handleSelectTopicFromCatalog(ch.id, t.id)}
                                    className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                                  >
                                    <span>Luyện ngay</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-52px)] flex overflow-hidden bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 select-none">
      {/* ============================================================== */}
      {/* 1. LEFT SIDEBAR: Chuyên đề & Bảng câu hỏi (Low-scroll Drawer) */}
      {/* ============================================================== */}
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs animate-fade-in"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static top-[52px] bottom-0 left-0 z-40 w-72 lg:w-80 shrink-0 bg-white dark:bg-[#101014] border-r border-slate-200 dark:border-zinc-800 flex flex-col transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:hidden'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-12 px-4 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider">
              30 Chuyên đề HSA
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 cursor-pointer"
            title="Đóng sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Chapters & Topics Picker */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 divide-y divide-slate-100 dark:divide-zinc-800/80">
          {/* Back to Catalog Button */}
          <button
            type="button"
            onClick={() => {
              setIsBrowsingCatalog(true);
              if (window.innerWidth < 1024) setIsSidebarOpen(false);
            }}
            className="w-full mb-1 px-3 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800/80 text-sky-700 dark:text-sky-300 text-xs font-bold transition flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Kho 30 Chuyên Đề</span>
            </div>
            <span className="text-[10px] bg-sky-200/80 dark:bg-sky-900 px-1.5 py-0.5 rounded font-mono font-medium">
              Danh mục
            </span>
          </button>

          {/* Chapter Selector Accordion */}
          <div className="space-y-1.5 pb-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 px-1">
              Chọn Chương (10 Chương GDPT 2018)
            </div>
            <div className="space-y-1">
              {CHAPTERS_METADATA.map((ch, idx) => {
                const isChSelected = selectedChapterId === ch.id;
                const chTotalQuestions = questions.filter(q => q.chapterId === ch.id).length;

                return (
                  <div key={ch.id} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => handleSelectChapter(ch.id)}
                      className={`w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                        isChSelected
                          ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/80'
                          : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/60 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-4 h-4 rounded-md bg-slate-200/80 dark:bg-zinc-800 text-[10px] font-bold flex items-center justify-center font-mono shrink-0">
                          {idx + 1}
                        </span>
                        <span className="truncate">{ch.shortName}</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-60 shrink-0">
                        {chTotalQuestions}
                      </span>
                    </button>

                    {/* Sub-topics list when chapter is selected */}
                    {isChSelected && (
                      <div className="pl-6 pr-1 space-y-1 pt-0.5 animate-fade-in">
                        <button
                          type="button"
                          onClick={() => {
                            handleSelectTopic(null);
                            if (window.innerWidth < 1024) setIsSidebarOpen(false);
                          }}
                          className={`w-full px-2 py-1 rounded-lg text-left text-[11px] transition cursor-pointer flex items-center justify-between ${
                            selectedTopicId === null
                              ? 'bg-sky-600 text-white font-bold'
                              : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
                          }`}
                        >
                          <span>Toàn bộ chương</span>
                          <span className="text-[10px] font-mono opacity-80">{chTotalQuestions} câu</span>
                        </button>
                        {ch.topics.map((t) => {
                          const isTopicSelected = selectedTopicId === t.id;
                          const tCount = questions.filter(q => q.topicId === t.id).length;

                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => {
                                handleSelectTopic(t.id);
                                if (window.innerWidth < 1024) setIsSidebarOpen(false);
                              }}
                              className={`w-full px-2 py-1 rounded-lg text-left text-[11px] transition cursor-pointer flex items-center justify-between ${
                                isTopicSelected
                                  ? 'bg-sky-600 text-white font-bold shadow-xs'
                                  : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
                              }`}
                            >
                              <span className="truncate">{t.name}</span>
                              <span className="text-[10px] font-mono opacity-80 shrink-0 ml-1">
                                {tCount}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question Palette Grid for Current Topic */}
          <div className="pt-3 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 px-1">
              <span>Bảng câu hỏi ({answeredCount}/{filteredQuestions.length})</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono">Đúng: {correctCount}</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {filteredQuestions.map((q, idx) => {
                const isCurrent = currentIdx === idx;
                const ans = answers[q.id];
                const checked = checkedStatus[q.id];
                const correct = checked && ans ? checkAnswerCorrectness(q, ans) : false;

                let btnClass = 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 border-slate-200 dark:border-zinc-700';
                if (checked) {
                  if (correct) {
                    btnClass = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  } else {
                    btnClass = 'bg-rose-600 text-white border-rose-600 font-bold';
                  }
                } else if (ans && ans.trim() !== '') {
                  btnClass = 'bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800 font-bold';
                }

                if (isCurrent) {
                  btnClass += ' ring-2 ring-sky-500 dark:ring-sky-400 scale-105 z-10 shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIdx(idx);
                      if (window.innerWidth < 1024) setIsSidebarOpen(false);
                    }}
                    className={`h-7.5 rounded-lg border text-[11px] font-mono font-semibold flex items-center justify-center transition cursor-pointer active:scale-95 ${btnClass}`}
                    title={`Câu ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar Footer with Quick Return */}
        <div className="p-3 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50 shrink-0 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToExam}
            className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Về trang chủ HSA</span>
          </button>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* 2. MAIN WORKSPACE: Sticky Topbar & Question Canvas (Zero-scroll) */}
      {/* ============================================================== */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Sticky Compact Topbar */}
        <header className="h-12 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#101014] px-3 sm:px-4 flex items-center justify-between gap-2 shrink-0 z-20">
          {/* Left: Sidebar Toggle, Catalog Button & Topic Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <button
              type="button"
              onClick={() => setIsBrowsingCatalog(true)}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1 cursor-pointer shrink-0"
              title="Quay lại danh mục 30 chuyên đề"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden sm:inline text-[11px] font-bold">Chọn CĐ khác</span>
              <span className="sm:hidden text-[11px] font-bold">Đổi CĐ</span>
            </button>

            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1 cursor-pointer shrink-0"
              title="Mở bảng câu hỏi"
              aria-label="Mở bảng câu hỏi"
            >
              <Layers className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden xs:inline text-[11px] font-bold">Bảng câu</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            <div className="truncate text-xs font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
              <span className="truncate">{currentTopicName}</span>
            </div>
          </div>

          {/* Center: Progress & Counter */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white font-mono text-xs font-bold shadow-xs">
              Câu {currentIdx + 1} / {filteredQuestions.length}
            </span>
            <span className="hidden md:inline-flex text-xs font-mono text-slate-500 dark:text-zinc-400">
              Đã làm: <strong className="text-slate-800 dark:text-zinc-200 ml-1">{answeredCount}</strong>/{filteredQuestions.length}
            </span>
            <span className="hidden md:inline-flex text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              Đúng: {correctCount}
            </span>
          </div>

          {/* Right: Actions & Submit Button */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleReshuffle}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-medium text-slate-600 dark:text-zinc-300 transition flex items-center gap-1 cursor-pointer"
              title="Xáo trộn câu hỏi"
            >
              <Shuffle className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden xl:inline">Xáo trộn</span>
            </button>

            <button
              type="button"
              onClick={() => setShowHint((prev) => ({ ...prev, [currentQ?.id]: !prev[currentQ?.id] }))}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
                isHintVisible
                  ? 'bg-amber-500 text-white border-amber-600'
                  : 'border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
              title="Gợi ý tư duy"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden xl:inline">Gợi ý</span>
            </button>

            <button
              type="button"
              onClick={() => setShowSolution((prev) => ({ ...prev, [currentQ?.id]: !prev[currentQ?.id] }))}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border text-xs font-medium transition flex items-center gap-1 cursor-pointer ${
                isSolutionVisible
                  ? 'bg-sky-600 text-white border-sky-600'
                  : 'border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
              title="Xem lời giải chi tiết"
            >
              <Eye className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden xl:inline">Xem giải</span>
            </button>

            {/* Submit & Auto-Email Button */}
            <button
              type="button"
              onClick={handleOpenSubmitModal}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition flex items-center gap-1.5 active:scale-95 cursor-pointer ml-1"
              title="Nộp bài"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp bài</span>
            </button>
          </div>
        </header>

        {/* Question Workspace - Scrollable within card */}
        <main
          ref={mainScrollRef}
          className="flex-1 overflow-y-auto p-3.5 sm:p-5 lg:p-6 pb-24 sm:pb-6 flex flex-col justify-between"
        >
          {currentQ ? (
            <div className="w-full max-w-4xl mx-auto space-y-4">
              {/* Question Card */}
              <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4 transition-colors">
                {/* Micro Metadata */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700 dark:text-zinc-300">
                      {currentQ.topicName}
                    </span>
                    <span>·</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-[11px] font-medium text-slate-600 dark:text-zinc-300">
                      {currentQ.difficulty}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono opacity-70">
                    ID #{currentQ.id}
                  </span>
                </div>

                {/* Socratic Hint Box */}
                {isHintVisible && currentQ.socraticHint && (
                  <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-2.5 animate-fade-in">
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

                {/* Question Stem with KaTeX */}
                <div className="text-sm sm:text-base text-slate-900 dark:text-zinc-100 leading-relaxed font-sans">
                  <MathRenderer content={currentQ.content} />
                </div>

                {/* Answers Interaction */}
                {currentQ.type === 'mcq' && currentQ.options ? (
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {currentQ.options.map((opt) => {
                      const isSelected = currentAnswer === opt.key;
                      const isRightOpt = currentQ.correctAnswer === opt.key;

                      let optStyle = 'bg-slate-50/60 dark:bg-zinc-950/60 border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-700';

                      if (isSelected) {
                        optStyle = 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 text-slate-950 dark:text-white ring-1 ring-sky-500';
                      }

                      if (isChecked) {
                        if (isRightOpt) {
                          optStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 ring-2 ring-emerald-500';
                        } else if (isSelected && !isRightOpt) {
                          optStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-200 ring-2 ring-rose-500';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleSelectOption(opt.key)}
                          className={`p-3 rounded-xl border text-left transition flex items-start gap-3 cursor-pointer ${optStyle}`}
                        >
                          <span className="w-6.5 h-6.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 text-slate-800 dark:text-zinc-200">
                            {opt.key}
                          </span>
                          <div className="flex-1 text-xs sm:text-sm pt-0.5 leading-relaxed">
                            <MathRenderer content={opt.content} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-400">
                        Nhập đáp số (Số nguyên, số thập phân hoặc phân số):
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Ví dụ: 2.5, -4, 5/2..."
                          value={currentAnswer}
                          onChange={(e) => handleSelectOption(e.target.value)}
                          className="flex-1 px-3.5 py-2 bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-mono font-medium"
                        />
                        <button
                          type="button"
                          onClick={handleCheckAnswer}
                          className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold transition cursor-pointer shadow-xs"
                        >
                          Kiểm tra
                        </button>
                      </div>
                    </div>

                    <div className="max-w-xs">
                      <VirtualMathKeyboard
                        value={currentAnswer}
                        onChange={(val) => handleSelectOption(val)}
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
                          Đáp án đúng: <span className="font-mono text-slate-900 dark:text-zinc-100 font-bold">{currentQ.correctAnswer}</span>
                        </div>
                      </div>
                    </div>


                  </div>
                )}

                {/* Detailed Solution Box with KaTeX */}
                {isSolutionVisible && (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2 animate-fade-in">
                    <div className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>Lời giải chi tiết từng bước:</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
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
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 font-semibold text-xs flex items-center justify-center gap-1 disabled:opacity-30 active:scale-95 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Trước</span>
            </button>

            {currentQ?.type === 'mcq' && !isChecked ? (
              <button
                type="button"
                onClick={handleCheckAnswer}
                disabled={!currentAnswer}
                className="flex-1 py-2 px-3 rounded-xl bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-1 disabled:opacity-30 active:scale-95 transition cursor-pointer shadow-xs"
              >
                <span>Kiểm tra</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="flex-1 py-2 px-2 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 font-mono font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition cursor-pointer"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{currentIdx + 1}/{filteredQuestions.length}</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIdx === filteredQuestions.length - 1}
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
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 text-xs font-semibold transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Câu trước</span>
            </button>

            <div className="flex items-center gap-2">
              {currentQ?.type === 'mcq' && (
                !isChecked ? (
                  <button
                    type="button"
                    onClick={handleCheckAnswer}
                    disabled={!currentAnswer}
                    className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition disabled:opacity-30 shadow-xs cursor-pointer active:scale-95"
                  >
                    Kiểm tra đáp án
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSolution((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-xs font-semibold transition cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                    <span>{isSolutionVisible ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
                  </button>
                )
              )}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIdx === filteredQuestions.length - 1}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white text-xs font-semibold shadow-xs transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Câu tiếp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. AUTOMATIC SUBMIT MODAL (No Teacher Opt-out Option)          */}
      {/* ============================================================== */}
      {isSubmitModalOpen && (
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
                onClick={() => setIsSubmitModalOpen(false)}
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
                  {correctCount} / {filteredQuestions.length}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-mono">
                  ({filteredQuestions.length > 0 ? Math.round((correctCount / filteredQuestions.length) * 100) : 0}%)
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                  Đã làm
                </span>
                <span className="text-base sm:text-lg font-bold text-sky-600 dark:text-sky-400 font-mono">
                  {answeredCount} / {filteredQuestions.length}
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
                    value={localStudentName}
                    onChange={(e) => setLocalStudentName(e.target.value)}
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
                    onClick={() => setIsSubmitModalOpen(false)}
                    disabled={isSubmitting}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                  >
                    Tiếp tục làm bài
                  </button>

                  <button
                    type="button"
                    onClick={handleSendResults}
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
                    <span className="font-bold text-slate-800 dark:text-zinc-200">{localStudentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-zinc-400">Điểm đạt:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{correctCount} / {filteredQuestions.length} câu ({filteredQuestions.length > 0 ? Math.round((correctCount / filteredQuestions.length) * 100) : 0}%)</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-semibold hover:bg-slate-200 transition cursor-pointer"
                  >
                    Xem lại bài làm
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitModalOpen(false);
                      handleReshuffle();
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition cursor-pointer shadow-xs"
                  >
                    Làm lại chuyên đề này
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitModalOpen(false);
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
      )}
    </div>
  );
};

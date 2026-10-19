import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  LayoutGrid,
  Layers,
  ChevronDown,
  Shuffle,
  Lightbulb,
  Eye,
  Send,
  MoreVertical,
  SlidersHorizontal,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, TopicId, ChapterInfo, UserAnswer } from '../types/exam';
import { checkAnswerCorrectness, generateExamReport } from '../utils/scoring';
import { prepareTopicPracticeQuestions } from '../utils/questionRandomizer';
import { CHAPTERS_METADATA } from '../data/chaptersMetadata';
import { 
  isAllowedWebhookUrl, 
  checkSubmissionCooldown, 
  recordSubmissionTime, 
  sanitizeInput 
} from '../utils/security';
import { ExamTrack, filterQuestionsByTrack, TRACK_METADATA } from '../utils/trackFilter';

import { TopicCatalogView } from './topic-practice/TopicCatalogView';
import { TopicPracticeSidebar } from './topic-practice/TopicPracticeSidebar';
import { TopicQuestionWorkspace } from './topic-practice/TopicQuestionWorkspace';
import { TopicSubmitModal } from './topic-practice/TopicSubmitModal';
import { FormulaSheetModal } from './FormulaSheetModal';

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
  currentTrack?: ExamTrack;
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
  currentTrack = 'THPTQG',
}) => {
  // Filter questions base pool by track
  const trackBaseQuestions = useMemo(() => {
    return filterQuestionsByTrack(questions, currentTrack);
  }, [questions, currentTrack]);
  // Find initial chapter
  const defaultChapter = useMemo(() => {
    if (initialTopicId) {
      const match = CHAPTERS_METADATA.find(
        (c) => c.id === initialTopicId || c.topics.some((t) => t.id === initialTopicId)
      );
      if (match) return match;
    }
    return CHAPTERS_METADATA[0];
  }, [initialTopicId]);

  // Catalog browsing state: If initialTopicId is NOT provided, show catalog first!
  const [isBrowsingCatalog, setIsBrowsingCatalog] = useState<boolean>(!initialTopicId);
  const [catalogSearch, setCatalogSearch] = useState<string>('');
  const [catalogFilter, setCatalogFilter] = useState<'all' | '12' | '11_10' | 'geometry'>('all');
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(
    initialTopicId ? defaultChapter?.id || null : null
  );

  const [selectedChapterId, setSelectedChapterId] = useState<string>(defaultChapter.id);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(() => {
    if (initialTopicId && defaultChapter.topics.some((t) => t.id === initialTopicId)) {
      return initialTopicId;
    }
    return initialTopicId ? defaultChapter.topics[0]?.id || null : null;
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

  // Options popover & Formula Sheet Modal states (Khu vực 2)
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [showFormulaModal, setShowFormulaModal] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Close options popover when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setIsOptionsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOptionsOpen(false);
      }
    };
    if (isOptionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOptionsOpen]);

  // Session timing
  const practiceStartTimeRef = useRef<number>(Date.now());
  const mainScrollRef = useRef<HTMLElement>(null);

  // Submit modal states
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

  const FIXED_TEACHER_EMAIL = teacherEmail || 'huyhoang6altt@gmail.com';

  useEffect(() => {
    if (studentName) setLocalStudentName(studentName);
  }, [studentName]);

  useEffect(() => {
    if (studentEmail) setLocalStudentEmail(studentEmail);
  }, [studentEmail]);

  // Scroll to top when question changes
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIdx]);

  // Active chapter
  const currentChapter = useMemo(() => {
    return CHAPTERS_METADATA.find((c) => c.id === selectedChapterId) || CHAPTERS_METADATA[0];
  }, [selectedChapterId]);

  // Filtered & randomized questions (track-aware)
  const filteredQuestions = useMemo(() => {
    let list: Question[] = [];
    if (selectedTopicId) {
      list = trackBaseQuestions.filter((q) => q.topicId === selectedTopicId);
    } else {
      list = trackBaseQuestions.filter((q) => q.chapterId === selectedChapterId);
    }
    return prepareTopicPracticeQuestions(list);
  }, [trackBaseQuestions, selectedChapterId, selectedTopicId, randomSeed]);

  const currentQ = filteredQuestions[currentIdx] || filteredQuestions[0];

  const currentTopicName = useMemo(() => {
    if (selectedTopicId) {
      const topicObj = currentChapter.topics.find((t) => t.id === selectedTopicId);
      return topicObj ? `${currentChapter.shortName} · ${topicObj.name}` : currentChapter.shortName;
    }
    return `Toàn bộ ${currentChapter.name}`;
  }, [currentChapter, selectedTopicId]);

  // Answer stats
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

  // Synchronize initialTopicId changes
  useEffect(() => {
    if (initialTopicId) {
      const match = CHAPTERS_METADATA.find(
        (c) => c.id === initialTopicId || c.topics.some((t) => t.id === initialTopicId)
      );
      if (match) {
        setSelectedChapterId(match.id);
        const t = match.topics.find((top) => top.id === initialTopicId);
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

  // Filtered chapters for catalog view
  const catalogChapters = useMemo(() => {
    let list = CHAPTERS_METADATA;

    if (catalogFilter === '12') {
      const g12Ids = [
        'chuong_1_ham_so',
        'chuong_5_toa_do_oxyz',
        'chuong_thong_ke_ghep_nhom',
        'chuong_3_nguyen_ham_tich_phan',
        'chuong_xac_suat_bayes',
      ];
      list = list.filter((c) => g12Ids.includes(c.id));
    } else if (catalogFilter === '11_10') {
      const g1110Ids = [
        'chuong_2_mu_logarit',
        'chuong_7_day_so_cap_so',
        'chuong_4_hinh_hoc_khong_gian',
        'chuong_9_luong_giac',
        'chuong_6_toan_lop_10',
      ];
      list = list.filter((c) => g1110Ids.includes(c.id));
    } else if (catalogFilter === 'geometry') {
      const geomIds = ['chuong_4_hinh_hoc_khong_gian', 'chuong_5_toa_do_oxyz', 'chuong_6_toan_lop_10'];
      list = list.filter((c) => geomIds.includes(c.id));
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
    const ch = CHAPTERS_METADATA.find((c) => c.id === chId);
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

  // Submit and send results
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

    const nameToUse = sanitizeInput(localStudentName.trim() || 'Học sinh HSA', 60);
    const emailToUse = sanitizeInput(localStudentEmail.trim(), 100);

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
      if (targetUrl && isAllowedWebhookUrl(targetUrl)) {
        const cooldown = checkSubmissionCooldown('hsa_practice_submission', 10);
        if (cooldown.canSubmit) {
          recordSubmissionTime('hsa_practice_submission');
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
      <TopicCatalogView
        catalogSearch={catalogSearch}
        setCatalogSearch={setCatalogSearch}
        catalogFilter={catalogFilter}
        setCatalogFilter={setCatalogFilter}
        expandedChapterId={expandedChapterId}
        setExpandedChapterId={setExpandedChapterId}
        catalogChapters={catalogChapters}
        questions={trackBaseQuestions}
        onBackToExam={onBackToExam}
        onSelectTopic={handleSelectTopicFromCatalog}
        currentTrack={currentTrack}
      />
    );
  }

  return (
    <div className="h-[calc(100vh-52px)] md:h-screen flex overflow-hidden bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 select-none">
      {/* 1. LEFT SIDEBAR */}
      <TopicPracticeSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onBackToCatalog={() => setIsBrowsingCatalog(true)}
        onBackToExam={onBackToExam}
        selectedChapterId={selectedChapterId}
        selectedTopicId={selectedTopicId}
        onSelectChapter={handleSelectChapter}
        onSelectTopic={handleSelectTopic}
        questions={trackBaseQuestions}
        filteredQuestions={filteredQuestions}
        currentIdx={currentIdx}
        onSelectQuestionIdx={setCurrentIdx}
        answers={answers}
        checkedStatus={checkedStatus}
        answeredCount={answeredCount}
        correctCount={correctCount}
      />

      {/* 2. MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Sticky Compact Topbar */}
        <header className="h-12 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#101014] px-2 sm:px-4 flex items-center justify-between gap-1.5 sm:gap-2 shrink-0 z-20 overflow-hidden">
          {/* Left: Khu vực 1 - Bộ chọn Dropdown Options 2 Cấp (Chương & Chuyên đề) + Nút Bảng câu */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            {/* Nút Bảng câu hỏi */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="p-1.5 sm:px-2 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1 cursor-pointer shrink-0"
              title="Mở bảng câu hỏi"
              aria-label="Mở bảng câu hỏi"
            >
              <Layers className="w-3.5 h-3.5 text-sky-500" />
              <span className="hidden lg:inline text-[11px] font-bold">Bảng câu</span>
            </button>

            {/* Dropdown 1: Chọn Chương (Options Cấp 1) */}
            <div className="relative shrink-0 w-28 sm:w-32 md:w-36">
              <select
                value={selectedChapterId}
                onChange={(e) => handleSelectChapter(e.target.value)}
                className="w-full appearance-none pl-2 sm:pl-2.5 pr-5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-100/90 dark:bg-zinc-900 hover:bg-slate-200/60 dark:hover:bg-zinc-800 text-xs font-bold text-slate-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer truncate shadow-2xs"
                title="Chọn chương GDPT 2018"
              >
                {CHAPTERS_METADATA.map((ch, idx) => (
                  <option key={ch.id} value={ch.id} className="dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 font-medium">
                    C.{idx + 1}: {ch.shortName}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Dropdown 2: Chọn Chuyên đề (Options Cấp 2) */}
            <div className="relative shrink-0 w-32 sm:w-36 md:w-44">
              <select
                value={selectedTopicId || '__all__'}
                onChange={(e) => handleSelectTopic(e.target.value === '__all__' ? null : e.target.value)}
                className="w-full appearance-none pl-2 sm:pl-2.5 pr-5 py-1.5 rounded-lg border border-sky-200 dark:border-sky-800/80 bg-sky-50/90 dark:bg-sky-950/60 hover:bg-sky-100/90 dark:hover:bg-sky-900/60 text-xs font-bold text-sky-800 dark:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer truncate shadow-2xs"
                title="Chọn chuyên đề làm bài"
              >
                <option value="__all__" className="dark:bg-zinc-900 font-bold text-sky-600 dark:text-sky-400">
                  🌟 Toàn bộ ({trackBaseQuestions.filter((q) => q.chapterId === selectedChapterId).length} câu)
                </option>
                {currentChapter.topics.map((t, idx) => {
                  const count = trackBaseQuestions.filter((q) => q.topicId === t.id).length;
                  return (
                    <option key={t.id} value={t.id} className="dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 font-medium">
                      {idx + 1}. {t.name} ({count} câu)
                    </option>
                  );
                })}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-sky-500 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Right: Khu vực 2 - Tinh gọn còn: [Tiến độ], [Nộp bài], [••• Tùy chọn] */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Tiến độ câu hỏi (Hiện trên màn hình từ sm trở lên) */}
            <span className="hidden sm:inline-flex px-2 sm:px-2.5 py-1 rounded-md bg-sky-600 text-white font-mono text-[11px] sm:text-xs font-bold shadow-2xs">
              {currentIdx + 1}/{filteredQuestions.length}
            </span>

            {/* Nút Nộp bài (Hành động cốt lõi) */}
            <button
              type="button"
              onClick={handleOpenSubmitModal}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition flex items-center gap-1 active:scale-95 cursor-pointer"
              title="Nộp bài hoàn thành chuyên đề"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Nộp bài</span>
            </button>

            {/* Menu [••• Tùy chọn] Gom tất cả các tính năng bổ trợ */}
            <div className="relative" ref={optionsRef}>
              <button
                type="button"
                onClick={() => setIsOptionsOpen((prev) => !prev)}
                className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border text-xs font-semibold transition flex items-center gap-1 cursor-pointer ${
                  isOptionsOpen
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300'
                    : 'border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                }`}
                title="Tùy chọn bổ trợ (Lời giải, Xáo trộn, Gợi ý, Công thức...)"
                aria-label="Tùy chọn bổ trợ"
                aria-expanded={isOptionsOpen}
              >
                <MoreVertical className="w-4 h-4" />
                <span className="hidden xs:inline text-xs font-bold">Tùy chọn</span>
              </button>

              {/* Popover Dropdown Menu */}
              {isOptionsOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-white dark:bg-[#141418] border border-slate-200 dark:border-zinc-800 shadow-xl py-2 z-50 animate-fade-in text-slate-800 dark:text-zinc-200">
                  <div className="px-3 py-1.5 border-b border-slate-100 dark:border-zinc-800/80 mb-1 flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    <span>Tùy chọn làm bài</span>
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>

                  {/* Lời giải chi tiết (Hiện trên mobile) */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowSolution((prev) => ({ ...prev, [currentQ?.id]: !prev[currentQ?.id] }));
                    }}
                    className="w-full px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center justify-between cursor-pointer transition md:hidden"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-zinc-100">Lời giải chi tiết</div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400">Xem giải từng bước</div>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSolutionVisible
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                      }`}
                    >
                      {isSolutionVisible ? 'Đang mở' : 'Tắt'}
                    </span>
                  </button>

                  {/* 1. Xáo trộn thứ tự câu hỏi */}
                  <button
                    type="button"
                    onClick={() => {
                      handleReshuffle();
                      setIsOptionsOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center justify-between cursor-pointer transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-800/60">
                        <Shuffle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-zinc-100">Xáo trộn câu hỏi</div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400">Đảo ngẫu nhiên thứ tự</div>
                      </div>
                    </div>
                  </button>

                  {/* 2. Gợi ý tư duy Socratic (Bật / Tắt) */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowHint((prev) => ({ ...prev, [currentQ?.id]: !prev[currentQ?.id] }));
                    }}
                    className="w-full px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center justify-between cursor-pointer transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60">
                        <Lightbulb className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-zinc-100">Gợi ý tư duy</div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400">Định hướng giải quyết</div>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isHintVisible
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                      }`}
                    >
                      {isHintVisible ? 'Đang bật' : 'Tắt'}
                    </span>
                  </button>

                  {/* 3. Bảng công thức toán học giải nhanh */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowFormulaModal(true);
                      setIsOptionsOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center justify-between cursor-pointer transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-zinc-100">Bảng công thức toán</div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400">Tra cứu nhanh GDPT 2018</div>
                      </div>
                    </div>
                  </button>

                  <div className="my-1.5 border-t border-slate-100 dark:border-zinc-800/80" />

                  {/* 4. Làm lại từ đầu chuyên đề này */}
                  <button
                    type="button"
                    onClick={() => {
                      resetQuestionState();
                      setIsOptionsOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center gap-2.5 cursor-pointer transition text-slate-600 dark:text-zinc-300"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400">
                      <RotateCcw className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold">Làm lại chuyên đề này</div>
                      <div className="text-[10px] text-slate-400 dark:text-zinc-500">Xóa các đáp án đã chọn</div>
                    </div>
                  </button>

                  {/* 5. Xem danh mục 30 Chuyên đề */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsBrowsingCatalog(true);
                      setIsOptionsOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-zinc-800 flex items-center gap-2.5 cursor-pointer transition text-slate-600 dark:text-zinc-300"
                  >
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400">
                      <LayoutGrid className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold">Kho 30 Chuyên Đề</div>
                      <div className="text-[10px] text-slate-400 dark:text-zinc-500">Mở danh mục dạng thẻ lớn</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Question Workspace Canvas */}
        <TopicQuestionWorkspace
          currentQ={currentQ}
          currentAnswer={currentAnswer}
          isChecked={isChecked}
          isCorrect={isCorrect}
          isSolutionVisible={isSolutionVisible}
          isHintVisible={isHintVisible}
          onSelectOption={handleSelectOption}
          onCheckAnswer={handleCheckAnswer}
          onToggleSolution={() => setShowSolution((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
          mainScrollRef={mainScrollRef}
          currentIdx={currentIdx}
          totalQuestions={filteredQuestions.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
      </div>

      {/* 3. AUTOMATIC SUBMIT MODAL */}
      <TopicSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        currentTopicName={currentTopicName}
        correctCount={correctCount}
        totalCount={filteredQuestions.length}
        answeredCount={answeredCount}
        modalTimeSpent={modalTimeSpent}
        studentName={localStudentName}
        setStudentName={setLocalStudentName}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        onSubmit={handleSendResults}
        onRetryTopic={() => {
          setIsSubmitModalOpen(false);
          handleReshuffle();
        }}
        onBackToExam={() => {
          setIsSubmitModalOpen(false);
          onBackToExam();
        }}
      />

      {/* 4. FORMULA SHEET MODAL */}
      <FormulaSheetModal
        isOpen={showFormulaModal}
        onClose={() => setShowFormulaModal(false)}
      />
    </div>
  );
};

import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  LayoutGrid,
  Layers,
  ChevronDown,
  Shuffle,
  Lightbulb,
  Eye,
  Send,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, TopicId, ChapterInfo, UserAnswer } from '../types/exam';
import { checkAnswerCorrectness, generateExamReport } from '../utils/scoring';
import { prepareTopicPracticeQuestions } from '../utils/questionRandomizer';
import { CHAPTERS_METADATA } from '../data/chaptersMetadata';

import { TopicCatalogView } from './topic-practice/TopicCatalogView';
import { TopicPracticeSidebar } from './topic-practice/TopicPracticeSidebar';
import { TopicQuestionWorkspace } from './topic-practice/TopicQuestionWorkspace';
import { TopicSubmitModal } from './topic-practice/TopicSubmitModal';

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

  // Filtered & randomized questions
  const filteredQuestions = useMemo(() => {
    let list: Question[] = [];
    if (selectedTopicId) {
      list = questions.filter((q) => q.topicId === selectedTopicId);
    } else {
      list = questions.filter((q) => q.chapterId === selectedChapterId);
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
        'chuong_2_mu_logarit',
        'chuong_3_nguyen_ham_tich_phan',
        'chuong_5_toa_do_oxyz',
        'chuong_10_toan_thuc_te_toi_uu',
      ];
      list = list.filter((c) => g12Ids.includes(c.id));
    } else if (catalogFilter === '11_10') {
      const g1110Ids = [
        'chuong_6_toan_lop_10',
        'chuong_7_day_so_cap_so',
        'chuong_8_xac_suat_thong_ke',
        'chuong_9_luong_giac',
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

    const nameToUse = localStudentName.trim() || 'Học sinh HSA';
    const emailToUse = localStudentEmail.trim();

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
        questions={questions}
        onBackToExam={onBackToExam}
        onSelectTopic={handleSelectTopicFromCatalog}
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
        questions={questions}
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

            {/* Submit Button */}
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
    </div>
  );
};

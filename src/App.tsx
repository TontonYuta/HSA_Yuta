import React, { useState, useEffect, useRef } from 'react';
import { Navbar, AppMode } from './components/Navbar';
import { ExamIntro } from './components/ExamIntro';
import { ExamSimulation } from './components/ExamSimulation';
import { ExamResults } from './components/ExamResults';
import { TopicPractice } from './components/TopicPractice';
import { QuestionBankView } from './components/QuestionBankView';
import { WebhookModal } from './components/WebhookModal';
import { ExamTimer } from './components/ExamTimer';
import { HSA_QUESTIONS_DATABASE, HSA_EXAM_SETS } from './data/topics/index';
import { UserAnswer, ExamReport, TopicId } from './types/exam';
import { generateExamReport } from './utils/scoring';
import { prepareExamQuestions } from './utils/questionRandomizer';
import { HelpCircle } from 'lucide-react';

export default function App() {
  // Theme state: dark or light mode
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('hsa_theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('hsa_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Navigation & View state
  const [currentMode, setCurrentMode] = useState<AppMode | 'intro' | 'results'>('intro');
  const [practiceTopic, setPracticeTopic] = useState<TopicId>('trigonometry');

  // Exam Selection state
  const [selectedExamSetId, setSelectedExamSetId] = useState<string>('de_01_chuan');
  const currentExamSet = HSA_EXAM_SETS.find((s) => s.id === selectedExamSetId) || HSA_EXAM_SETS[0];

  // Active questions for the current exam session
  const [activeQuestions, setActiveQuestions] = useState(() => {
    const questionIdSet = new Set(currentExamSet.questionIds);
    const questionsForSet = HSA_QUESTIONS_DATABASE.filter((q) => questionIdSet.has(q.id));
    return prepareExamQuestions(questionsForSet);
  });

  // Exam simulation state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const examStartTimeRef = useRef<number>(Date.now());
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Result report state
  const [examReport, setExamReport] = useState<ExamReport | null>(null);

  // User Profile & Webhook Settings
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('hsa_student_name') || 'Học sinh HSA';
  });
  const [studentEmail, setStudentEmail] = useState<string>(() => {
    return localStorage.getItem('hsa_student_email') || '';
  });
  const [teacherEmail, setTeacherEmail] = useState<string>(() => {
    return localStorage.getItem('hsa_teacher_email') || '';
  });
  const [webhookUrl, setWebhookUrl] = useState<string>(() => {
    return localStorage.getItem('hsa_webhook_url') || '';
  });

  // Teacher GAS Guide Modal state (Hidden, only via footer question mark)
  const [isGasGuideOpen, setIsGasGuideOpen] = useState<boolean>(false);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('hsa_student_name', studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem('hsa_student_email', studentEmail);
  }, [studentEmail]);

  useEffect(() => {
    localStorage.setItem('hsa_teacher_email', teacherEmail);
  }, [teacherEmail]);

  useEffect(() => {
    localStorage.setItem('hsa_webhook_url', webhookUrl);
  }, [webhookUrl]);

  // Handler to start official exam with selected set
  const handleStartExam = (examSetId?: string) => {
    const targetSetId = examSetId || selectedExamSetId;
    const targetSet = HSA_EXAM_SETS.find((s) => s.id === targetSetId) || HSA_EXAM_SETS[0];
    const targetQuestionIdSet = new Set(targetSet.questionIds);
    const questionsForSet = HSA_QUESTIONS_DATABASE.filter((q) => targetQuestionIdSet.has(q.id));

    // Randomize choices and within-tier questions, sorted strictly from easy to hard
    const randomizedQuestions = prepareExamQuestions(questionsForSet);

    setSelectedExamSetId(targetSet.id);
    setActiveQuestions(randomizedQuestions);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeSpentSeconds(0);
    examStartTimeRef.current = Date.now();
    setIsExamActive(true);
    setIsSidebarOpen(true);
    setCurrentMode('exam');
  };

  // Handler to record an answer
  const handleAnswerQuestion = (questionId: number, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        value,
        isFlagged: prev[questionId]?.isFlagged || false,
      },
    }));
  };

  // Handler to toggle question flag
  const handleToggleFlag = (questionId: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        value: prev[questionId]?.value || '',
        isFlagged: !prev[questionId]?.isFlagged,
      },
    }));
  };

  // Submit and grade the exam
  const handleSubmitExam = () => {
    setIsExamActive(false);
    const calculatedSeconds = Math.max(
      1,
      Math.round((Date.now() - examStartTimeRef.current) / 1000)
    );
    setTimeSpentSeconds(calculatedSeconds);
    const report = generateExamReport(
      activeQuestions,
      userAnswers,
      studentName,
      studentEmail,
      calculatedSeconds,
      currentExamSet.title,
      teacherEmail
    );
    setExamReport(report);
    setCurrentMode('results');
  };

  // When time expires
  const handleTimeUp = () => {
    handleSubmitExam();
  };

  // Practice specific topic
  const handleSelectTopicPractice = (topicId: TopicId) => {
    setPracticeTopic(topicId);
    setCurrentMode('practice');
  };

  // Exit exam confirmation
  const handleExitExam = () => {
    const confirmed = window.confirm(
      'Bài thi đang diễn ra! Bạn có chắc chắn muốn rời khỏi phòng thi không?'
    );
    if (confirmed) {
      setIsExamActive(false);
      setCurrentMode('intro');
    }
  };

  const answeredCount = Object.values(userAnswers).filter(
    (a) => a.value && a.value.trim() !== ''
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] flex flex-col font-sans transition-colors duration-200">
      {/* Unified Single Header (Sticky Topbar - 52px) */}
      <Navbar
        currentMode={
          currentMode === 'intro' || currentMode === 'results' ? 'exam' : currentMode
        }
        onSelectMode={(mode) => {
          if (isExamActive && mode !== 'exam') {
            handleExitExam();
            return;
          }
          if (mode === 'exam' && !isExamActive && !examReport) {
            setCurrentMode('intro');
          } else {
            setCurrentMode(mode);
          }
        }}
        onStartExam={() => handleStartExam()}
        isExamInProgress={isExamActive}
        onSubmitExamClick={() => setIsConfirmSubmitOpen(true)}
        onExitExamClick={handleExitExam}
        theme={theme}
        onToggleTheme={toggleTheme}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        answeredCount={answeredCount}
        totalQuestions={activeQuestions.length}
        examTimerSlot={
          isExamActive ? (
            <ExamTimer
              initialSeconds={currentExamSet.timeMinutes * 60}
              isRunning={true}
              onTimeUp={handleTimeUp}
            />
          ) : undefined
        }
      />

      {/* Main Container - Fullscreen CBT in exam mode, Padded in other modes */}
      <main className={isExamActive ? 'flex-1 overflow-hidden' : 'flex-1 px-4 sm:px-6 pt-6'}>
        {currentMode === 'intro' && (
          <ExamIntro
            onStartExam={(setId) => handleStartExam(setId)}
            onSelectTopicPractice={handleSelectTopicPractice}
            studentName={studentName}
            setStudentName={setStudentName}
            selectedExamSetId={selectedExamSetId}
            setSelectedExamSetId={setSelectedExamSetId}
          />
        )}

        {currentMode === 'exam' && isExamActive && (
          <ExamSimulation
            questions={activeQuestions}
            currentExamSet={currentExamSet}
            currentQuestionIndex={currentQuestionIndex}
            userAnswers={userAnswers}
            onSelectQuestion={(idx) => setCurrentQuestionIndex(idx)}
            onAnswerQuestion={handleAnswerQuestion}
            onToggleFlag={handleToggleFlag}
            onSubmitExam={handleSubmitExam}
            isConfirmSubmitOpen={isConfirmSubmitOpen}
            setIsConfirmSubmitOpen={setIsConfirmSubmitOpen}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        {currentMode === 'results' && examReport && (
          <ExamResults
            report={examReport}
            questions={activeQuestions}
            webhookUrl={webhookUrl}
            onRetakeExam={() => handleStartExam(selectedExamSetId)}
            onPracticeWeakestTopic={(tId) => handleSelectTopicPractice(tId)}
          />
        )}

        {currentMode === 'practice' && (
          <TopicPractice
            questions={HSA_QUESTIONS_DATABASE}
            initialTopicId={practiceTopic}
            onBackToExam={() => setCurrentMode('intro')}
          />
        )}

        {currentMode === 'bank' && (
          <QuestionBankView
            questions={HSA_QUESTIONS_DATABASE}
            onStartExam={() => handleStartExam()}
          />
        )}
      </main>

      {/* Hidden Teacher Guide / Webhook Modal (Only accessible via footer question mark) */}
      <WebhookModal
        isOpen={isGasGuideOpen}
        onClose={() => setIsGasGuideOpen(false)}
        webhookUrl={webhookUrl}
        onSaveWebhookUrl={setWebhookUrl}
        studentEmail={studentEmail}
        onSaveStudentEmail={setStudentEmail}
        studentName={studentName}
        onSaveStudentName={setStudentName}
        teacherEmail={teacherEmail}
        onSaveTeacherEmail={setTeacherEmail}
      />

      {/* Footer - Only shown when NOT inside active CBT exam */}
      {!isExamActive && (
        <footer className="border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] py-5 text-xs text-slate-500 dark:text-zinc-500 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 dark:text-zinc-200">
                Luyện thi HSA cùng TontonYuta
              </span>
              <span>·</span>
              <span>Hệ Thống Luyện Thi ĐGNL ĐHQGHN (Toán Học & Tư Duy Định Lượng)</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span>Chuẩn chương trình mới GDPT 2018</span>
              <button
                type="button"
                onClick={() => setIsGasGuideOpen(true)}
                className="hover:text-slate-800 dark:hover:text-zinc-300 transition flex items-center gap-1 cursor-pointer"
                title="Hướng dẫn kết nối Google Sheets & Google Apps Script cho giáo viên/quản trị viên"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Hướng dẫn Google Sheets (Giáo viên)</span>
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

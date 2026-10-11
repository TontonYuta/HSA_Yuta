import React, { useState, useMemo } from 'react';
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
  FolderOpen,
  Shuffle
} from 'lucide-react';
import { Question, TopicId, ChapterInfo, MicroTopicInfo } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { VirtualMathKeyboard } from './VirtualMathKeyboard';
import { checkAnswerCorrectness } from '../utils/scoring';
import { prepareTopicPracticeQuestions } from '../utils/questionRandomizer';
import { CHAPTERS_METADATA } from '../data/topics/index';

interface TopicPracticeProps {
  questions: Question[];
  initialTopicId?: TopicId;
  onBackToExam: () => void;
}

export const TopicPractice: React.FC<TopicPracticeProps> = ({
  questions,
  initialTopicId,
  onBackToExam,
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

  const [selectedChapterId, setSelectedChapterId] = useState<string>(defaultChapter.id);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(() => {
    if (initialTopicId && defaultChapter.topics.some(t => t.id === initialTopicId)) {
      return initialTopicId;
    }
    return defaultChapter.topics[0]?.id || null;
  });

  const [randomSeed, setRandomSeed] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<number, boolean>>({});
  const [showSolution, setShowSolution] = useState<Record<number, boolean>>({});
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});

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

  const resetQuestionState = () => {
    setCurrentIdx(0);
    setAnswers({});
    setCheckedStatus({});
    setShowSolution({});
    setShowHint({});
  };

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

  const currentAnswer = currentQ ? answers[currentQ.id] || '' : '';
  const isChecked = currentQ ? checkedStatus[currentQ.id] : false;
  const isCorrect = currentQ && isChecked ? checkAnswerCorrectness(currentQ, currentAnswer) : false;
  const isSolutionVisible = currentQ ? showSolution[currentQ.id] : false;
  const isHintVisible = currentQ ? showHint[currentQ.id] : false;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-fade-in text-slate-900 dark:text-zinc-100">
      {/* Chapter & Micro-topic navigation header */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm transition-colors space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">
                Luyện thi theo Chuyên đề Toán HSA
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                10 Chương lớn · 30 Chuyên đề chuẩn ma trận đề thi HSA ĐHQGHN
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onBackToExam}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 transition cursor-pointer"
          >
            Quay lại phòng thi
          </button>
        </div>

        {/* 10 Chapters Scrollable / Grid Buttons */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            1. Chọn Chương:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {CHAPTERS_METADATA.map((ch, idx) => {
              const isChSelected = selectedChapterId === ch.id;
              const chTotalQuestions = questions.filter(q => q.chapterId === ch.id).length;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => handleSelectChapter(ch.id)}
                  className={`p-2.5 rounded-xl text-left border transition text-xs flex flex-col justify-between cursor-pointer ${
                    isChSelected
                      ? 'bg-sky-50 dark:bg-sky-950/50 border-sky-500 text-sky-950 dark:text-white ring-1 ring-sky-500 shadow-xs'
                      : 'bg-slate-50 dark:bg-zinc-950/60 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[11px] text-sky-600 dark:text-sky-400">
                      Chương {idx + 1}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-200/80 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                      {chTotalQuestions} câu
                    </span>
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-zinc-200 line-clamp-1 leading-snug">
                    {ch.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Micro-topics in selected chapter */}
        <div>
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
            <span className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
              <span>2. Chọn Chuyên đề chuyên sâu trong {currentChapter.shortName}:</span>
            </span>
            <button
              type="button"
              onClick={() => handleSelectTopic(null)}
              className={`text-xs px-2.5 py-1 rounded-md transition font-medium cursor-pointer ${
                selectedTopicId === null
                  ? 'bg-sky-600 text-white font-bold'
                  : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-200'
              }`}
            >
              Luyện toàn bộ chương
            </button>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {currentChapter.topics.map((topic) => {
              const isTopicSelected = selectedTopicId === topic.id;
              const topicQCount = questions.filter(q => q.topicId === topic.id).length;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleSelectTopic(topic.id)}
                  className={`px-3 py-2 rounded-xl border text-xs transition cursor-pointer flex items-center gap-2 ${
                    isTopicSelected
                      ? 'bg-sky-600 border-sky-600 text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <span>{topic.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isTopicSelected 
                      ? 'bg-sky-700 text-sky-100' 
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                  }`}>
                    {topicQCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      {currentQ ? (
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 transition-colors">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-sky-600 text-white font-mono text-xs font-bold shadow-xs">
                Câu {currentIdx + 1} / {filteredQuestions.length}
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
                {currentQ.topicName}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 font-medium">
                {currentQ.difficulty}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 font-medium hidden sm:inline">
                Độ khó tăng dần
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReshuffle}
                className="px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 hover:bg-sky-100 text-xs font-medium transition inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                title="Xáo trộn thứ tự câu hỏi và các đáp án A/B/C/D (độ khó vẫn tăng dần từ dễ đến khó)"
              >
                <Shuffle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span className="hidden sm:inline">Xáo trộn & Làm lại</span>
                <span className="sm:hidden">Làm lại</span>
              </button>

              <button
                type="button"
                onClick={() => setShowHint((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-zinc-800 border border-amber-200 dark:border-zinc-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 text-xs font-medium transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>{isHintVisible ? 'Ẩn gợi ý' : 'Gợi ý tư duy'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowSolution((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 text-xs font-medium transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{isSolutionVisible ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
              </button>
            </div>
          </div>

          {/* Socratic Hint */}
          {isHintVisible && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-2.5 animate-fade-in">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-amber-800 dark:text-amber-300 font-bold mb-0.5">Gợi ý định hướng tư duy:</strong>
                <div className="leading-relaxed">
                  <MathRenderer content={currentQ.socraticHint} />
                </div>
              </div>
            </div>
          )}

          {/* Question text */}
          <div className="text-base sm:text-lg text-slate-900 dark:text-zinc-100 leading-relaxed font-sans">
            <MathRenderer content={currentQ.content} />
          </div>

          {/* Form */}
          {currentQ.type === 'mcq' && currentQ.options ? (
            <div className="grid grid-cols-1 gap-2.5 pt-2">
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
                    className={`p-3.5 rounded-xl border text-left transition flex items-start gap-3.5 cursor-pointer ${optStyle}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 text-slate-800 dark:text-zinc-200">
                      {opt.key}
                    </span>
                    <div className="flex-1 text-sm sm:text-base pt-0.5">
                      <MathRenderer content={opt.content} />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-400">
                  Nhập đáp số (Số nguyên, số thập phân hoặc phân số):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ví dụ: 2.5, -4, 5/2..."
                    value={currentAnswer}
                    onChange={(e) => handleSelectOption(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-slate-300 dark:border-zinc-700 rounded-xl text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 font-mono font-medium"
                  />
                  <button
                    type="button"
                    onClick={handleCheckAnswer}
                    className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold transition cursor-pointer shadow-xs"
                  >
                    Kiểm tra
                  </button>
                </div>
              </div>

              <div className="max-w-sm">
                <VirtualMathKeyboard
                  value={currentAnswer}
                  onChange={(val) => handleSelectOption(val)}
                />
              </div>
            </div>
          )}

          {/* Validation Feedback */}
          {isChecked && (
            <div
              className={`p-4 rounded-xl border flex items-center justify-between gap-4 animate-fade-in ${
                isCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isCorrect ? (
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <X className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                )}
                <div>
                  <div className="font-bold text-sm">
                    {isCorrect ? 'Chính xác!' : 'Chưa chính xác.'}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-zinc-400">
                    Đáp án đúng: <span className="font-mono text-slate-900 dark:text-zinc-100 font-bold">{currentQ.correctAnswer}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIdx >= filteredQuestions.length - 1}
                className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-semibold border border-slate-300 dark:border-zinc-700 transition disabled:opacity-40 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Câu tiếp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Detailed Solution Box */}
          {isSolutionVisible && (
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-2 animate-fade-in">
              <div className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Lời giải chi tiết từng bước (KaTeX):</span>
              </div>
              <div className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed">
                <MathRenderer content={currentQ.detailedSolution} />
              </div>
            </div>
          )}

          {/* Bottom Toolbar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800/80">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 text-xs font-semibold transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Câu trước</span>
            </button>

            {currentQ.type === 'mcq' && (
              <button
                type="button"
                onClick={handleCheckAnswer}
                disabled={!currentAnswer}
                className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition disabled:opacity-30 shadow-xs cursor-pointer"
              >
                Kiểm tra đáp án
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIdx === filteredQuestions.length - 1}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 text-xs font-semibold transition disabled:opacity-30 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Câu tiếp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-slate-500 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl">
          Chưa có câu hỏi trong chuyên đề này.
        </div>
      )}
    </div>
  );
};

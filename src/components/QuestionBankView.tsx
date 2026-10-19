import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, Lightbulb, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Question } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { MICRO_TOPICS_METADATA } from '../data/topics/index';
import { ExamTrack, isParametricMQuestion, isPracticalMathQuestion } from '../utils/trackFilter';
import { getTargetExamYear } from '../utils/timeUtils';
import { parseQuestionSource } from '../utils/questionSource';
import { QuestionSourceBadge } from './QuestionSourceBadge';

interface QuestionBankViewProps {
  questions: Question[];
  onStartExam: () => void;
  currentTrack?: ExamTrack;
  onSelectTrack?: (track: ExamTrack) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ 
  questions, 
  onStartExam,
  currentTrack = 'THPTQG',
  onSelectTrack,
}) => {
  const isTHPT = currentTrack === 'THPTQG';
  const targetYear = getTargetExamYear();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [trackFilter, setTrackFilter] = useState<'all' | 'practical' | 'thptqg' | 'hsa_m'>(() => {
    return currentTrack === 'THPTQG' ? 'thptqg' : 'all';
  });
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 12;

  // Counts for pills
  const counts = useMemo(() => {
    let practical = 0;
    let nonM = 0;
    let hasM = 0;
    for (const q of questions) {
      if (isPracticalMathQuestion(q)) practical++;
      if (isParametricMQuestion(q)) hasM++;
      else nonM++;
    }
    return { practical, nonM, hasM, total: questions.length };
  }, [questions]);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      // Track filter
      if (trackFilter === 'practical' && !isPracticalMathQuestion(q)) return false;
      if (trackFilter === 'thptqg' && isParametricMQuestion(q)) return false;
      if (trackFilter === 'hsa_m' && !isParametricMQuestion(q)) return false;

      if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
      if (selectedType !== 'all' && q.type !== selectedType) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
      if (searchTerm.trim() !== '') {
        const lower = searchTerm.toLowerCase();
        const matchContent = q.content.toLowerCase().includes(lower);
        const matchTopic = q.topicName.toLowerCase().includes(lower);
        const matchSol = q.detailedSolution.toLowerCase().includes(lower);
        if (!matchContent && !matchTopic && !matchSol) return false;
      }
      return true;
    });
  }, [questions, trackFilter, selectedTopic, selectedType, selectedDifficulty, searchTerm]);

  // Reset to page 1 when filter changes
  const handleFilterChange = (setter: (val: string) => void, val: string) => {
    setter(val);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentQuestions = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 pb-16 animate-fade-in text-slate-900 dark:text-zinc-100">
      {/* Search and Filters Card */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-3 border-b border-slate-100 dark:border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100">
                Ngân Hàng {questions.length} Câu Hỏi {isTHPT ? `THPTQG ${targetYear}` : `HSA ${targetYear}`}
              </h1>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
              {isTHPT
                ? 'Toán thực tế & các chuyên đề GDPT 2018 đã lược bỏ tham số m'
                : 'Tra cứu và rèn luyện câu hỏi theo 10 chương và 30 chuyên đề phân hóa chuẩn form HSA ĐHQGHN.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onStartExam}
            className={`px-4 py-2 text-white rounded-xl text-xs font-semibold transition shrink-0 shadow-xs cursor-pointer ${
              isTHPT ? 'bg-rose-600 hover:bg-rose-500' : 'bg-sky-600 hover:bg-sky-500'
            }`}
          >
            Vào thi thử ngay
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Tìm kiếm nội dung, công thức..."
              value={searchTerm}
              onChange={(e) => handleFilterChange(setSearchTerm, e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 font-medium"
            />
          </div>

          {/* Filter 30 topics */}
          <select
            value={selectedTopic}
            onChange={(e) => handleFilterChange(setSelectedTopic, e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả 30 chuyên đề</option>
            {MICRO_TOPICS_METADATA.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Filter format */}
          <select
            value={selectedType}
            onChange={(e) => handleFilterChange(setSelectedType, e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả dạng câu</option>
            <option value="mcq">Trắc nghiệm 4 lựa chọn</option>
            <option value="fill">Điền đáp số ngắn</option>
          </select>

          {/* Filter difficulty */}
          <select
            value={selectedDifficulty}
            onChange={(e) => handleFilterChange(setSelectedDifficulty, e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả mức độ</option>
            <option value="Vận dụng cao">Vận dụng cao (VDC)</option>
            <option value="Vận dụng">Vận dụng (VD)</option>
            <option value="Thông hiểu">Thông hiểu (TH)</option>
          </select>
        </div>

        {/* Track Filter Pills (Mobile friendly horizontal scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 pt-3 border-t border-slate-100 dark:border-zinc-800">
          <span className="text-[11px] font-bold text-slate-500 dark:text-zinc-400 mr-1 shrink-0">Bộ lọc:</span>
          <button
            type="button"
            onClick={() => handleFilterChange(setTrackFilter as any, 'all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer shrink-0 whitespace-nowrap ${
              trackFilter === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700'
            }`}
          >
            Tất cả ({counts.total})
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange(setTrackFilter as any, 'practical')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap ${
              trackFilter === 'practical'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60'
            }`}
          >
            <span>🎯 Toán Thực Tế ({counts.practical})</span>
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange(setTrackFilter as any, 'thptqg')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap ${
              trackFilter === 'thptqg'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900/60'
            }`}
          >
            <span>🎓 Chuẩn THPTQG - Bỏ m ({counts.nonM})</span>
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange(setTrackFilter as any, 'hsa_m')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap ${
              trackFilter === 'hsa_m'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/60'
            }`}
          >
            <span>🏛️ Dạng bài tham số m ({counts.hasM})</span>
          </button>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-mono px-1">
          <span>Tìm thấy {filtered.length} câu hỏi phù hợp</span>
          <span>Trang {currentPage} / {totalPages}</span>
        </div>

        {currentQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          const isPractical = isPracticalMathQuestion(q);
          const hasM = isParametricMQuestion(q);

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-5 hover:border-slate-400 dark:hover:border-zinc-700 transition shadow-xs"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                    Câu #{q.id}
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">
                    {q.topicName}
                  </span>
                  <span className="text-slate-300 dark:text-zinc-700 text-xs">·</span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                    {q.type === 'mcq' ? 'Trắc nghiệm 4 lựa chọn' : 'Điền đáp số'}
                  </span>
                  <span className="text-slate-300 dark:text-zinc-700 text-xs">·</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-md border font-medium ${
                      q.difficulty === 'Vận dụng cao'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60 text-rose-700 dark:text-rose-400 font-bold'
                        : q.difficulty === 'Vận dụng'
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 font-semibold'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-medium'
                    }`}
                  >
                    {q.difficulty}
                  </span>
                  {isPractical && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300/60 dark:border-emerald-800/60">
                      🎯 Toán thực tế
                    </span>
                  )}
                  {hasM && (
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 font-bold border border-purple-300/60 dark:border-purple-800/60">
                      Tham số m
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => toggleExpand(q.id)}
                  className="text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 font-semibold transition inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>{isExpanded ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Content with Question Source Badge */}
              {(() => {
                const { sourceTag, cleanContent } = parseQuestionSource(q.content);
                return (
                  <div>
                    {sourceTag && (
                      <div className="mt-2.5 mb-1.5">
                        <QuestionSourceBadge source={sourceTag} showHideButton={false} />
                      </div>
                    )}
                    <div className="mt-2 text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
                      <MathRenderer content={cleanContent} />
                    </div>
                  </div>
                );
              })()}

              {/* Options */}
              {q.type === 'mcq' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300">
                  {q.options.map((opt) => (
                    <div
                      key={opt.key}
                      className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                        isExpanded && opt.key === q.correctAnswer
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200 font-medium'
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

              {q.type === 'fill' && isExpanded && (
                <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-800 dark:text-zinc-300">
                  Đáp số: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{q.correctAnswer}</strong>
                </div>
              )}

              {/* Detailed Solution Accordion */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800 space-y-3 text-xs animate-fade-in">
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-800 dark:text-amber-300 font-bold mb-0.5">Gợi ý định hướng tư duy:</strong>
                      <div className="leading-relaxed">
                        <MathRenderer content={q.socraticHint} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-1.5">
                    <div className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-zinc-200">
                      Lời giải chi tiết:
                    </div>
                    <div className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                      <MathRenderer content={q.detailedSolution} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pt-4 flex items-center justify-between gap-2">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Trang trước</span>
            </button>

            <span className="text-xs font-mono text-slate-600 dark:text-zinc-400">
              Trang <strong>{currentPage}</strong> / {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Trang sau</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

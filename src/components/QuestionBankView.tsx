import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, Lightbulb, Filter } from 'lucide-react';
import { Question } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { MICRO_TOPICS_METADATA } from '../data/topics/index';

interface QuestionBankViewProps {
  questions: Question[];
  onStartExam: () => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ questions, onStartExam }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = questions.filter((q) => {
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

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16 animate-fade-in text-slate-900 dark:text-zinc-100">
      {/* Search and Filters Card */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100 dark:border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
                Ngân Hàng 350+ Câu Hỏi Toán HSA - TontonYuta
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                90% Vận Dụng & VDC
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
              Hệ thống 350 câu hỏi chuẩn hóa HSA ĐHQGHN với 10 chương, 30 chuyên đề vi mô và bộ đề gốc 558 siêu phân hóa
            </p>
          </div>

          <button
            type="button"
            onClick={onStartExam}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-semibold transition shrink-0 shadow-xs cursor-pointer"
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 font-medium"
            />
          </div>

          {/* Filter 30 topics */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả 30 chuyên đề vi mô</option>
            {MICRO_TOPICS_METADATA.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          {/* Filter format */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả dạng thức câu</option>
            <option value="mcq">Trắc nghiệm 4 lựa chọn (MCQ)</option>
            <option value="fill">Điền đáp số ngắn (Fill-in)</option>
          </select>

          {/* Filter difficulty */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả mức độ</option>
            <option value="Vận dụng cao">🔥 Vận dụng cao (VDC)</option>
            <option value="Vận dụng">⚡ Vận dụng (VD)</option>
            <option value="Thông hiểu">🌱 Thông hiểu (TH)</option>
          </select>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-3">
        <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono px-1">
          Tìm thấy {filtered.length} câu hỏi phù hợp trong ngân hàng
        </div>

        {filtered.map((q) => {
          const isExpanded = expandedId === q.id;

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

              {/* Content */}
              <div className="mt-3 text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-sans">
                <MathRenderer content={q.content} />
              </div>

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
                  Đáp số chuẩn: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{q.correctAnswer}</strong>
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
                      Các bước giải chi tiết KaTeX:
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
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, Lightbulb } from 'lucide-react';
import { Question, TopicId } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TOPIC_METADATA } from '../utils/scoring';

interface QuestionBankViewProps {
  questions: Question[];
  onStartExam: () => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ questions, onStartExam }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = questions.filter((q) => {
    if (selectedTopic !== 'all' && q.topicId !== selectedTopic) return false;
    if (selectedType !== 'all' && q.type !== selectedType) return false;
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
            <h1 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
              Ngân Hàng 100+ Câu Hỏi Toán HSA - TontonYuta
            </h1>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Toàn bộ đề thi môn Toán học & Tư duy định lượng theo chương trình mới GDPT 2018
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
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

          {/* Filter 12 topics */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs text-slate-800 dark:text-zinc-300 focus:outline-none focus:border-sky-500 font-medium"
          >
            <option value="all">Tất cả 12 chuyên đề vi mô</option>
            {Object.entries(TOPIC_METADATA).map(([key, val]) => (
              <option key={key} value={key}>
                {val.name}
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
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-400 font-medium">
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

import React from 'react';
import {
  Sparkles,
  BookOpen,
  Layers,
  CheckCircle2,
  Search,
  X,
  Shuffle,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Home,
} from 'lucide-react';
import { Question, ChapterInfo } from '../../types/exam';
import { CHAPTERS_METADATA } from '../../data/chaptersMetadata';

interface TopicCatalogViewProps {
  catalogSearch: string;
  setCatalogSearch: (search: string) => void;
  catalogFilter: 'all' | '12' | '11_10' | 'geometry';
  setCatalogFilter: (filter: 'all' | '12' | '11_10' | 'geometry') => void;
  expandedChapterId: string | null;
  setExpandedChapterId: React.Dispatch<React.SetStateAction<string | null>>;
  catalogChapters: ChapterInfo[];
  questions: Question[];
  onBackToExam: () => void;
  onSelectTopic: (chId: string, tId: string | null) => void;
}

export const TopicCatalogView: React.FC<TopicCatalogViewProps> = ({
  catalogSearch,
  setCatalogSearch,
  catalogFilter,
  setCatalogFilter,
  expandedChapterId,
  setExpandedChapterId,
  catalogChapters,
  questions,
  onBackToExam,
  onSelectTopic,
}) => {
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
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer"
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
              const chQuestions = questions.filter((q) => q.chapterId === ch.id);
              const originalIdx = CHAPTERS_METADATA.findIndex((c) => c.id === ch.id);
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

                    <div
                      className="flex items-center gap-2 shrink-0 self-end sm:self-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => onSelectTopic(ch.id, null)}
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
                        <span className="text-[11px] font-medium hidden xs:inline">
                          {isExpanded ? 'Thu gọn' : 'Chọn chuyên đề'}
                        </span>
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
                          const tCount = questions.filter((q) => q.topicId === t.id).length;

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
                                  onClick={() => onSelectTopic(ch.id, t.id)}
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
};

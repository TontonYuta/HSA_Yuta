import React, { useState } from 'react';
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
  FolderOpen,
  Target,
} from 'lucide-react';
import { Question, ChapterInfo } from '../../types/exam';
import { TOAN7_CHAPTERS_METADATA } from '../../data/toan7/index';
import { ExamTrack } from '../../utils/trackFilter';

interface TopicCatalogViewProps {
  catalogSearch: string;
  setCatalogSearch: (search: string) => void;
  catalogFilter: 'all' | 'sohoc' | 'hinhhoc' | 'thongke' | string;
  setCatalogFilter: (filter: any) => void;
  expandedChapterId: string | null;
  setExpandedChapterId: React.Dispatch<React.SetStateAction<string | null>>;
  catalogChapters: ChapterInfo[];
  questions: Question[];
  onBackToExam: () => void;
  onSelectTopic: (chId: string, tId: string | null) => void;
  currentTrack?: ExamTrack;
  chapters?: ChapterInfo[];
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
  currentTrack = 'PHOTHONG',
  chapters = TOAN7_CHAPTERS_METADATA,
}) => {
  const isPT = currentTrack === 'PHOTHONG';
  const [quickChapterId, setQuickChapterId] = useState<string>(catalogChapters[0]?.id || chapters[0]?.id || 'toan7_c1_so_huu_ti');
  const [quickTopicId, setQuickTopicId] = useState<string>('__all__');
  const currentQuickChapter =
    chapters.find((c) => c.id === quickChapterId) || chapters[0];

  return (
    <div className="h-[calc(100vh-52px)] md:h-screen overflow-y-auto bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 p-2.5 sm:p-4 select-none">
      <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4 pb-8">
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#111319] border border-slate-200/80 dark:border-zinc-800/80 p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                isPT 
                  ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400' 
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
              }`}>
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1.5 ${
                  isPT 
                    ? 'bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300'
                    : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                }`}>
                  <Sparkles className="w-3 h-3" />
                  <span>{isPT ? 'Hệ Thống 10 Chương & 25 Chuyên Đề GDPT 2018' : 'Hệ Thống Chuyên Đề Bứt Phá 9+ & HSG'}</span>
                </div>
                <h1 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {isPT ? 'Trung Tâm Luyện Chuyên Đề Toán 7' : 'Trung Tâm Luyện Chuyên Đề Toán 7 Nâng Cao'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                  {isPT 
                    ? 'Luyện tập theo chuyên đề chuẩn SGK GDPT 2018 (Kết nối tri thức & Cánh diều). Phân hóa từ Nhận biết đến Vận dụng, kiểm tra đáp án tức thì và gợi ý Socratic.'
                    : 'Bồi dưỡng học sinh giỏi và ôn luyện vào trường Chuyên. Tuyển tập các bài toán điểm 10, phân số quy luật, cực trị và kẻ đường phụ.'}
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
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-zinc-900/60 flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-sky-500" />
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100">{chapters.length} Chương</div>
                <div className="text-[10px] text-slate-500 dark:text-zinc-400">Đầy đủ SGK 2018</div>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-zinc-900/60 flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-indigo-500" />
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100">25 Chuyên Đề</div>
                <div className="text-[10px] text-slate-500 dark:text-zinc-400">{isPT ? 'Chuẩn SGK' : 'Bứt phá 9+'}</div>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-zinc-900/60 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <div>
                <div className="font-bold text-slate-900 dark:text-zinc-100">{questions.length} Câu Hỏi</div>
                <div className="text-[10px] text-slate-500 dark:text-zinc-400">Có đáp án & giải chi tiết</div>
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
              onClick={() => setCatalogFilter('sohoc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                catalogFilter === 'sohoc'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
            >
              Số học & Đại số
            </button>
            <button
              type="button"
              onClick={() => setCatalogFilter('hinhhoc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                catalogFilter === 'hinhhoc'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
            >
              Hình học & Khối
            </button>
            <button
              type="button"
              onClick={() => setCatalogFilter('thongke')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                catalogFilter === 'thongke'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800'
              }`}
            >
              Thống kê & Xác suất
            </button>
          </div>
        </div>

        {/* Quick Jump 2-Level Options Dropdowns (Khu vực 1) */}
        <div className="p-3.5 sm:p-4 rounded-3xl bg-white dark:bg-[#111319] border border-slate-200/80 dark:border-zinc-800/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <FolderOpen className="w-4 h-4" />
            </span>
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
                <span>Chọn nhanh theo Options</span>
                <span className="px-1.5 py-0.2 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-[10px] font-mono font-bold">
                  2 Cấp
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                Chuyển ngay tới chuyên đề mà không cần cuộn tìm
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Dropdown 1: Chương */}
            <div className="relative flex-1">
              <select
                value={quickChapterId}
                onChange={(e) => {
                  setQuickChapterId(e.target.value);
                  const ch = chapters.find((c) => c.id === e.target.value);
                  setQuickTopicId(ch?.topics[0]?.id || '__all__');
                }}
                className="w-full appearance-none pl-3 pr-8 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-xs font-semibold text-slate-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer shadow-2xs"
              >
                {chapters.map((ch, idx) => (
                  <option key={ch.id} value={ch.id} className="dark:bg-zinc-900 text-slate-900 dark:text-zinc-100">
                    Chương {idx + 1}: {ch.shortName}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Dropdown 2: Chuyên đề */}
            <div className="relative flex-1">
              <select
                value={quickTopicId}
                onChange={(e) => setQuickTopicId(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-xs font-semibold text-slate-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer shadow-2xs"
              >
                <option value="__all__" className="dark:bg-zinc-900 font-bold text-sky-600 dark:text-sky-400">
                  🌟 Toàn bộ chương
                </option>
                {currentQuickChapter.topics.map((t, idx) => (
                  <option key={t.id} value={t.id} className="dark:bg-zinc-900 text-slate-900 dark:text-zinc-100">
                    {idx + 1}. {t.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Nút Vào luyện ngay */}
            <button
              type="button"
              onClick={() => onSelectTopic(quickChapterId, quickTopicId === '__all__' ? null : quickTopicId)}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 active:scale-95"
            >
              <span>Vào luyện ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
              const originalIdx = chapters.findIndex((c) => c.id === ch.id);
              const isExpanded = expandedChapterId === ch.id || Boolean(catalogSearch.trim());

              return (
                <div
                  key={ch.id}
                  className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'p-4 sm:p-5 bg-white dark:bg-[#111319] border-slate-200/90 dark:border-zinc-800 shadow-sm'
                      : 'p-3.5 sm:p-4 bg-white dark:bg-[#111319] border-slate-200/70 dark:border-zinc-800/70 hover:border-slate-300 dark:hover:border-zinc-700 shadow-2xs'
                  }`}
                >
                  {/* Chapter Header (Click to toggle) */}
                  <div
                    onClick={() => setExpandedChapterId((prev) => (prev === ch.id ? null : ch.id))}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex-1 flex items-start gap-3">
                      <span className="w-8 h-8 rounded-xl bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {originalIdx + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">
                            {ch.name}
                          </h2>
                          <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400">
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
                            ? 'bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-zinc-100'
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {ch.topics.map((t, tIdx) => {
                          const tCount = questions.filter((q) => q.topicId === t.id).length;

                          return (
                            <div
                              key={t.id}
                              onClick={() => onSelectTopic(ch.id, t.id)}
                              className="p-3.5 sm:p-4 rounded-2xl border-0 bg-slate-50/90 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-800 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between group space-y-2.5"
                            >
                              <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                                    CĐ {tIdx + 1}
                                  </span>
                                  <span className="text-[11px] font-mono font-bold text-sky-600 dark:text-sky-400">
                                    {tCount} câu
                                  </span>
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
                                  {t.name}
                                </h3>
                                {t.description && (
                                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                                    {t.description}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 pt-2 border-t border-slate-200/50 dark:border-zinc-800/70">
                                <span className="font-semibold text-slate-600 dark:text-zinc-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                  Luyện ngay
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
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

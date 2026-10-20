import React from 'react';
import {
  Layers,
  ChevronLeft,
  LayoutGrid,
  Home,
  FolderOpen,
  Target,
  ChevronDown,
} from 'lucide-react';
import { Question, ChapterInfo } from '../../types/exam';
import { TOAN7_CHAPTERS_METADATA } from '../../data/toan7/index';
import { checkAnswerCorrectness } from '../../utils/scoring';

interface TopicPracticeSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  onBackToCatalog: () => void;
  onBackToExam: () => void;
  selectedChapterId: string;
  selectedTopicId: string | null;
  onSelectChapter: (chId: string) => void;
  onSelectTopic: (tId: string | null) => void;
  questions: Question[];
  filteredQuestions: Question[];
  currentIdx: number;
  onSelectQuestionIdx: (idx: number) => void;
  answers: Record<number, string>;
  checkedStatus: Record<number, boolean>;
  answeredCount: number;
  correctCount: number;
  chapters?: ChapterInfo[];
}

export const TopicPracticeSidebar: React.FC<TopicPracticeSidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  onBackToCatalog,
  onBackToExam,
  selectedChapterId,
  selectedTopicId,
  onSelectChapter,
  onSelectTopic,
  questions,
  filteredQuestions,
  currentIdx,
  onSelectQuestionIdx,
  answers,
  checkedStatus,
  answeredCount,
  correctCount,
  chapters = TOAN7_CHAPTERS_METADATA,
}) => {
  const currentChapter =
    chapters.find((ch) => ch.id === selectedChapterId) || chapters[0];
  const chTotalQuestions = questions.filter((q) => q.chapterId === selectedChapterId).length;

  return (
    <>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs animate-fade-in"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static top-[52px] md:top-0 bottom-0 left-0 z-40 w-72 lg:w-80 shrink-0 bg-white dark:bg-[#101014] border-r border-slate-200 dark:border-zinc-800 flex flex-col transition-transform duration-200 ease-in-out ${
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
              onBackToCatalog();
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

          {/* Chapter & Topic 2-Level Options Dropdowns (Khu vực 1) */}
          <div className="space-y-2.5 pb-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Bộ chọn chuyên đề
              </span>
              <span className="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-200/60 dark:border-sky-800/60">
                {filteredQuestions.length} câu
              </span>
            </div>

            {/* 1. Chọn Chương Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 flex items-center gap-1.5 px-0.5">
                <FolderOpen className="w-3.5 h-3.5 text-sky-500" />
                <span>1. Chọn Chương:</span>
              </label>
              <div className="relative">
                <select
                  value={selectedChapterId}
                  onChange={(e) => {
                    onSelectChapter(e.target.value);
                  }}
                  className="w-full appearance-none pl-3 pr-8 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800/90 text-xs font-semibold text-slate-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer shadow-2xs"
                >
                  {chapters.map((ch, idx) => {
                    const count = questions.filter((q) => q.chapterId === ch.id).length;
                    return (
                      <option key={ch.id} value={ch.id} className="dark:bg-zinc-900 text-slate-900 dark:text-zinc-100">
                        Chương {idx + 1}: {ch.shortName} ({count} câu)
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 2. Chọn Chuyên đề Dropdown */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 flex items-center gap-1.5 px-0.5">
                <Target className="w-3.5 h-3.5 text-emerald-500" />
                <span>2. Chọn Chuyên đề:</span>
              </label>
              <div className="relative">
                <select
                  value={selectedTopicId || '__all__'}
                  onChange={(e) => {
                    onSelectTopic(e.target.value === '__all__' ? null : e.target.value);
                  }}
                  className="w-full appearance-none pl-3 pr-8 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800/90 text-xs font-semibold text-slate-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer shadow-2xs"
                >
                  <option value="__all__" className="dark:bg-zinc-900 font-bold text-sky-600 dark:text-sky-400">
                    🌟 Toàn bộ chương ({chTotalQuestions} câu)
                  </option>
                  {currentChapter.topics.map((t, idx) => {
                    const count = questions.filter((q) => q.topicId === t.id).length;
                    return (
                      <option key={t.id} value={t.id} className="dark:bg-zinc-900 text-slate-900 dark:text-zinc-100">
                        {idx + 1}. {t.name} ({count} câu)
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
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
                      onSelectQuestionIdx(idx);
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
    </>
  );
};

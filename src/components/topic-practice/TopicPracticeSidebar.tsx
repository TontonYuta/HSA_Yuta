import React from 'react';
import {
  Layers,
  ChevronLeft,
  LayoutGrid,
  Home,
} from 'lucide-react';
import { Question } from '../../types/exam';
import { CHAPTERS_METADATA } from '../../data/chaptersMetadata';
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
}) => {
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

          {/* Chapter Selector Accordion */}
          <div className="space-y-1.5 pb-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 px-1">
              Chọn Chương (10 Chương GDPT 2018)
            </div>
            <div className="space-y-1">
              {CHAPTERS_METADATA.map((ch, idx) => {
                const isChSelected = selectedChapterId === ch.id;
                const chTotalQuestions = questions.filter((q) => q.chapterId === ch.id).length;

                return (
                  <div key={ch.id} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => onSelectChapter(ch.id)}
                      className={`w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                        isChSelected
                          ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/80'
                          : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/60 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-4 h-4 rounded-md bg-slate-200/80 dark:bg-zinc-800 text-[10px] font-bold flex items-center justify-center font-mono shrink-0">
                          {idx + 1}
                        </span>
                        <span className="truncate">{ch.shortName}</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-60 shrink-0">
                        {chTotalQuestions}
                      </span>
                    </button>

                    {/* Sub-topics list when chapter is selected */}
                    {isChSelected && (
                      <div className="pl-6 pr-1 space-y-1 pt-0.5 animate-fade-in">
                        <button
                          type="button"
                          onClick={() => {
                            onSelectTopic(null);
                            if (window.innerWidth < 1024) setIsSidebarOpen(false);
                          }}
                          className={`w-full px-2 py-1 rounded-lg text-left text-[11px] transition cursor-pointer flex items-center justify-between ${
                            selectedTopicId === null
                              ? 'bg-sky-600 text-white font-bold'
                              : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
                          }`}
                        >
                          <span>Toàn bộ chương</span>
                          <span className="text-[10px] font-mono opacity-80">{chTotalQuestions} câu</span>
                        </button>
                        {ch.topics.map((t) => {
                          const isTopicSelected = selectedTopicId === t.id;
                          const tCount = questions.filter((q) => q.topicId === t.id).length;

                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => {
                                onSelectTopic(t.id);
                                if (window.innerWidth < 1024) setIsSidebarOpen(false);
                              }}
                              className={`w-full px-2 py-1 rounded-lg text-left text-[11px] transition cursor-pointer flex items-center justify-between ${
                                isTopicSelected
                                  ? 'bg-sky-600 text-white font-bold shadow-xs'
                                  : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
                              }`}
                            >
                              <span className="truncate">{t.name}</span>
                              <span className="text-[10px] font-mono opacity-80 shrink-0 ml-1">
                                {tCount}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
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

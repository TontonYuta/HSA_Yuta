import React from 'react';
import { Play, Sun, Moon, GraduationCap, LayoutGrid, CheckSquare, BookOpen, Search, LogOut } from 'lucide-react';

export type AppMode = 'exam' | 'practice' | 'bank';

interface NavbarProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  onStartExam: () => void;
  isExamInProgress: boolean;
  onSubmitExamClick?: () => void;
  onExitExamClick?: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onHomeClick?: () => void;
  // Exam CBT header controls
  examTimerSlot?: React.ReactNode;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  answeredCount?: number;
  totalQuestions?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  onStartExam,
  isExamInProgress,
  onSubmitExamClick,
  onExitExamClick,
  onHomeClick,
  theme,
  onToggleTheme,
  examTimerSlot,
  isSidebarOpen,
  onToggleSidebar,
  answeredCount = 0,
  totalQuestions = 50,
}) => {
  return (
    <header className="sticky top-0 z-50 h-[52px] bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-zinc-800 transition-colors select-none">
      <div className="w-full h-full flex items-center justify-between px-3 sm:px-5">
        {/* Left Zone: Brand Logo & Title */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              if (isExamInProgress && onExitExamClick) {
                onExitExamClick();
              } else if (onHomeClick) {
                onHomeClick();
              } else {
                onSelectMode('exam');
              }
            }}
            className="flex items-center gap-2 group cursor-pointer text-left"
            title="Trang chủ Luyện thi HSA"
          >
            <div className="w-7 h-7 rounded-lg bg-sky-600 dark:bg-sky-500 flex items-center justify-center text-white font-bold text-xs shadow-xs">
              HSA
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition whitespace-nowrap">
                <span className="hidden sm:inline">Luyện thi cùng TontonYuta</span>
                <span className="sm:hidden font-bold">HSA Yuta</span>
              </span>
            </div>
          </button>
        </div>

        {/* Center Zone: Mode Dependent */}
        {isExamInProgress ? (
          /* When in Exam CBT Mode: Live SVG Countdown Timer */
          <div className="flex items-center justify-center">
            {examTimerSlot}
          </div>
        ) : (
          /* When in Standard Mode: Desktop Navigation Tabs */
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-zinc-400">
            <button
              type="button"
              onClick={() => onSelectMode('practice')}
              className={`px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'practice'
                  ? 'bg-slate-100 dark:bg-zinc-800/80 text-sky-600 dark:text-sky-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>30 Chuyên Đề</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode('exam')}
              className={`px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'exam'
                  ? 'bg-slate-100 dark:bg-zinc-800/80 text-sky-600 dark:text-sky-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-900'
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Thi Thử 75 Phút</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectMode('bank')}
              className={`px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1.5 cursor-pointer ${
                currentMode === 'bank'
                  ? 'bg-slate-100 dark:bg-zinc-800/80 text-sky-600 dark:text-sky-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-900'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Ngân Hàng Câu Hỏi</span>
            </button>
          </nav>
        )}

        {/* Right Zone: CBT Actions / Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {isExamInProgress ? (
            <>
              {/* Toggle Sidebar Button [📋 50 câu] - Hidden on small mobile because bottom bar has it */}
              <button
                type="button"
                onClick={onToggleSidebar}
                className={`hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border text-xs font-medium transition items-center gap-1.5 cursor-pointer shadow-xs ${
                  isSidebarOpen
                    ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300'
                    : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800'
                }`}
                title={isSidebarOpen ? 'Thu gọn bảng câu hỏi (Chế độ tập trung)' : 'Mở bảng 50 câu hỏi'}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span className="font-mono">Bảng câu hỏi ({answeredCount}/{totalQuestions})</span>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition cursor-pointer"
                title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>

              {/* Nộp bài thi Button */}
              <button
                type="button"
                onClick={onSubmitExamClick}
                className="px-3 sm:px-3.5 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 active:scale-95 rounded-lg transition whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                Nộp bài
              </button>
            </>
          ) : (
            <>
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition cursor-pointer"
                title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>

              {/* Vào phòng thi button */}
              <button
                type="button"
                onClick={onStartExam}
                className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white rounded-lg transition whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Play className="w-3 h-3 fill-current" />
                <span className="hidden xs:inline">Vào thi ngay</span>
                <span className="xs:hidden">Thi ngay</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar (Shown on Mobile screens when NOT in active exam CBT) */}
      {!isExamInProgress && (
        <nav
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-md border-t border-slate-200 dark:border-zinc-800 px-3 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-around shadow-lg transition-colors select-none"
          aria-label="Mobile Navigation"
        >
          <button
            type="button"
            onClick={() => onSelectMode('practice')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition text-[11px] font-semibold cursor-pointer active:scale-95 ${
              currentMode === 'practice'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50'
                : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
            }`}
          >
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span>30 Chuyên Đề</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectMode('exam')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition text-[11px] font-semibold cursor-pointer active:scale-95 ${
              currentMode === 'exam'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50'
                : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
            }`}
          >
            <CheckSquare className="w-4 h-4 mb-0.5" />
            <span>Thi Thử</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectMode('bank')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition text-[11px] font-semibold cursor-pointer active:scale-95 ${
              currentMode === 'bank'
                ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50'
                : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
            }`}
          >
            <Search className="w-4 h-4 mb-0.5" />
            <span>Ngân Hàng</span>
          </button>
        </nav>
      )}
    </header>
  );
};

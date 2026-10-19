import React from 'react';
import { Play, Sun, Moon, GraduationCap, LayoutGrid, CheckSquare, BookOpen, Search, LogOut, Menu, User } from 'lucide-react';

import { ExamTrack, TRACK_METADATA } from '../utils/trackFilter';

export type AppMode = 'intro' | 'exam' | 'practice' | 'bank';

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
  currentTrack?: ExamTrack;
  onSelectTrack?: (track: ExamTrack) => void;
  // Exam CBT header controls
  examTimerSlot?: React.ReactNode;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  answeredCount?: number;
  totalQuestions?: number;
  // Global sidebar & student profile
  onToggleMobileSidebar?: () => void;
  studentName?: string;
  onEditStudentName?: () => void;
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
  currentTrack = 'THPTQG',
  onSelectTrack,
  examTimerSlot,
  isSidebarOpen,
  onToggleSidebar,
  answeredCount = 0,
  totalQuestions = 50,
  onToggleMobileSidebar,
  studentName,
  onEditStudentName,
}) => {
  const isTHPT = currentTrack === 'THPTQG';

  return (
    <header className={`sticky top-0 z-40 h-[52px] bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-zinc-800 transition-colors select-none ${
      !isExamInProgress ? 'md:hidden' : ''
    }`}>
      <div className="w-full h-full flex items-center justify-between px-3 sm:px-5">
        {/* Left Zone: Brand Logo & Title */}
        <div className="flex items-center gap-2 shrink-0">
          {!isExamInProgress && onToggleMobileSidebar && (
            <button
              type="button"
              onClick={onToggleMobileSidebar}
              className="md:hidden p-1.5 -ml-1 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
              title="Mục lục & Tổng quan hệ thống"
              aria-label="Toggle Sidebar Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (isExamInProgress && onExitExamClick) {
                onExitExamClick();
              } else if (onHomeClick) {
                onHomeClick();
              } else {
                onSelectMode('intro');
              }
            }}
            className="flex items-center gap-2 group cursor-pointer text-left"
            title="Trang chủ Luyện thi"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-xs transition ${
              isTHPT 
                ? 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 group-hover:bg-rose-500/20' 
                : 'bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500/20'
            }`}>
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-zinc-100 transition whitespace-nowrap">
                  <span className="hidden sm:inline">Luyện thi cùng TontonYuta</span>
                  <span className="sm:hidden font-bold">{isTHPT ? 'THPTQG 2025' : 'HSA ĐHQGHN'}</span>
                </span>
                <span className={`inline-flex items-center px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider rounded border ${
                  isTHPT 
                    ? 'bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/60'
                    : 'bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/60'
                }`}>
                  {isTHPT ? 'GDPT 2018' : 'HSA 2025'}
                </span>
              </div>
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
          /* Clean Section Breadcrumb Indicator (No duplicate navigation tabs) */
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
            <span className="text-slate-400 dark:text-zinc-500">HSA</span>
            <span className="text-slate-300 dark:text-zinc-700">/</span>
            <span className="font-semibold text-slate-800 dark:text-zinc-200">
              {currentMode === 'practice'
                ? '30 Chuyên Đề Trọng Tâm'
                : currentMode === 'bank'
                ? 'Ngân Hàng 515 Câu Hỏi'
                : 'Thi Thử 75 Phút Chuẩn ĐHQGHN'}
            </span>
          </div>
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
              {/* Student Profile Pill */}
              {studentName && (
                <button
                  type="button"
                  onClick={onEditStudentName}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-zinc-300 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 rounded-lg border border-slate-200/80 dark:border-zinc-700 transition cursor-pointer"
                  title="Chỉnh sửa thông tin học sinh"
                >
                  <User className="w-3.5 h-3.5 text-sky-500" />
                  <span className="max-w-[100px] sm:max-w-[130px] truncate">{studentName}</span>
                </button>
              )}

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
            </>
          )}
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { 
  Home, 
  LayoutDashboard,
  BookOpen, 
  CheckSquare, 
  Search, 
  User, 
  Edit3, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  Sun, 
  Moon, 
  X,
} from 'lucide-react';
import { AppMode } from './Navbar';
import { CHAPTERS_METADATA, HSA_EXAM_SETS } from '../data/topics/index';

interface AppSidebarProps {
  currentMode: AppMode | 'intro' | 'results';
  onSelectMode: (mode: AppMode) => void;
  onSelectChapter?: (chapterId: string) => void;
  studentName: string;
  studentSchool?: string;
  onEditStudentName: () => void;
  isExamInProgress: boolean;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isCollapsedDesktop: boolean;
  onToggleCollapseDesktop: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentMode,
  onSelectMode,
  onSelectChapter,
  studentName,
  studentSchool,
  onEditStudentName,
  isExamInProgress,
  isOpenMobile,
  onCloseMobile,
  isCollapsedDesktop,
  onToggleCollapseDesktop,
  theme,
  onToggleTheme,
}) => {
  const [isChaptersOpen, setIsChaptersOpen] = useState(true);

  // If in active 75-minute CBT exam, hide sidebar completely
  if (isExamInProgress) {
    return null;
  }

  const navItems = [
    {
      id: 'intro',
      label: 'Trang Chủ',
      desc: 'Bảng thống kê & tiến độ học tập',
      icon: LayoutDashboard,
      badge: 'Tổng quan',
      action: () => onSelectMode('intro'),
      isActive: currentMode === 'intro',
    },
    {
      id: 'practice',
      label: '30 Chuyên Đề',
      desc: '10 chương · 30 dạng toán trọng tâm',
      icon: BookOpen,
      badge: '515 câu',
      action: () => onSelectMode('practice'),
      isActive: currentMode === 'practice',
    },
    {
      id: 'exam',
      label: 'Thi Thử 75 Phút',
      desc: `${HSA_EXAM_SETS.length} bộ đề thi thực chiến chuẩn form`,
      icon: CheckSquare,
      badge: `${HSA_EXAM_SETS.length} Đề`,
      action: () => onSelectMode('exam'),
      isActive: currentMode === 'exam',
    },
    {
      id: 'bank',
      label: 'Ngân Hàng Câu Hỏi',
      desc: 'Tra cứu theo chuyên đề & mức độ',
      icon: Search,
      badge: '515 câu',
      action: () => onSelectMode('bank'),
      isActive: currentMode === 'bank',
    },
  ];

  const renderSidebarBody = (isCollapsed: boolean, isMobile: boolean) => {
    return (
      <>
        {/* 1. Header & Logo */}
        {!isCollapsed ? (
          <div className="h-14 px-3.5 border-b border-slate-200 dark:border-zinc-800/80 flex items-center justify-between shrink-0 bg-slate-50/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-sky-500/30 dark:ring-sky-400/30 shrink-0 bg-sky-50 dark:bg-zinc-800 shadow-xs">
                <img src="/avt.png" alt="TontonYuta" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col truncate">
                <span className="text-xs font-black tracking-tight text-slate-900 dark:text-zinc-100 flex items-center gap-1 truncate">
                  <span>HSA TontonYuta</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 font-mono font-bold">2025</span>
                </span>
                <span className="text-[10px] text-slate-400 dark:text-zinc-500 truncate">
                  Toán Học & Tư Duy Định Lượng
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {isMobile ? (
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 cursor-pointer"
                  title="Đóng menu"
                >
                  <X className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onToggleCollapseDesktop}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800/60 cursor-pointer transition"
                  title="Thu gọn sidebar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Collapsed Header: Centered avatar button that cleanly expands the sidebar */
          <div className="h-14 flex items-center justify-center shrink-0 border-b border-slate-200 dark:border-zinc-800/80 bg-slate-50/60 dark:bg-zinc-900/40">
            <button
              type="button"
              onClick={onToggleCollapseDesktop}
              className="w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800/80 flex items-center justify-center transition cursor-pointer relative group"
              title="Mở rộng menu (Bấm để xem đầy đủ)"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-sky-500/30 dark:ring-sky-400/30 group-hover:ring-sky-500 transition shadow-xs">
                <img src="/avt.png" alt="TontonYuta" className="w-full h-full object-cover" />
              </div>
              {/* Floating Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 dark:bg-zinc-800 text-white text-[11px] font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50 flex items-center gap-1.5">
                <span>Mở rộng menu</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-zinc-800" />
              </div>
            </button>
          </div>
        )}

        {/* 2. Student Identity Card */}
        {!isCollapsed ? (
          <div className="p-3 border-b border-slate-100 dark:border-zinc-800/60 bg-gradient-to-r from-sky-50/50 via-indigo-50/30 to-purple-50/40 dark:from-sky-950/20 dark:via-zinc-900/40 dark:to-indigo-950/10 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-slate-900 dark:text-zinc-100 truncate">
                    {studentName || 'Học sinh HSA'}
                  </div>
                  {studentSchool ? (
                    <div className="text-[10px] text-slate-500 dark:text-zinc-400 truncate">
                      {studentSchool}
                    </div>
                  ) : (
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Đang ôn luyện HSA
                    </div>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={onEditStudentName}
                className="p-1 rounded-md text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white dark:hover:bg-zinc-800 transition cursor-pointer shrink-0"
                title="Đổi thông tin học sinh"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Collapsed Student Icon: Exactly w-10 h-10 matching all icon buttons */
          <div className="h-13 border-b border-slate-100 dark:border-zinc-800/60 flex items-center justify-center shrink-0">
            <button
              type="button"
              onClick={onEditStudentName}
              className="w-10 h-10 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center transition cursor-pointer relative group"
              title={`Học sinh: ${studentName || 'Học sinh HSA'}`}
            >
              <User className="w-4 h-4" />
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 dark:bg-zinc-800 text-white text-[11px] font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50">
                <span>{studentName || 'Học sinh HSA'}</span>
                {studentSchool && <span className="block text-[10px] text-slate-300 font-normal">{studentSchool}</span>}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-zinc-800" />
              </div>
            </button>
          </div>
        )}

        {/* 3. Navigation Links List - No horizontal scrollbar */}
        <div className={`flex-1 overflow-x-hidden overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isCollapsed ? 'py-3 flex flex-col items-center space-y-2' : 'px-2 py-3 space-y-4'}`}>
          {/* Main Functions Menu */}
          <div className={isCollapsed ? 'space-y-1.5 flex flex-col items-center w-full' : 'space-y-1'}>
            {!isCollapsed && (
              <div className="px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Menu Chức Năng
              </div>
            )}

            {navItems.map((item) => {
              const Icon = item.icon;
              if (isCollapsed) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      item.action();
                      if (isMobile) onCloseMobile();
                    }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition cursor-pointer relative group ${
                      item.isActive
                        ? 'bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-300 border border-sky-300/80 dark:border-sky-700/80 shadow-xs font-bold'
                        : 'text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800/60 hover:text-slate-900 dark:hover:text-zinc-200 border border-transparent'
                    }`}
                    title={item.label}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {/* Floating Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 dark:bg-zinc-800 text-white text-[11px] font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50 flex items-center gap-1.5">
                      <span>{item.label}</span>
                      <span className="text-[9px] px-1 py-0.2 rounded bg-sky-500/20 text-sky-300 font-mono">
                        {item.badge}
                      </span>
                      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-zinc-800" />
                    </div>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    item.action();
                    if (isMobile) onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition cursor-pointer group ${
                    item.isActive
                      ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80 shadow-xs font-bold'
                      : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800/60 hover:text-slate-900 dark:hover:text-zinc-200 border border-transparent'
                  }`}
                  title={item.label}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition ${
                      item.isActive
                        ? 'text-sky-600 dark:text-sky-400'
                        : 'text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300'
                    }`}
                  />
                  <div className="flex-1 flex items-center justify-between truncate">
                    <div className="truncate">
                      <div className="text-xs truncate">{item.label}</div>
                    </div>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-medium shrink-0 ml-1.5 ${
                        item.isActive
                          ? 'bg-sky-200/80 dark:bg-sky-900 text-sky-800 dark:text-sky-200'
                          : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 10 Chapters Quick Navigation */}
          {!isCollapsed ? (
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-zinc-800/60">
              <button
                type="button"
                onClick={() => setIsChaptersOpen((prev) => !prev)}
                className="w-full px-2 py-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-300 cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-500" />
                  <span>10 Chương GDPT 2018</span>
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isChaptersOpen ? 'rotate-0' : '-rotate-90'
                  }`}
                />
              </button>

              {isChaptersOpen && (
                <div className="space-y-0.5 pl-1 animate-fade-in">
                  {CHAPTERS_METADATA.map((ch, idx) => {
                    const chCount = ch.topics.reduce((acc, t) => acc + (t.questionCount || 0), 0);

                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => {
                          if (onSelectChapter) {
                            onSelectChapter(ch.id);
                          } else {
                            onSelectMode('practice');
                          }
                          if (isMobile) onCloseMobile();
                        }}
                        className="w-full px-2 py-1.5 rounded-lg text-left text-[11px] text-slate-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-300 hover:bg-slate-100 dark:hover:bg-zinc-800/50 transition flex items-center justify-between truncate cursor-pointer group"
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="w-4 h-4 rounded bg-slate-100 dark:bg-zinc-800 text-[10px] font-mono font-bold text-slate-500 dark:text-zinc-400 flex items-center justify-center shrink-0 group-hover:bg-sky-100 dark:group-hover:bg-sky-950 group-hover:text-sky-600 transition">
                            {idx + 1}
                          </span>
                          <span className="truncate">{ch.shortName}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 opacity-70 shrink-0 ml-1">
                          {chCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Collapsed Chapters Icon Trigger */
            <div className="pt-2 border-t border-slate-100 dark:border-zinc-800/60 flex flex-col items-center w-full">
              <button
                type="button"
                onClick={() => {
                  onToggleCollapseDesktop();
                }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800/60 hover:text-sky-600 transition cursor-pointer relative group"
                title="10 Chương GDPT (Bấm để mở danh mục)"
              >
                <Layers className="w-4 h-4 text-sky-500" />
                {/* Tooltip */}
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 dark:bg-zinc-800 text-white text-[11px] font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50 flex items-center gap-1">
                  <span>10 Chương GDPT (30 chuyên đề)</span>
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-zinc-800" />
                </div>
              </button>
            </div>
          )}
        </div>

        {/* 4. Bottom Footer: Theme Toggle Only (No gg script / webhook info) */}
        {!isCollapsed ? (
          <div className="p-3 border-t border-slate-200 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-900/40 shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-full py-1.5 px-2 rounded-lg border border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-200 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              title="Chuyển chế độ sáng / tối"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Giao diện sáng</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Giao diện tối</span>
                </>
              )}
            </button>
          </div>
        ) : (
          /* Collapsed Theme Toggle */
          <div className="h-14 border-t border-slate-200 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-900/40 shrink-0 flex items-center justify-center">
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-200 transition flex items-center justify-center cursor-pointer shadow-xs relative group"
              title={theme === 'dark' ? 'Chuyển giao diện sáng' : 'Chuyển giao diện tối'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 dark:bg-zinc-800 text-white text-[11px] font-semibold rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-50">
                <span>{theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}</span>
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900 dark:border-r-zinc-800" />
              </div>
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {/* 1. Desktop Sidebar - w-16 when collapsed, w-64/w-72 when expanded */}
      <aside
        className={`hidden md:flex flex-col shrink-0 sticky top-0 h-screen z-30 bg-white dark:bg-[#0c0c0e] border-r border-slate-200 dark:border-zinc-800/80 transition-all duration-200 select-none ${
          isCollapsedDesktop ? 'w-16' : 'w-64 lg:w-72'
        }`}
      >
        {renderSidebarBody(isCollapsedDesktop, false)}
      </aside>

      {/* 2. Mobile Drawer */}
      <div className="md:hidden">
        {isOpenMobile && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={onCloseMobile}
          />
        )}
        <aside
          className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-[#0c0c0e] border-r border-slate-200 dark:border-zinc-800/80 flex flex-col transition-transform duration-250 ease-in-out select-none shadow-2xl ${
            isOpenMobile ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {renderSidebarBody(false, true)}
        </aside>
      </div>
    </>
  );
};

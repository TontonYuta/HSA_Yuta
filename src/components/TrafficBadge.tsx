import React, { useState, useEffect } from 'react';
import { Eye, Users, Calendar, Activity, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { getStoredTrafficStats, recordPageVisit, TrafficStats } from '../utils/trafficTracker';

interface TrafficBadgeProps {
  webhookUrl?: string;
  isExamActive?: boolean;
  studentName?: string;
  currentMode?: string;
}

export const TrafficBadge: React.FC<TrafficBadgeProps> = ({ webhookUrl, isExamActive, studentName, currentMode }) => {
  const [stats, setStats] = useState<TrafficStats>(() => getStoredTrafficStats());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Record page visit on mount
    const current = recordPageVisit(webhookUrl);
    setStats(current);

    // Minor periodic update for online pulse
    const interval = setInterval(() => {
      setStats(getStoredTrafficStats());
    }, 60000);

    return () => clearInterval(interval);
  }, [webhookUrl]);

  // Strictly hide during any exam, topic practice, bank lookup, or results screen
  // to guarantee 100% unobstructed view for students
  if (isExamActive || (currentMode && currentMode !== 'intro')) {
    return null;
  }

  return (
    <aside 
      aria-label="Thống kê truy cập"
      className="fixed bottom-3 right-3 z-30 select-none font-sans"
    >
      {/* Popover Details Window */}
      {isOpen && (
        <div className="mb-2 p-3.5 w-64 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-slate-200 dark:border-zinc-800 shadow-xl text-slate-800 dark:text-zinc-200 text-xs animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-zinc-800">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-zinc-100">
              <Activity className="w-3.5 h-3.5 text-sky-500" />
              <span>Thống kê lưu lượng HSA</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300 cursor-pointer"
              title="Thu nhỏ"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {studentName && studentName !== 'Học sinh HSA' && (
            <div className="mb-2 px-2.5 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/60 text-[11px] text-sky-800 dark:text-sky-300 flex items-center justify-between">
              <span className="truncate">Học sinh: <strong className="font-semibold text-slate-900 dark:text-zinc-100">{studentName}</strong></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/60">
              <div className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                <Eye className="w-3.5 h-3.5 text-sky-500" />
                <span>Tổng lượt truy cập</span>
              </div>
              <span className="font-bold font-mono text-slate-900 dark:text-zinc-100">
                {stats.totalVisits.toLocaleString('vi-VN')}
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/60">
              <div className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                <span>Lượt xem hôm nay</span>
              </div>
              <span className="font-bold font-mono text-slate-900 dark:text-zinc-100">
                {stats.todayVisits.toLocaleString('vi-VN')}
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Đang cùng học</span>
              </div>
              <span className="font-bold font-mono text-emerald-700 dark:text-emerald-300">
                {stats.activeOnline} bạn
              </span>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800/70 text-[10px] text-slate-400 dark:text-zinc-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-500" />
              Luyện thi HSA Yuta
            </span>
            <span>Cập nhật lúc {stats.lastUpdated}</span>
          </div>
        </div>
      )}

      {/* Compact Pill Badge */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800/80 hover:border-sky-300 dark:hover:border-sky-800 shadow-sm hover:shadow-md transition cursor-pointer text-[11px]"
        title="Bấm để xem chi tiết thống kê lượt truy cập"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>

        <div className="flex items-center gap-1 font-mono text-slate-700 dark:text-zinc-300">
          <Eye className="w-3 h-3 text-sky-500 shrink-0" />
          <span className="font-semibold">{stats.totalVisits.toLocaleString('vi-VN')}</span>
          <span className="text-slate-300 dark:text-zinc-700">·</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{stats.activeOnline} online</span>
        </div>

        {isOpen ? (
          <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-zinc-200 transition" />
        ) : (
          <ChevronUp className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-zinc-200 transition" />
        )}
      </button>
    </aside>
  );
};

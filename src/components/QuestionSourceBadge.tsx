import React from 'react';
import { Award, EyeOff, Landmark } from 'lucide-react';

interface QuestionSourceBadgeProps {
  source: string;
  onHide?: () => void;
  className?: string;
  showHideButton?: boolean;
}

export const QuestionSourceBadge: React.FC<QuestionSourceBadgeProps> = ({
  source,
  onHide,
  className = '',
  showHideButton = true,
}) => {
  if (!source) return null;

  // Tùy biến màu sắc tinh tế theo nguồn gốc đề thi
  const getBadgeStyle = (src: string) => {
    if (src.includes('Hà Nội')) {
      return 'bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/70 dark:via-purple-950/60 dark:to-zinc-900 border-indigo-200 dark:border-indigo-800/80 text-indigo-800 dark:text-indigo-300';
    }
    if (src.includes('Nam Định')) {
      return 'bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 dark:from-sky-950/70 dark:via-blue-950/60 dark:to-zinc-900 border-sky-200 dark:border-sky-800/80 text-sky-800 dark:text-sky-300';
    }
    if (src.includes('Nghệ An')) {
      return 'bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/70 dark:via-orange-950/60 dark:to-zinc-900 border-amber-200 dark:border-amber-800/80 text-amber-800 dark:text-amber-300';
    }
    if (src.includes('Hải Phòng')) {
      return 'bg-gradient-to-r from-rose-50 via-red-50 to-amber-50 dark:from-rose-950/70 dark:via-red-950/60 dark:to-zinc-900 border-rose-200 dark:border-rose-800/80 text-rose-800 dark:text-rose-300';
    }
    if (src.includes('TP.HCM') || src.includes('Nguyễn Khuyến')) {
      return 'bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/70 dark:via-teal-950/60 dark:to-zinc-900 border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300';
    }
    // Mặc định: HSA hoặc Bộ GD&ĐT
    return 'bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 dark:from-violet-950/70 dark:via-purple-950/60 dark:to-zinc-900 border-violet-200 dark:border-violet-800/80 text-violet-800 dark:text-violet-300';
  };

  const styleClass = getBadgeStyle(source);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-xl text-xs font-medium border shadow-2xs transition-all select-none ${styleClass} ${className}`}
      title={`Nguồn câu hỏi chính thức: ${source}`}
    >
      <div className="flex items-center gap-1.5 font-semibold">
        <Landmark className="w-3.5 h-3.5 shrink-0 opacity-80" />
        <span className="text-[10px] uppercase font-bold tracking-wider opacity-75">
          Nguồn đề:
        </span>
        <span className="font-bold tracking-tight">{source}</span>
      </div>

      {showHideButton && onHide && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onHide();
          }}
          className="ml-1 p-0.5 rounded hover:bg-black/10 dark:hover:bg-white/10 opacity-60 hover:opacity-100 transition cursor-pointer text-[10px] inline-flex items-center gap-0.5"
          title="Ẩn nguồn đề để tập trung làm bài như thi thật"
        >
          <EyeOff className="w-3 h-3" />
          <span className="hidden sm:inline text-[9px]">Ẩn</span>
        </button>
      )}
    </div>
  );
};

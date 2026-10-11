import React, { useEffect, useState, useRef } from 'react';
import { CountdownTimerRing } from './CountdownTimerRing';

interface ExamTimerProps {
  initialSeconds?: number;
  isRunning: boolean;
  onTimeUp: () => void;
  className?: string;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({
  initialSeconds = 75 * 60,
  isRunning,
  onTimeUp,
  className = '',
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  // Reset when initialSeconds changes (e.g. new exam set chosen)
  useEffect(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);

  // Interval timer tick - strictly pure, no external side effects in updater
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Trigger onTimeUp safely in an effect when secondsLeft hits 0
  useEffect(() => {
    if (isRunning && secondsLeft === 0) {
      onTimeUpRef.current();
    }
  }, [secondsLeft, isRunning]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isWarning = secondsLeft <= 10 * 60 && secondsLeft > 3 * 60;
  const isCritical = secondsLeft <= 3 * 60;

  let badgeColor = 'text-slate-800 dark:text-zinc-200 border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90';

  if (isCritical) {
    badgeColor = 'text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-500/40 bg-rose-50 dark:bg-rose-950/40';
  } else if (isWarning) {
    badgeColor = 'text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/40';
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm select-none transition-colors shadow-xs ${badgeColor} ${className}`}
      title="Thời gian làm bài còn lại"
    >
      {/* SVG Smooth Countdown Ring */}
      <CountdownTimerRing
        secondsLeft={secondsLeft}
        totalSeconds={initialSeconds}
        size={22}
        strokeWidth={2.5}
      />

      <div className="flex items-baseline gap-1.5">
        <span className="font-bold tracking-wider text-sm tabular-nums">
          {formattedTime}
        </span>
        <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-sans hidden sm:inline">
          {isCritical ? '(Khẩn cấp)' : isWarning ? '(Sắp hết giờ)' : ''}
        </span>
      </div>
    </div>
  );
};

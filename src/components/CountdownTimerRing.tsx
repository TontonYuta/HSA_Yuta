import React from 'react';

interface CountdownTimerRingProps {
  secondsLeft: number;
  totalSeconds: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const CountdownTimerRing: React.FC<CountdownTimerRingProps> = ({
  secondsLeft,
  totalSeconds,
  size = 32,
  strokeWidth = 3,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fraction = Math.max(0, Math.min(1, secondsLeft / totalSeconds));
  const strokeDashoffset = circumference * (1 - fraction);

  const isWarning = secondsLeft <= 10 * 60 && secondsLeft > 3 * 60;
  const isCritical = secondsLeft <= 3 * 60;

  let strokeColor = 'text-cyan-500 dark:text-cyan-400';
  if (isCritical) {
    strokeColor = 'text-rose-500 dark:text-rose-400';
  } else if (isWarning) {
    strokeColor = 'text-amber-500 dark:text-amber-400';
  }

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="text-zinc-200 dark:text-zinc-800"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
        />
        {/* Animated progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={`${strokeColor} transition-[stroke-dashoffset] duration-1000 ease-linear`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

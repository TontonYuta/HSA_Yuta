import React, { useId } from 'react';

interface BorderBeamProps {
  beamSizePercent?: number; // percentage of perimeter, e.g. 14
  duration?: number; // seconds
  color?: string;
  glowColor?: string;
  rx?: number;
  strokeWidth?: number;
  reverse?: boolean;
  className?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  beamSizePercent = 14,
  duration = 12,
  color = '#38bdf8',
  glowColor = '#818cf8',
  rx = 24,
  strokeWidth = 1.75,
  reverse = false,
  className = '',
}) => {
  const rawId = useId();
  const filterId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] z-20 ${className}`}>
      <svg
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`beam-glow-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id={`beam-grad-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="50%" stopColor={color} stopOpacity="0.75" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx={rx}
          ry={rx}
          fill="none"
          pathLength={100}
          stroke={`url(#beam-grad-${filterId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${beamSizePercent} ${100 - beamSizePercent}`}
          filter={`url(#beam-glow-${filterId})`}
          className={reverse ? 'animate-beam-orbit-reverse' : 'animate-beam-orbit'}
          style={{
            animationDuration: `${duration}s`,
          }}
        />
      </svg>
    </div>
  );
};

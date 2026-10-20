import React, { useId } from 'react';

interface WindingDragonTrailsProps {
  className?: string;
  theme?: 'azure' | 'golden' | 'dual';
}

export const WindingDragonTrails: React.FC<WindingDragonTrailsProps> = ({
  className = '',
  theme = 'dual',
}) => {
  const rawId = useId();
  const filterId = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  return (
    <div
      className={`pointer-events-none absolute -inset-x-2 -inset-y-3 sm:-inset-x-4 sm:-inset-y-4 overflow-hidden select-none z-20 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full block opacity-85 dark:opacity-75"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luminous Glow Filter for Dragon & Phoenix Heads */}
          <filter id={`glow-dragon-${filterId}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Azure Dragon Flight Loop (Thanh Long uốn lượn) */}
          <path
            id={`dragon-path-${filterId}`}
            d="M 50,110 C 220,15 450,20 710,95 C 830,135 800,265 670,305 C 500,365 270,355 150,295 C 45,245 15,150 50,110 Z"
            fill="none"
          />

          {/* Golden Phoenix Flight Loop (Phượng Hoàng uốn lượn) */}
          <path
            id={`phoenix-path-${filterId}`}
            d="M 1130,85 C 1040,15 850,25 750,110 C 680,185 720,295 850,340 C 980,385 1100,335 1135,235 C 1160,165 1150,115 1130,85 Z"
            fill="none"
          />
        </defs>

        {/* ============================================================= */}
        {/* 1. THANH LONG (AZURE DRAGON TRAIL) - 16s Fluid Winding Loop   */}
        {/* ============================================================= */}
        {/* Head Orb */}
        <g>
          <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#dragon-path-${filterId}`} />
          </animateMotion>
          <circle r="3.2" fill="#38bdf8" filter={`url(#glow-dragon-${filterId})`} />
          <circle r="8" fill="#38bdf8" opacity="0.22" />
        </g>
        {/* Trailing Feather 1 */}
        <g>
          <animateMotion dur="16s" begin="-0.22s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#dragon-path-${filterId}`} />
          </animateMotion>
          <circle r="2.5" fill="#60a5fa" opacity="0.8" />
        </g>
        {/* Trailing Feather 2 */}
        <g>
          <animateMotion dur="16s" begin="-0.45s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#dragon-path-${filterId}`} />
          </animateMotion>
          <circle r="1.9" fill="#93c5fd" opacity="0.6" />
        </g>
        {/* Trailing Feather 3 */}
        <g>
          <animateMotion dur="16s" begin="-0.70s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#dragon-path-${filterId}`} />
          </animateMotion>
          <circle r="1.3" fill="#bae6fd" opacity="0.4" />
        </g>
        {/* Trailing Stardust Tail 4 */}
        <g>
          <animateMotion dur="16s" begin="-0.98s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#dragon-path-${filterId}`} />
          </animateMotion>
          <circle r="0.9" fill="#e0f2fe" opacity="0.25" />
        </g>

        {/* ============================================================= */}
        {/* 3. PHƯỢNG HOÀNG (GOLDEN PHOENIX TRAIL) - 19s Majestic Loop    */}
        {/* ============================================================= */}
        {/* Head Orb */}
        <g>
          <animateMotion dur="19s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#phoenix-path-${filterId}`} />
          </animateMotion>
          <circle r="3.1" fill="#fbbf24" filter={`url(#glow-dragon-${filterId})`} />
          <circle r="7.5" fill="#f59e0b" opacity="0.22" />
        </g>
        {/* Trailing Feather 1 */}
        <g>
          <animateMotion dur="19s" begin="-0.25s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#phoenix-path-${filterId}`} />
          </animateMotion>
          <circle r="2.4" fill="#f59e0b" opacity="0.8" />
        </g>
        {/* Trailing Feather 2 */}
        <g>
          <animateMotion dur="19s" begin="-0.50s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#phoenix-path-${filterId}`} />
          </animateMotion>
          <circle r="1.8" fill="#fbbf24" opacity="0.6" />
        </g>
        {/* Trailing Feather 3 */}
        <g>
          <animateMotion dur="19s" begin="-0.75s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#phoenix-path-${filterId}`} />
          </animateMotion>
          <circle r="1.3" fill="#fde68a" opacity="0.4" />
        </g>
        {/* Trailing Stardust Tail 4 */}
        <g>
          <animateMotion dur="19s" begin="-1.05s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#phoenix-path-${filterId}`} />
          </animateMotion>
          <circle r="0.8" fill="#fef3c7" opacity="0.25" />
        </g>

        {/* ============================================================= */}
        {/* 4. HOVERING CELESTIAL STARDUST MOTES (Đom đóm / Bụi sao tiên)  */}
        {/* ============================================================= */}
        <circle cx="280" cy="55" r="1.6" fill="#38bdf8" className="animate-celestial-float" style={{ animationDelay: '0s' }} />
        <circle cx="560" cy="80" r="1.3" fill="#818cf8" className="animate-celestial-float" style={{ animationDelay: '1.2s' }} />
        <circle cx="790" cy="220" r="1.8" fill="#fbbf24" className="animate-celestial-float" style={{ animationDelay: '2.5s' }} />
        <circle cx="430" cy="330" r="1.4" fill="#34d399" className="animate-celestial-float" style={{ animationDelay: '0.8s' }} />
        <circle cx="950" cy="140" r="1.7" fill="#f59e0b" className="animate-celestial-float" style={{ animationDelay: '1.8s' }} />
        <circle cx="150" cy="220" r="1.2" fill="#38bdf8" className="animate-celestial-float" style={{ animationDelay: '3.1s' }} />
      </svg>
    </div>
  );
};

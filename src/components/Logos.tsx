import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'compact' | 'white';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  height?: number;
}

/**
 * Official DSAB Lift Brand Logo
 * Displays the authentic brand showcase image (/assets/aistudio/DSAB_Lift_Brand_Showcase_9e79c71b.png)
 * Automatically adapts between dark background (top half) in dark mode
 * and white background (bottom half) in light mode.
 */
export const DSABLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  height
}) => {
  const heightMap = {
    sm: 40,
    md: 52,
    lg: 66,
    xl: 82
  };

  const defaultH = heightMap[size] || 52;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-[1.02] ${
        height ? '' : className.includes('h-') ? '' : 'h-11 sm:h-13 md:h-14'
      } ${className}`}
      style={{
        height: height ? `${height}px` : undefined,
        aspectRatio: '1704 / 461.5'
      }}
    >
      {/* Dark Mode Version: Top half of showcase image with deep black background */}
      <div className="dark:block hidden w-full h-full relative overflow-hidden">
        <img
          src="/assets/aistudio/DSAB_Lift_Brand_Showcase_9e79c71b.png"
          alt="DSAB Lift - Elevating Every Possibility"
          className="max-w-none w-full h-[200%] object-cover object-top select-none pointer-events-none drop-shadow-md"
          loading="eager"
        />
      </div>

      {/* Light Mode Version: Bottom half of showcase image with pure white background */}
      <div className="dark:hidden block w-full h-full relative overflow-hidden">
        <img
          src="/assets/aistudio/DSAB_Lift_Brand_Showcase_9e79c71b.png"
          alt="DSAB Lift - Elevating Every Possibility"
          className="max-w-none w-full h-[200%] object-cover object-bottom select-none pointer-events-none drop-shadow-sm"
          loading="eager"
        />
      </div>
    </div>
  );
};

/**
 * FUJIYANG Elevator & Escalator Official Logo Component
 */
export const FujiyangLogo: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Circle with Divided Red & Blue Triangle */}
      <div className="w-8 h-8 rounded-full border-2 border-slate-300/80 bg-white flex items-center justify-center p-1 shadow-sm flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Top Red Triangle */}
          <path d="M12 70 L50 14 L88 70 Z" fill="#DC2626" />
          {/* Bottom Blue Slice Cut */}
          <path d="M12 72 L88 72 L62 90 L12 72 Z" fill="#1D4ED8" />
          <path d="M12 70 L88 70 L50 86 Z" fill="#1E40AF" />
        </svg>
      </div>

      <div>
        <div className="flex items-baseline gap-1 leading-none">
          <span className="font-extrabold tracking-tight text-blue-400 text-base sm:text-lg font-['Space_Grotesk']">
            FUJI<span className="text-white">YANG</span>
          </span>
          <span className="text-[9px] font-bold text-slate-400 border border-slate-500 rounded-full w-3.5 h-3.5 flex items-center justify-center leading-none">
            R
          </span>
        </div>
        {!compact && (
          <div className="text-[8px] sm:text-[9px] font-semibold tracking-wider text-blue-300/90 uppercase">
            Elevator & Escalator
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * SHARP Elevators Partner Logo Component
 */
export const SharpLogo: React.FC<{ className?: string; compact?: boolean }> = ({
  className = '',
  compact = false
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center p-1 flex-shrink-0">
        <span className="text-red-500 font-black text-sm tracking-tighter">
          SHARP
        </span>
      </div>
      <div>
        <div className="font-extrabold tracking-tight text-white text-sm sm:text-base font-['Space_Grotesk'] leading-none">
          SHARP <span className="text-red-400 font-normal text-xs">ELEVATORS</span>
        </div>
        {!compact && (
          <div className="text-[8px] sm:text-[9px] font-medium tracking-wider text-slate-400 uppercase mt-0.5">
            Trading Co., Ltd. (HK • Korea)
          </div>
        )}
      </div>
    </div>
  );
};

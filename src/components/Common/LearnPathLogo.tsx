import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const LearnPathLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 24 : size === 'md' ? 32 : 44;
  const textSize = size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-2xl';

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="learnpath-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="learnpath-grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        {/* Outer Loop and Circuit Tracks */}
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          rx="22"
          fill="none"
          stroke="url(#learnpath-grad1)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Inner circuit node lines */}
        <path
          d="M 28 32 L 28 68 C 28 74 34 78 40 78 L 62 78"
          stroke="url(#learnpath-grad1)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="28" cy="32" r="5.5" fill="#4f46e5" />
        <circle cx="62" cy="78" r="5.5" fill="#06b6d4" />

        {/* Inner Loop */}
        <path
          d="M 68 28 L 52 28 C 44 28 44 48 52 48 L 74 48 L 74 65"
          stroke="url(#learnpath-grad2)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="68" cy="28" r="5.5" fill="#06b6d4" />
        <circle cx="74" cy="65" r="5.5" fill="#3b82f6" />
      </svg>

      {showText && (
        <span className={`${textSize} font-extrabold text-[#2a2b7c] flex items-center gap-1`}>
          <span>LearnPath</span>
          <span className="text-[#3b82f6] font-black">AI</span>
        </span>
      )}
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showTagline?: boolean;
}

export const ImparaLogo: React.FC<LogoProps> = ({
  className = "h-10",
  showTagline = true,
}) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Icon (Play Ribbon Symbol) */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform group-hover:scale-105 transition-transform duration-200">
          <defs>
            <linearGradient id="logoDotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#159CF5" />
              <stop offset="100%" stopColor="#0866E8" />
            </linearGradient>
            <linearGradient id="logoBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#159CF5" />
              <stop offset="45%" stopColor="#0866E8" />
              <stop offset="100%" stopColor="#091B78" />
            </linearGradient>
            <linearGradient id="logoFoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0866E8" />
              <stop offset="100%" stopColor="#091B78" />
            </linearGradient>
          </defs>
          {/* Dot of the 'i' */}
          <circle cx="28" cy="22" r="11" fill="url(#logoDotGrad)" />
          {/* Play arrow folded ribbon shape */}
          <path
            d="M 17 40 C 17 38 19 36 21 36 L 35 36 C 37 36 39 38 39 40 L 39 52 L 72 38 C 76 36 80 39 80 43 L 80 57 C 80 61 76 64 72 62 L 39 48 L 39 72 C 39 74 37 76 35 76 L 21 76 C 19 76 17 74 17 72 Z"
            fill="url(#logoBodyGrad)"
          />
          {/* Subtle 3D folding accent */}
          <path
            d="M 39 48 L 72 62 C 76 64 80 61 80 57 L 80 54 L 39 39 Z"
            fill="url(#logoFoldGrad)"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-[#091B78]">
          impara
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#0866E8] uppercase leading-tight mt-0.5">
          CREATIVE LABS
        </span>
        {showTagline && (
          <span className="text-[8px] sm:text-[9px] font-medium tracking-wider text-[#253653]/70 leading-none mt-0.5 hidden sm:inline-block">
            Learn. Create. Build. Beyond.
          </span>
        )}
      </div>
    </Link>
  );
};

export const TechKnotsLogo: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = "h-8",
  inverted = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* TechKnots Knot Emblem */}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm tracking-tighter ${
        inverted ? 'bg-white text-[#091B78]' : 'bg-[#091B78] text-white shadow-sm'
      }`}>
        <span className="font-mono text-xs">T⊗K</span>
      </div>
      <div className="flex flex-col">
        <span className={`text-base font-extrabold tracking-wider leading-none uppercase ${
          inverted ? 'text-white' : 'text-[#091B78]'
        }`}>
          TECHKNOTS
        </span>
        <span className={`text-[9px] font-semibold tracking-wider italic leading-none mt-0.5 ${
          inverted ? 'text-blue-200' : 'text-[#0866E8]'
        }`}>
          — One knot at a time —
        </span>
      </div>
    </div>
  );
};

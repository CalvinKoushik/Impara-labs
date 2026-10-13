import React from 'react';
import { Link } from 'react-router-dom';

interface ImparaLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const ImparaLogo: React.FC<ImparaLogoProps> = ({
  className = 'h-10',
}) => {
  return (
    <Link to="/" className="inline-flex items-center group focus:outline-none">
      <img
        src="/assets/impara-logo.png"
        alt="Impara Creative Labs - Learn. Create. Build. Beyond."
        className={`w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${className}`}
      />
    </Link>
  );
};

interface TechKnotsLogoProps {
  className?: string;
  inverted?: boolean;
}

export const TechKnotsLogo: React.FC<TechKnotsLogoProps> = ({
  className = 'h-8',
  inverted = false,
}) => {
  const logoSrc = inverted ? '/assets/techknots-logo-white.png' : '/assets/techknots-logo.png';
  return (
    <div className="inline-flex items-center select-none">
      <img
        src={logoSrc}
        alt="TechKnots - One knot at a time"
        className={`w-auto object-contain ${className}`}
      />
    </div>
  );
};

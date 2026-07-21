"use client";

import React from "react";

interface BrandElementProps {
  className?: string;
  size?: number | string;
}

/**
 * Official 4-Piece Hollow Diamond Shape from the DFS Logo
 */
export const DFSDiamond: React.FC<BrandElementProps> = ({ className = "text-white", size = "100%" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Right Segment */}
      <path d="M89.9009 42.9753L46.9707 0.000667572V7.66843L82.2418 42.9753H89.9009Z" fill="currentColor" />
      {/* Bottom Left Segment */}
      <path d="M0 46.9262L43.0289 90.0002V82.3319L7.65908 46.9262H0Z" fill="currentColor" />
      {/* Top Left Segment */}
      <path d="M43.028 7.66834V0.000576019L0.0978394 42.9752H7.75692L43.028 7.66834Z" fill="currentColor" />
      {/* Bottom Right Segment */}
      <path d="M46.9707 82.3325V90.0002L89.9996 46.9268H82.3406L46.9707 82.3325Z" fill="currentColor" />
    </svg>
  );
};

/**
 * Bold block-style Double Chevron pointing right
 */
export const DoubleChevron: React.FC<BrandElementProps> = ({ className = "text-white", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Right chevron segment */}
      <path d="M45 10 L85 50 L45 90 L33 78 L61 50 L33 22 Z" />
      {/* Left chevron segment */}
      <path d="M15 10 L55 50 L15 90 L3 78 L31 50 L3 22 Z" />
    </svg>
  );
};

/**
 * Horizontal Repeating Chevron Pattern Band (Image 1/4)
 */
export const ChevronStrip: React.FC<BrandElementProps> = ({ className = "text-white/10", size = "100%" }) => {
  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 350 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path d="M10 0 L30 20 L10 40 L19 40 L39 20 L19 0 Z" />
        <path d="M35 0 L55 20 L35 40 L44 40 L64 20 L44 0 Z" />
        <path d="M60 0 L80 20 L60 40 L69 40 L89 20 L69 0 Z" />
        <path d="M85 0 L105 20 L85 40 L94 40 L114 20 L94 0 Z" />
        <path d="M110 0 L130 20 L110 40 L119 40 L139 20 L119 0 Z" />
        <path d="M135 0 L155 20 L135 40 L144 40 L164 20 L144 0 Z" />
        <path d="M160 0 L180 20 L160 40 L169 40 L189 20 L169 0 Z" />
        <path d="M185 0 L205 20 L185 40 L194 40 L214 20 L194 0 Z" />
        <path d="M210 0 L230 20 L210 40 L219 40 L239 20 L219 0 Z" />
        <path d="M235 0 L255 20 L235 40 L244 40 L264 20 L244 0 Z" />
        <path d="M260 0 L280 20 L260 40 L269 40 L289 20 L269 0 Z" />
        <path d="M285 0 L305 20 L285 40 L294 40 L314 20 L294 0 Z" />
        <path d="M310 0 L330 20 L310 40 L319 40 L339 20 L319 0 Z" />
      </g>
    </svg>
  );
};

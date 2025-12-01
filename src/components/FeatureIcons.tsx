"use client";

import React from 'react';

export const AiIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="40" fill="url(#ai-gradient)" opacity="0.2" />
    <path
      d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25ZM50 65C41.7157 65 35 58.2843 35 50C35 41.7157 41.7157 35 50 35C58.2843 35 65 41.7157 65 50C65 58.2843 58.2843 65 50 65Z"
      fill="url(#ai-gradient)"
    />
    <circle cx="50" cy="50" r="8" fill="white" />
    <defs>
      <linearGradient id="ai-gradient" x1="25" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

export const AiCardBg = () => {
  const id = React.useId();
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.08, color: 'var(--ui2v-primary)' }}>
      <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">
        <defs>
          <pattern id={`ai-grid-${id}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ai-grid-${id})`} />
        <path d="M0 300 C 100 200 200 200 300 300" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
           <animate attributeName="d" values="M0 300 C 100 200 200 200 300 300;M0 300 C 100 250 200 250 300 300;M0 300 C 100 200 200 200 300 300" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M0 0 C 100 100 200 100 300 0" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
           <animate attributeName="d" values="M0 0 C 100 100 200 100 300 0;M0 0 C 100 50 200 50 300 0;M0 0 C 100 100 200 100 300 0" dur="7s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
};

export const LocalCardBg = () => {
  const id = React.useId();
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.08, color: '#10B981' }}>
      <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">
        <defs>
          <pattern id={`local-check-${id}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M20 30 L 25 35 L 40 20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#local-check-${id})`} />
        <rect x="20" y="20" width="260" height="260" rx="20" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
};

export const EasyCardBg = () => {
  const id = React.useId();
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.08, color: '#F59E0B' }}>
      <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="none">
        <defs>
          <pattern id={`easy-star-${id}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
             <path d="M25 15 L 28 22 L 35 25 L 28 28 L 25 35 L 22 28 L 15 25 L 22 22 Z" fill="currentColor" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#easy-star-${id})`} />
        <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10" fill="none" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="60s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export const LocalIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="25" y="25" width="50" height="50" rx="10" fill="url(#local-gradient)" opacity="0.2" />
    <path
      d="M35 45H65M35 55H55M35 65H45"
      stroke="url(#local-gradient)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect x="25" y="25" width="50" height="50" rx="10" stroke="url(#local-gradient)" strokeWidth="2" />
    <defs>
      <linearGradient id="local-gradient" x1="25" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export const EasyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M55 15L30 50H50L45 85L70 50H50L55 15Z"
      fill="url(#easy-gradient)"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="easy-gradient" x1="30" y1="15" x2="70" y2="85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
    </defs>
  </svg>
);

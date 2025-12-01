"use client";

import React from 'react';

/**
 * Hero Flow Animation
 * Visualizes the "Text/UI -> AI -> Video" transformation logic.
 * Designed to be a subtle, high-end background element connecting the Hero Text to the Preview Image.
 */
export const HeroFlowAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
  const id = React.useId();
  
  return (
    <div 
      className={className} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        overflow: 'hidden',
        zIndex: 0,
        ...style 
      }}
    >
      <svg 
        viewBox="0 0 1200 600" 
        preserveAspectRatio="xMidYMid slice" 
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          {/* Main Flow Gradient */}
          <linearGradient id={`flow-grad-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--ui2v-primary)" stopOpacity="0.05" />
            <stop offset="40%" stopColor="var(--ui2v-primary)" stopOpacity="0.4" />
            <stop offset="60%" stopColor="var(--ui2v-accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--ui2v-accent)" stopOpacity="0.05" />
          </linearGradient>
          
          {/* Particle Gradient */}
          <radialGradient id={`particle-grad-${id}`}>
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>

          {/* Glow Filter */}
          <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Left Side: The "Source" (Code/UI/Text) --- */}
        {/* Abstract Lines representing input data/structure */}
        <g transform="translate(100, 150)" opacity="0.3">
           <rect x="0" y="0" width="120" height="2" rx="1" fill="var(--ui2v-primary)">
             <animate attributeName="width" values="120;80;120" dur="4s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
           </rect>
           <rect x="0" y="20" width="80" height="2" rx="1" fill="var(--ui2v-primary)">
             <animate attributeName="width" values="80;100;80" dur="5s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
           </rect>
           <rect x="0" y="40" width="100" height="2" rx="1" fill="var(--ui2v-primary)">
             <animate attributeName="width" values="100;60;100" dur="6s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
           </rect>
        </g>

        {/* --- Connecting Paths (The Transformation) --- */}
        {/* These curves connect the text area (approx left-center) to the image area (approx right-center) */}
        <g fill="none" stroke={`url(#flow-grad-${id})`} strokeWidth="1.5" strokeLinecap="round">
           {/* Path 1: Upper Curve */}
           <path d="M 150 160 C 400 160, 500 300, 800 300">
             <animate attributeName="d" 
               values="M 150 160 C 400 160, 500 300, 800 300; 
                       M 150 160 C 400 140, 500 320, 800 300; 
                       M 150 160 C 400 160, 500 300, 800 300" 
               dur="10s" repeatCount="indefinite" />
           </path>
           
           {/* Path 2: Lower Curve */}
           <path d="M 150 190 C 400 190, 500 330, 800 330" opacity="0.6">
              <animate attributeName="d" 
               values="M 150 190 C 400 190, 500 330, 800 330; 
                       M 150 190 C 400 210, 500 310, 800 330; 
                       M 150 190 C 400 190, 500 330, 800 330" 
               dur="12s" repeatCount="indefinite" />
           </path>

           {/* Path 3: Middle Straight-ish */}
           <path d="M 150 175 C 300 175, 600 315, 800 315" opacity="0.4" strokeDasharray="4 6">
             <animate attributeName="stroke-dashoffset" from="100" to="0" dur="20s" repeatCount="indefinite" />
           </path>
        </g>

        {/* --- Data Particles flowing along the paths --- */}
        <circle r="3" fill="var(--ui2v-accent)" filter={`url(#glow-${id})`}>
          <animateMotion 
            path="M 150 160 C 400 160, 500 300, 800 300" 
            dur="3s" 
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          />
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle r="2" fill="var(--ui2v-primary)" filter={`url(#glow-${id})`}>
          <animateMotion 
            path="M 150 190 C 400 190, 500 330, 800 330" 
            dur="4s" 
            begin="1s"
            repeatCount="indefinite"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="linear"
          />
          <animate attributeName="opacity" values="0;1;0" dur="4s" begin="1s" repeatCount="indefinite" />
        </circle>

        {/* --- Right Side: The "Target" (Video/Preview) --- */}
        {/* Subtle brackets or glow around the preview area */}
        <g transform="translate(800, 280)">
           {/* Connecting Node */}
           <circle cx="0" cy="20" r="4" fill="var(--ui2v-accent)" opacity="0.8">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
           </circle>
           
           {/* Expanding Ripples representing video generation */}
           <circle cx="0" cy="20" r="10" stroke="var(--ui2v-accent)" strokeWidth="1" fill="none" opacity="0">
              <animate attributeName="r" values="10;30" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
           </circle>
        </g>
      </svg>
    </div>
  );
};

/**
 * Feature Logic Icon
 * A set of clean, high-end animated icons for the features section.
 */

// 1. Local AI - Privacy & Speed
export const LocalLogicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 56s-20-10-20-30V14l20-8 20 8v12" strokeOpacity="0.2" />
    <path d="M32 8v48" strokeDasharray="4 4" strokeOpacity="0.5" />
    <rect x="22" y="22" width="20" height="20" rx="4" stroke="currentColor">
       <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
    </rect>
    <circle cx="32" cy="32" r="4" fill="currentColor">
       <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// 2. AI Magic - Brain/Spark
export const AiLogicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 12v4" />
    <path d="M32 48v4" />
    <path d="M14 32h4" />
    <path d="M46 32h4" />
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeOpacity="0.8" />
    <path d="M32 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z" strokeOpacity="0.3">
      <animate attributeName="d" values="M32 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z; M32 18c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14z; M32 20c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z" dur="3s" repeatCount="indefinite" />
    </path>
    <path d="M48 16l-4 4" opacity="0.5" />
    <path d="M16 16l4 4" opacity="0.5" />
    <path d="M48 48l-4-4" opacity="0.5" />
    <path d="M16 48l4-4" opacity="0.5" />
  </svg>
);

// 3. Easy Use - Hand/Touch
export const EasyLogicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <rect x="16" y="12" width="32" height="40" rx="4" strokeOpacity="0.5" />
     <path d="M32 42l8-8-8-8" stroke="currentColor">
        <animate attributeName="d" values="M30 42l8-8-8-8; M34 42l8-8-8-8; M30 42l8-8-8-8" dur="2s" repeatCount="indefinite" />
     </path>
     <line x1="24" y1="34" x2="40" y2="34" stroke="currentColor">
        <animate attributeName="x2" values="38;42;38" dur="2s" repeatCount="indefinite" />
     </line>
  </svg>
);

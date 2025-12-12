"use client";

import React from 'react';

// 1. Prompt to Video Processing Animation
// Visualizes text input -> processing -> video output
export const PromptProcessingAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
  const id = React.useId();
  return (
    <svg 
      viewBox="0 0 200 80" 
      className={className} 
      style={{ width: '100%', height: 'auto', ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`beam-grad-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ui2v-primary)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="var(--ui2v-accent)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--ui2v-primary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Text Input Lines */}
      <g transform="translate(20, 25)">
        <rect x="0" y="0" width="40" height="4" rx="2" fill="var(--ui2v-primary)" opacity="0.6">
          <animate attributeName="width" values="0;40;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="0" y="10" width="30" height="4" rx="2" fill="var(--ui2v-primary)" opacity="0.6">
          <animate attributeName="width" values="0;30;30" dur="3s" begin="0.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" begin="0.2s" repeatCount="indefinite" />
        </rect>
        <rect x="0" y="20" width="35" height="4" rx="2" fill="var(--ui2v-primary)" opacity="0.6">
          <animate attributeName="width" values="0;35;35" dur="3s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="3s" begin="0.4s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Processing Beam */}
      <rect x="70" y="35" width="60" height="10" fill={`url(#beam-grad-${id})`} rx="2">
        <animate attributeName="x" values="70;80;70" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="width" values="60;50;60" dur="1.5s" repeatCount="indefinite" />
      </rect>

      {/* Video Output Icon */}
      <g transform="translate(140, 20)">
        <rect x="0" y="0" width="40" height="40" rx="8" stroke="var(--ui2v-accent)" strokeWidth="2" fill="none" opacity="0.8">
             <animate attributeName="stroke-dasharray" values="0 160; 160 0" dur="3s" repeatCount="indefinite" />
        </rect>
        <path d="M15 12 L28 20 L15 28 Z" fill="var(--ui2v-accent)">
            <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" keyTimes="0;0.6;0.9;1" />
            <animate attributeName="transform" type="scale" values="0;1;1;0" dur="3s" repeatCount="indefinite" additive="sum" />
        </path>
      </g>
    </svg>
  );
};

// Pre-computed random values for consistent SSR/client rendering
const DIFFUSION_GRID_VALUES = Array.from({ length: 64 }, (_, i) => {
  // Use index-based pseudo-random for consistency
  const seed = i * 2654435761;
  const rand1 = ((seed >> 16) & 0xFF) / 255;
  const rand2 = ((seed >> 8) & 0xFF) / 255;
  return {
    x: rand1 * 20 - 10,
    y: rand2 * 20 - 10
  };
});

// 2. Diffusion Grid Animation
// Visualizes noise turning into structure
export const DiffusionGridAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
  const id = React.useId();
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      style={{ width: '100%', height: '100%', pointerEvents: 'none', ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <filter id={`blur-${id}`}>
                <feGaussianBlur stdDeviation="2" />
            </filter>
        </defs>
      {/* Grid of dots */}
      {Array.from({ length: 64 }).map((_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const x = col * 25 + 12.5;
        const y = row * 25 + 12.5;
        const { x: randX, y: randY } = DIFFUSION_GRID_VALUES[i];
        return (
          <rect 
            key={i} 
            x={x-5} 
            y={y-5} 
            width="10" 
            height="10" 
            fill="var(--ui2v-primary)" 
            opacity="0.2"
            rx="2"
          >
            {/* Random noise movement to structured */}
            <animateTransform 
                attributeName="transform" 
                type="translate" 
                values={`${randX} ${randY}; 0 0; 0 0`} 
                dur="4s" 
                repeatCount="indefinite" 
            />
            <animate 
                attributeName="opacity" 
                values="0.1;0.8;0.2" 
                dur="4s" 
                repeatCount="indefinite" 
            />
            <animate 
                attributeName="fill" 
                values="#888;var(--ui2v-accent);var(--ui2v-primary)" 
                dur="4s" 
                repeatCount="indefinite" 
            />
          </rect>
        );
      })}
      
      {/* Final clear overlay shape appearing */}
      <circle cx="100" cy="100" r="60" fill="none" stroke="var(--ui2v-accent)" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" values="0;0;1;0" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;0.8;1" />
          <animate attributeName="r" values="80;60;60;80" dur="4s" repeatCount="indefinite" keyTimes="0;0.5;0.8;1" />
      </circle>
    </svg>
  );
};

// 3. Smart Tracking Animation
// Visualizes object tracking/cropping
export const SmartTrackingAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <svg viewBox="0 0 200 150" className={className} style={{ width: '100%', height: '100%', ...style }}>
            {/* Moving Object */}
            <circle cx="50" cy="75" r="10" fill="var(--ui2v-primary)">
                <animate attributeName="cx" values="50;150;50" dur="6s" repeatCount="indefinite" />
                <animate attributeName="cy" values="75;50;100;75" dur="6s" repeatCount="indefinite" />
            </circle>

            {/* Tracking Box */}
            <rect x="30" y="55" width="40" height="40" fill="none" stroke="var(--ui2v-accent)" strokeWidth="2" strokeDasharray="4 2">
                 <animate attributeName="x" values="30;130;30" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="y" values="55;30;80;55" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="width" values="40;50;40" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="height" values="40;50;40" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="stroke" values="var(--ui2v-accent);#fff;var(--ui2v-accent)" dur="1s" repeatCount="indefinite" />
            </rect>
            
            {/* Crosshair lines */}
             <line x1="50" y1="55" x2="50" y2="95" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.5">
                 <animate attributeName="x1" values="50;150;50" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="x2" values="50;150;50" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="y1" values="55;30;80;55" dur="6s" repeatCount="indefinite" />
                 <animate attributeName="y2" values="95;80;130;95" dur="6s" repeatCount="indefinite" />
             </line>
             <line x1="30" y1="75" x2="70" y2="75" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.5">
                  <animate attributeName="y1" values="75;50;100;75" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="75;50;100;75" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="x1" values="30;130;30" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="70;170;70" dur="6s" repeatCount="indefinite" />
             </line>
        </svg>
    );
}

// 4. Enhanced Timeline Animation
// More detailed timeline with layers
export const TimelineEditorAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <svg viewBox="0 0 300 120" className={className} style={{ width: '100%', height: '100%', ...style }}>
            {/* Tracks */}
            <rect x="0" y="20" width="300" height="25" fill="rgba(255,255,255,0.05)" rx="4" />
            <rect x="0" y="55" width="300" height="25" fill="rgba(255,255,255,0.05)" rx="4" />
            <rect x="0" y="90" width="300" height="25" fill="rgba(255,255,255,0.05)" rx="4" />

            {/* Clips */}
            <rect x="20" y="22" width="80" height="21" rx="2" fill="var(--ui2v-primary)" opacity="0.7" />
            <rect x="110" y="22" width="60" height="21" rx="2" fill="var(--ui2v-primary)" opacity="0.6" />
            
            <rect x="50" y="57" width="100" height="21" rx="2" fill="var(--ui2v-accent)" opacity="0.6" />
            
            <rect x="80" y="92" width="40" height="21" rx="2" fill="#10B981" opacity="0.5" />

            {/* Playhead */}
            <g>
                <line x1="0" y1="10" x2="0" y2="120" stroke="#fff" strokeWidth="2">
                    <animate attributeName="x1" values="0;300" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="0;300" dur="8s" repeatCount="indefinite" />
                </line>
                <path d="M-5 10 L5 10 L0 18 Z" fill="#fff">
                    <animate attributeName="transform" type="translate" values="0 0; 300 0" dur="8s" repeatCount="indefinite" />
                </path>
            </g>
            
            {/* Effects popping up on playhead contact */}
            <circle r="4" fill="#fff" opacity="0">
                <animateMotion path="M0,32 L300,32" dur="8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.1;0.15;1" />
                <animate attributeName="r" values="4;8;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.1;0.15;1" />
            </circle>
             <circle r="4" fill="#fff" opacity="0">
                <animateMotion path="M0,67 L300,67" dur="8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;0;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.2;0.25;0.3;1" />
                <animate attributeName="r" values="4;8;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.2;0.25;0.3;1" />
            </circle>
        </svg>
    )
}

// 5. AI Model Hub Animation
// Central brain with multiple inputs/outputs
export const ModelHubAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    const id = React.useId();
    return (
        <svg viewBox="0 0 200 200" className={className} style={{ width: '100%', height: '100%', ...style }}>
             <defs>
                <radialGradient id={`glow-${id}`} cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="var(--ui2v-accent)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--ui2v-accent)" stopOpacity="0" />
                </radialGradient>
            </defs>
            
            {/* Center Hub */}
            <circle cx="100" cy="100" r="30" fill="var(--ui2v-surface)" stroke="var(--ui2v-primary)" strokeWidth="2" />
            <circle cx="100" cy="100" r="20" fill={`url(#glow-${id})`}>
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            
            {/* Rotating Ring */}
            <circle cx="100" cy="100" r="50" fill="none" stroke="var(--ui2v-border)" strokeWidth="1" strokeDasharray="10 5">
                <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
            </circle>

            {/* Orbiting Nodes */}
            {[0, 90, 180, 270].map((deg, i) => (
                <g key={i} transform={`rotate(${deg} 100 100)`}>
                    <circle cx="100" cy="40" r="8" fill="var(--ui2v-surface)" stroke="var(--ui2v-accent)" strokeWidth="2">
                        {/* Pulse */}
                        <animate attributeName="stroke-width" values="2;4;2" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite" />
                    </circle>
                    <path d="M100 48 L100 70" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.5">
                         <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin={`${i*0.5}s`} repeatCount="indefinite" />
                    </path>
                </g>
            ))}
            
            {/* Data Particles */}
             <circle r="3" fill="var(--ui2v-primary)">
                <animateMotion path="M100,40 L100,100" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
            </circle>
             <circle r="3" fill="var(--ui2v-primary)">
                <animateMotion path="M160,100 L100,100" dur="2s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
             <circle r="3" fill="var(--ui2v-primary)">
                <animateMotion path="M100,160 L100,100" dur="2s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
             <circle r="3" fill="var(--ui2v-primary)">
                <animateMotion path="M40,100 L100,100" dur="2s" begin="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

// 6. Designer Palette Animation
// Represents creativity and color control
export const DesignerAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <svg viewBox="0 0 200 200" className={className} style={{ width: '100%', height: '100%', ...style }}>
            {/* Floating Shapes */}
            <circle cx="60" cy="60" r="30" fill="var(--ui2v-primary)" opacity="0.4">
                <animate attributeName="cy" values="60;80;60" dur="6s" repeatCount="indefinite" />
                <animate attributeName="r" values="30;35;30" dur="6s" repeatCount="indefinite" />
            </circle>
            
            <rect x="110" y="90" width="50" height="50" rx="10" fill="var(--ui2v-accent)" opacity="0.4">
                 <animate attributeName="y" values="90;70;90" dur="5s" repeatCount="indefinite" />
                 <animateTransform attributeName="transform" type="rotate" from="0 135 115" to="90 135 115" dur="10s" repeatCount="indefinite" />
            </rect>
            
            <polygon points="60,150 100,150 80,110" fill="#F472B6" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="4s" repeatCount="indefinite" additive="sum" />
            </polygon>

            {/* Connecting Bézier Curves */}
            <path d="M60 60 Q 100 100 135 115" fill="none" stroke="var(--ui2v-border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <path d="M135 115 Q 100 130 80 130" fill="none" stroke="var(--ui2v-border)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        </svg>
    );
}

// 7. Marketing Growth Animation
// Represents analytics and growth
export const MarketerAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <svg viewBox="0 0 200 200" className={className} style={{ width: '100%', height: '100%', ...style }}>
             {/* Chart Bars */}
             <rect x="40" y="150" width="20" height="0" fill="var(--ui2v-primary)" opacity="0.3">
                <animate attributeName="height" values="20;50;30;60" dur="4s" repeatCount="indefinite" />
                <animate attributeName="y" values="130;100;120;90" dur="4s" repeatCount="indefinite" />
            </rect>
             <rect x="80" y="150" width="20" height="0" fill="var(--ui2v-primary)" opacity="0.5">
                <animate attributeName="height" values="40;80;60;90" dur="4s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="y" values="110;70;90;60" dur="4s" begin="0.5s" repeatCount="indefinite" />
            </rect>
             <rect x="120" y="150" width="20" height="0" fill="var(--ui2v-primary)" opacity="0.7">
                <animate attributeName="height" values="60;110;90;120" dur="4s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="y" values="90;40;60;30" dur="4s" begin="1s" repeatCount="indefinite" />
            </rect>

            {/* Trend Line */}
            <polyline points="40,130 90,110 130,90 170,40" fill="none" stroke="var(--ui2v-accent)" strokeWidth="2">
                 <animate attributeName="points" values="40,130 90,110 130,90 170,40; 40,100 90,70 130,40 170,30; 40,130 90,110 130,90 170,40" dur="4s" repeatCount="indefinite" />
            </polyline>
            
            {/* Sparkle at top */}
            <circle cx="170" cy="40" r="4" fill="#FCD34D">
                <animate attributeName="cy" values="40;30;40" dur="4s" repeatCount="indefinite" />
                <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
}

// 8. Education / Knowledge Animation
export const EducatorAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <svg viewBox="0 0 200 200" className={className} style={{ width: '100%', height: '100%', ...style }}>
            {/* Book/Tablet Shape */}
            <rect x="50" y="60" width="100" height="80" rx="4" stroke="var(--ui2v-primary)" strokeWidth="2" fill="none" opacity="0.6" />
            <line x1="100" y1="60" x2="100" y2="140" stroke="var(--ui2v-primary)" strokeWidth="1" opacity="0.3" />
            
            {/* Floating Knowledge Nodes popping out */}
            <circle cx="70" cy="80" r="4" fill="var(--ui2v-accent)">
                <animate attributeName="cy" values="80;70;80" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="130" cy="100" r="6" fill="var(--ui2v-accent)" opacity="0.8">
                 <animate attributeName="cy" values="100;90;100" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="120" r="3" fill="var(--ui2v-accent)" opacity="0.6">
                 <animate attributeName="cy" values="120;110;120" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>

            {/* Connecting lines */}
            <path d="M70 80 L130 100 L80 120" fill="none" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.2">
                 <animate attributeName="d" values="M70 80 L130 100 L80 120; M70 70 L130 90 L80 110; M70 80 L130 100 L80 120" dur="3s" repeatCount="indefinite" />
            </path>
        </svg>
    );
}

// 9. Rendering Progress Animation
export const RenderingAnim = ({ className, style }: { className?: string, style?: React.CSSProperties }) => {
  return (
    <svg 
      viewBox="0 0 200 100" 
      className={className} 
      style={{ width: '100%', height: '100%', ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Progress Bar Background */}
      <rect x="20" y="45" width="160" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      
      {/* Progress Bar Fill */}
      <rect x="20" y="45" width="0" height="8" rx="4" fill="var(--ui2v-primary)">
        <animate attributeName="width" values="0;160" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
      </rect>
      
      {/* Scan Line */}
      <line x1="20" y1="30" x2="20" y2="70" stroke="var(--ui2v-accent)" strokeWidth="2" opacity="0.8">
        <animate attributeName="x1" values="20;180" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
        <animate attributeName="x2" values="20;180" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </line>
      
      {/* Percentage Text */}
      <text x="185" y="50" fontSize="10" fill="var(--ui2v-accent)" opacity="0.8">
         <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
         %
      </text>
    </svg>
  );
};

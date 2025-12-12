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

import { HiSparkles } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";

/**
 * Feature Logic Icon
 * A set of clean, high-end animated icons for the features section using React Icons.
 */

// 1. AI Magic - Sparkles
export const AiLogicIcon = ({ className }: { className?: string }) => (
  <HiSparkles className={className} />
);

// 2. Local AI - Privacy & Security
export const LocalLogicIcon = ({ className }: { className?: string }) => (
  <FaShieldAlt className={className} />
);

// 3. Easy Use - Touch/Tap
export const EasyLogicIcon = ({ className }: { className?: string }) => (
  <MdTouchApp className={className} />
);

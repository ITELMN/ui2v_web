"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export const ProcessFlowAnim = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 主题色定义
  const colors = {
    primary: "#8b5cf6", // violet-500
    primaryGlow: "#a78bfa", // violet-400
    secondary: "#ec4899", // pink-500
    accent: "#3b82f6", // blue-500
    bg: "#1e293b", // slate-800
    text: "#e2e8f0", // slate-200
    textMuted: "#94a3b8", // slate-400
    success: "#10b981", // emerald-500
  };

  return (
    <div className="w-full flex justify-center items-center overflow-hidden py-4">
      <svg
        width="1000"
        height="260"
        viewBox="0 0 1000 260"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          maxWidth: "100%", 
          height: "auto",
          fontFamily: "var(--font-family, 'Inter', sans-serif)",
          overflow: "visible" // 允许光晕溢出
        }}
      >
        <defs>
          {/* 1. 能量流渐变 - 增强亮度 */}
          <linearGradient id="energy-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0" />
            <stop offset="50%" stopColor={colors.primaryGlow} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0" />
          </linearGradient>

          {/* 2. AI 核心光晕 */}
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.4" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </radialGradient>

          {/* 3. 玻璃质感 */}
          <linearGradient id="glass-surface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>

          {/* 4. 视频画面渐变 */}
          <linearGradient id="video-screen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e1065" />
            <stop offset="100%" stopColor="#831843" />
          </linearGradient>
          
          {/* 5. 标签背景 */}
          <linearGradient id="tag-bg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.2" />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.2" />
          </linearGradient>

          <filter id="blur-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="card-mask">
            <rect width="120" height="160" rx="8" />
          </clipPath>
        </defs>

        <style>
          {`
            /* Core Animations */
            @keyframes flow-move {
              0% { stroke-dashoffset: 200; opacity: 0.3; }
              50% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0.3; }
            }

            @keyframes particle-travel {
              0% { transform: translateX(0) scale(0.5); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateX(350px) scale(1); opacity: 0; }
            }

            @keyframes pulse-core {
              0%, 100% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.15); opacity: 0.8; }
            }

            @keyframes float-input {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }

            @keyframes reveal-video {
              0% { opacity: 0.6; filter: brightness(1); }
              50% { opacity: 1; filter: brightness(1.3); }
              100% { opacity: 0.6; filter: brightness(1); }
            }
            
            @keyframes rotate-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes fade-in-out {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.8; }
            }

            /* Style Classes */
            .wire { fill: none; stroke: #334155; stroke-width: 1.5; opacity: 0.4; }
            .active-stream { fill: none; stroke: url(#energy-flow); stroke-width: 3; stroke-dasharray: 100 100; animation: flow-move 2s linear infinite; }
            .label-title { fill: ${colors.text}; font-size: 13px; font-weight: 700; letter-spacing: 1px; text-anchor: middle; text-transform: uppercase; }
            .label-tag { fill: ${colors.primaryGlow}; font-size: 10px; font-weight: 600; letter-spacing: 0.5px; text-anchor: middle; }
            .glass-box { fill: url(#glass-surface); stroke: rgba(255,255,255,0.1); stroke-width: 1; }
            .bg-card { fill: ${colors.bg}; opacity: 0.8; }
          `}
        </style>

        {/* ==================== 1. LEFT: INPUT (Prompt) ==================== */}
        <g transform="translate(120, 130)">
          <text x="70" y="-90" className="label-title">{t("process.input")}</text>
          
          {/* Floating Cards Group */}
          <g style={{ animation: "float-input 5s ease-in-out infinite" }}>
            
            {/* Decorative Elements - Tags */}
            <g transform="translate(-30, -50)">
               <rect width="60" height="20" rx="10" fill="#1e293b" stroke={colors.primary} strokeWidth="1" opacity="0.8" />
               <text x="30" y="14" className="label-tag" fill={colors.primaryGlow}>{t("process.tag.local")}</text>
            </g>
            <g transform="translate(110, 40)">
               <rect width="60" height="20" rx="10" fill="#1e293b" stroke={colors.success} strokeWidth="1" opacity="0.8" />
               <text x="30" y="14" className="label-tag" fill={colors.success}>{t("process.tag.privacy")}</text>
            </g>

            {/* Back Layers */}
            <rect x="15" y="-75" width="110" height="150" rx="12" fill={colors.bg} opacity="0.4" stroke={colors.textMuted} strokeWidth="0.5" />
            <rect x="10" y="-70" width="120" height="140" rx="12" fill={colors.bg} opacity="0.6" stroke={colors.textMuted} strokeWidth="0.5" />
            
            {/* Main Card */}
            <g filter="url(#blur-glow)">
               <rect x="0" y="-65" width="140" height="130" rx="12" className="glass-box" fill="#0f172a" stroke={colors.primary} strokeOpacity="0.3" />
            </g>
            
            {/* Content inside card */}
            <g transform="translate(20, -45)">
              {/* Prompt Lines */}
              <rect width="30" height="6" rx="3" fill={colors.primary} opacity="0.9" />
              <rect y="16" width="90" height="6" rx="3" fill={colors.textMuted} opacity="0.4">
                 <animate attributeName="width" values="20;90;90;20" dur="4s" repeatCount="indefinite" />
              </rect>
              <rect y="32" width="70" height="6" rx="3" fill={colors.textMuted} opacity="0.4">
                 <animate attributeName="width" values="20;70;70;20" dur="4s" repeatCount="indefinite" begin="0.5s"/>
              </rect>
              <rect y="48" width="80" height="6" rx="3" fill={colors.textMuted} opacity="0.4">
                 <animate attributeName="width" values="20;80;80;20" dur="4s" repeatCount="indefinite" begin="1s"/>
              </rect>
              
              {/* Input Icon */}
              <g transform="translate(0, 85)">
                <circle cx="10" cy="0" r="14" fill="#334155" opacity="0.5" />
                <text x="10" y="4" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">Aa</text>
                
                {/* Image Icon */}
                <circle cx="45" cy="0" r="14" fill="#334155" opacity="0.5" />
                <rect x="39" y="-6" width="12" height="12" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" />
                <circle cx="47" cy="-3" r="1.5" fill="#fff" />
              </g>
            </g>
          </g>
          
          {/* Connection Dot Output */}
          <circle cx="140" cy="0" r="4" fill={colors.primary} filter="url(#strong-glow)" />
        </g>

        {/* ==================== 2. CENTER: AI ENGINE ==================== */}
        <g transform="translate(500, 130)">
          {/* Left Connection Wire */}
          <path d="M -230 0 L -80 0" className="wire" />
          <path d="M -230 0 L -80 0" className="active-stream" />
          
          {/* Right Connection Wire */}
          <path d="M 80 0 L 230 0" className="wire" />
          <path d="M 80 0 L 230 0" className="active-stream" style={{ animationDelay: "0.5s" }} />

          {/* Traveling Particles (Multiple) */}
          <g>
            <circle r="2" fill="#fff" filter="url(#strong-glow)">
              <animateMotion path="M -230 0 L -80 0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#fff" filter="url(#strong-glow)">
              <animateMotion path="M -230 0 L -80 0" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
            </circle>
          </g>
           <g>
            <circle r="2" fill="#fff" filter="url(#strong-glow)">
              <animateMotion path="M 80 0 L 230 0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#fff" filter="url(#strong-glow)">
              <animateMotion path="M 80 0 L 230 0" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Central Processing Core */}
          <g>
             {/* Outer Rings */}
             <circle r="70" stroke={colors.primary} strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="5 5">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
             </circle>
             <circle r="55" stroke={colors.secondary} strokeWidth="1" fill="none" opacity="0.2">
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="15s" repeatCount="indefinite" />
             </circle>
          
             {/* Glow Background */}
             <circle r="60" fill="url(#core-glow)" style={{ animation: "pulse-core 3s ease-in-out infinite" }} />
             
             {/* Core Diamond Geometry */}
             <g transform="rotate(45)">
               <rect x="-35" y="-35" width="70" height="70" rx="12" stroke={colors.primary} strokeWidth="2" fill="rgba(139, 92, 246, 0.1)" />
               <rect x="-25" y="-25" width="50" height="50" rx="8" stroke={colors.secondary} strokeWidth="2" fill="rgba(236, 72, 153, 0.1)">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
               </rect>
               {/* Inner Chip */}
               <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#fff" filter="url(#strong-glow)" />
             </g>
             
             {/* Top/Bottom Scanners */}
             <g>
               <line x1="-40" y1="-60" x2="40" y2="-60" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" opacity="0.6">
                  <animate attributeName="y1" values="-60;-45;-60" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="-60;-45;-60" dur="2s" repeatCount="indefinite" />
               </line>
                <line x1="-40" y1="60" x2="40" y2="60" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" opacity="0.6">
                  <animate attributeName="y1" values="60;45;60" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="60;45;60" dur="2s" repeatCount="indefinite" />
               </line>
             </g>
             
             {/* Labels */}
             <text x="0" y="95" className="label-title">{t("process.processing")}</text>
             
             {/* Floating Processing Tags */}
             <g transform="translate(60, -50)">
                <text x="0" y="0" className="label-tag" fill={colors.textMuted} style={{animation: "fade-in-out 3s infinite"}}>{t("process.tag.model")}</text>
             </g>
             <g transform="translate(-60, 50)">
                <text x="0" y="0" className="label-tag" fill={colors.textMuted} style={{animation: "fade-in-out 3s infinite 1.5s"}}>{t("process.tag.render")}</text>
             </g>
          </g>
        </g>

        {/* ==================== 3. RIGHT: OUTPUT (Video) ==================== */}
        <g transform="translate(850, 130)">
          <text x="0" y="-90" className="label-title">{t("process.output")}</text>
          
          {/* Video Player Container */}
          <g>
            {/* Shadow */}
            <ellipse cx="0" cy="85" rx="100" ry="10" fill="#000" opacity="0.4" filter="url(#blur-glow)" />
            
            {/* Player Frame */}
            <rect x="-110" y="-70" width="220" height="140" rx="16" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            
            {/* Screen Area */}
            <g transform="translate(-100, -60)">
              <rect width="200" height="110" rx="8" fill="#000" />
              
              {/* Dynamic Screen Content */}
              <g clipPath="inset(0 0 0 0 round 8px)">
                <rect width="200" height="110" fill="url(#video-screen)" style={{ animation: "reveal-video 4s ease-in-out infinite" }} />
                
                {/* Abstract Visuals */}
                <circle cx="100" cy="55" r="30" fill="#fff" opacity="0.1" filter="url(#blur-glow)" />
                <path d="M 0 90 Q 50 60 100 90 T 200 90 V 110 H 0 Z" fill="#fff" opacity="0.2">
                   <animate attributeName="d" values="M 0 90 Q 50 60 100 90 T 200 90 V 110 H 0 Z; M 0 90 Q 50 100 100 90 T 200 90 V 110 H 0 Z; M 0 90 Q 50 60 100 90 T 200 90 V 110 H 0 Z" dur="5s" repeatCount="indefinite" />
                </path>
                
                {/* Play Button Overlay */}
                <circle cx="100" cy="55" r="20" fill="rgba(0,0,0,0.3)" />
                <path d="M 95 45 L 110 55 L 95 65 Z" fill="#fff" />
              </g>
              
              {/* Progress Bar UI */}
              <g transform="translate(0, 120)">
                 <rect x="10" y="0" width="180" height="4" rx="2" fill="#334155" />
                 <rect x="10" y="0" width="120" height="4" rx="2" fill={colors.secondary}>
                   <animate attributeName="width" values="10;180" dur="4s" repeatCount="indefinite" />
                 </rect>
                 
                 {/* Controls */}
                 <circle cx="15" cy="-10" r="2" fill="#94a3b8" />
                 <rect x="22" y="-11" width="2" height="2" fill="#94a3b8" />
                 <rect x="26" y="-11" width="2" height="2" fill="#94a3b8" />
              </g>
            </g>
            
            {/* Output Tags */}
             <g transform="translate(90, -50)">
               <rect x="-20" y="-10" width="50" height="18" rx="9" fill={colors.primary} opacity="0.9" />
               <text x="5" y="2" className="label-tag" fill="#fff" fontSize="9">{t("process.tag.4k")}</text>
            </g>
            <g transform="translate(90, -25)">
               <rect x="-20" y="-10" width="50" height="18" rx="9" fill="#334155" opacity="0.9" />
               <text x="5" y="2" className="label-tag" fill="#fff" fontSize="9">{t("process.tag.fps")}</text>
            </g>

          </g>
          
          {/* Input Connection Dot */}
          <circle cx="-110" cy="0" r="4" fill={colors.secondary} filter="url(#strong-glow)" />
        </g>
      </svg>
    </div>
  );
};

"use client";

import React from 'react';

// 模拟视频编辑时间轴动画
export const VideoTimelineAnim = ({ className }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 400 60" 
      className={className} 
      style={{ width: '100%', height: 'auto', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 背景轨道 */}
      <rect x="0" y="20" width="400" height="20" rx="4" fill="rgba(255,255,255,0.05)" />
      
      {/* 已生成片段 1 */}
      <rect x="10" y="22" width="80" height="16" rx="2" fill="var(--ui2v-primary)" opacity="0.6">
        <animate attributeName="width" values="80;120;80" dur="4s" repeatCount="indefinite" />
      </rect>
      
      {/* 已生成片段 2 */}
      <rect x="100" y="22" width="60" height="16" rx="2" fill="var(--ui2v-accent)" opacity="0.6">
        <animate attributeName="x" values="100;140;100" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* 正在生成的光标/播放头 */}
      <g>
        <line x1="180" y1="10" x2="180" y2="50" stroke="#fff" strokeWidth="2">
           <animate attributeName="x1" values="180;380;180" dur="6s" repeatCount="indefinite" />
           <animate attributeName="x2" values="180;380;180" dur="6s" repeatCount="indefinite" />
        </line>
        <path d="M175 10 L185 10 L180 18 Z" fill="#fff">
           <animate attributeName="d" values="M175 10 L185 10 L180 18 Z; M375 10 L385 10 L380 18 Z; M175 10 L185 10 L180 18 Z" dur="6s" repeatCount="indefinite" />
        </path>
      </g>

      {/* 生成中的波形效果 */}
      <path d="M180 30 Q 200 10 220 30 T 260 30" fill="none" stroke="var(--ui2v-accent-light)" strokeWidth="2" strokeDasharray="4 4">
         <animate attributeName="d" values="M180 30 Q 200 10 220 30 T 260 30; M380 30 Q 400 10 420 30 T 460 30; M180 30 Q 200 10 220 30 T 260 30" dur="6s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite" />
      </path>
    </svg>
  );
};

// 扫描覆盖动画
export const ScanningOverlay = ({ className }: { className?: string }) => {
  const id = React.useId();
  return (
    <div className={className} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 10
    }}>
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`scan-grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--ui2v-primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--ui2v-accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--ui2v-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="-20%" width="100%" height="20%" fill={`url(#scan-grad-${id})`}>
          <animate attributeName="y" from="-20%" to="120%" dur="4s" repeatCount="indefinite" />
        </rect>
        <line x1="0" y1="0" x2="100%" y2="0" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.5">
          <animate attributeName="y1" from="-20%" to="120%" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" from="-20%" to="120%" dur="4s" repeatCount="indefinite" />
        </line></svg>
      </div>
  
  );
};

// 层级堆叠动画
export const LayersAnim = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(100, 80)">
           {/* Layer 1 */}
           <path d="M-60 0 L0 30 L60 0 L0 -30 Z" fill="var(--ui2v-primary)" opacity="0.2">
             <animateTransform attributeName="transform" type="translate" values="0 0; 0 -10; 0 0" dur="4s" repeatCount="indefinite" />
           </path>
           {/* Layer 2 */}
           <path d="M-60 -20 L0 10 L60 -20 L0 -50 Z" fill="var(--ui2v-accent)" opacity="0.3">
             <animateTransform attributeName="transform" type="translate" values="0 0; 0 -15; 0 0" dur="4s" begin="0.5s" repeatCount="indefinite" />
           </path>
           {/* Layer 3 */}
           <path d="M-60 -40 L0 -10 L60 -40 L0 -70 Z" fill="white" opacity="0.4">
             <animateTransform attributeName="transform" type="translate" values="0 0; 0 -20; 0 0" dur="4s" begin="1s" repeatCount="indefinite" />
           </path>
        </g>
      </svg>
    </div>
  );
};

// 引擎核心动画
export const EnginesAnim = () => {
  const id = React.useId();
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <defs>
          <linearGradient id={`engine-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--ui2v-primary)" />
            <stop offset="100%" stopColor="var(--ui2v-accent)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="30" stroke={`url(#engine-grad-${id})`} strokeWidth="2" fill="none" strokeDasharray="10 5">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="20" fill={`url(#engine-grad-${id})`} opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M50 35 L50 65 M35 50 L65 50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    </div>
  );
};

// 连接/供应商动画
export const ProvidersAnim = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox="0 0 200 100">
        {/* Central Node */}
        <circle cx="100" cy="50" r="10" fill="var(--ui2v-primary)" opacity="0.8" />
        
        {/* Satellite Nodes */}
        <g>
          <circle cx="40" cy="30" r="6" fill="var(--ui2v-accent)" opacity="0.6" />
          <line x1="100" y1="50" x2="40" y2="30" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.3" strokeDasharray="5 5">
            <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
          </line>
        </g>
        <g>
          <circle cx="160" cy="30" r="6" fill="var(--ui2v-accent)" opacity="0.6" />
          <line x1="100" y1="50" x2="160" y2="30" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.3" strokeDasharray="5 5">
             <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" begin="0.3s" repeatCount="indefinite" />
          </line>
        </g>
        <g>
          <circle cx="70" cy="80" r="6" fill="var(--ui2v-accent)" opacity="0.6" />
          <line x1="100" y1="50" x2="70" y2="80" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.3" strokeDasharray="5 5">
             <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" begin="0.6s" repeatCount="indefinite" />
          </line>
        </g>
         <g>
          <circle cx="130" cy="80" r="6" fill="var(--ui2v-accent)" opacity="0.6" />
          <line x1="100" y1="50" x2="130" y2="80" stroke="var(--ui2v-accent)" strokeWidth="1" opacity="0.3" strokeDasharray="5 5">
             <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" begin="0.9s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>
    </div>
  );
};

// 全局鼠标光斑/浮动球
export const GlobalAmbientBg = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -10,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      {/* 顶部主光斑 */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '80vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        opacity: 0.6
      }} />
      
      {/* 浮动光斑 1 */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        opacity: 0.5,
        animation: 'floatBg 20s ease-in-out infinite'
      }} />

      {/* 浮动光斑 2 */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        opacity: 0.4,
        animation: 'floatBg 25s ease-in-out infinite reverse'
      }} />

      <style jsx>{`
        @keyframes floatBg {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </div>
  );
};

// 高级引导下载动画
export const DownloadGuideAnim = ({ className }: { className?: string }) => {
  const id = React.useId();
  return (
    <div className={className} style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={`dl-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--ui2v-primary)" />
            <stop offset="100%" stopColor="var(--ui2v-accent)" />
          </linearGradient>
          <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id={`track-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* 底部托盘/平台 - 极简线条 */}
        <path d="M100 60 L300 60" stroke={`url(#track-grad-${id})`} strokeWidth="1" />
        
        {/* 引导箭头/光束 */}
        <g transform="translate(200, 30)">
           <path d="M0 -20 L0 20" stroke={`url(#dl-grad-${id})`} strokeWidth="2" strokeLinecap="round">
             <animate attributeName="d" values="M0 -20 L0 20; M0 -10 L0 30; M0 -20 L0 20" dur="2s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
           </path>
           <path d="M-10 10 L0 20 L10 10" stroke={`url(#dl-grad-${id})`} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <animate attributeName="transform" type="translate" values="0 -10; 0 10; 0 -10" dur="2s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
           </path>
        </g>

        {/* 能量波纹扩散 */}
        <g transform="translate(200, 60)">
           <ellipse cx="0" cy="0" rx="10" ry="3" fill="none" stroke={`url(#dl-grad-${id})`} strokeWidth="1">
             <animate attributeName="rx" values="0;80;100" dur="2s" repeatCount="indefinite" />
             <animate attributeName="ry" values="0;10;12" dur="2s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.5;0" dur="2s" repeatCount="indefinite" />
           </ellipse>
           <ellipse cx="0" cy="0" rx="10" ry="3" fill="none" stroke={`url(#dl-grad-${id})`} strokeWidth="1">
             <animate attributeName="rx" values="0;80;100" dur="2s" begin="0.5s" repeatCount="indefinite" />
             <animate attributeName="ry" values="0;10;12" dur="2s" begin="0.5s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.5;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
           </ellipse>
        </g>

        {/* 文字提示 (可选，增加引导性) */}
        <text x="200" y="75" textAnchor="middle" fill="var(--ui2v-primary)" fontSize="10" fontFamily="sans-serif" opacity="0.8" style={{ letterSpacing: '2px' }}>
           CLICK TO DOWNLOAD
           <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
        </text>
      </svg>
    </div>
  );
};

// 底部装饰背景
export const FooterDecorBg = () => {
  const id = React.useId();
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      opacity: 0.15,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`footer-grad-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--ui2v-primary)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--ui2v-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--ui2v-primary)" stopOpacity="0" />
          </linearGradient>
          <pattern id={`footer-grid-${id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--ui2v-accent)" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        
        {/* 背景网格 */}
        <rect width="100%" height="100%" fill={`url(#footer-grid-${id})`} opacity="0.5" />
        
        {/* 底部光晕 */}
        <path d="M0 100 L100% 100 L100% 50 Q 50% 20 0 50 Z" fill={`url(#footer-grad-${id})`} />
        
        {/* 浮动粒子 */}
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={`${10 + i * 12}%`} cy="90%" r={Math.random() * 2 + 1} fill="var(--ui2v-accent)">
            <animate attributeName="cy" values="90%;40%;90%" dur={`${4 + i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.8;0" dur={`${4 + i}s`} repeatCount="indefinite" />
            <animate attributeName="r" values="1;3;1" dur={`${4 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        
        {/* 连接线 */}
         <path d="M0 95 Q 25% 85 50% 95 T 100% 95" fill="none" stroke="var(--ui2v-primary)" strokeWidth="1" opacity="0.3">
            <animate attributeName="d" values="M0 95 Q 25% 85 50% 95 T 100% 95; M0 95 Q 25% 105 50% 95 T 100% 95; M0 95 Q 25% 85 50% 95 T 100% 95" dur="10s" repeatCount="indefinite" />
         </path>
      </svg>
    </div>
  );
};

// 能量流动背景
export const EnergyFlowBg = () => {
  const id = React.useId();
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: 0.3,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
             <path 
               d={`M-200 ${50 + i * 150} Q 50% ${-50 + i * 150} 120% ${150 + i * 150}`}
               fill="none" 
               stroke="var(--ui2v-primary)" 
               strokeWidth="1"
               opacity="0.2"
             />
             <circle r="3" fill="var(--ui2v-accent)">
               <animateMotion 
                 path={`M-200 ${50 + i * 150} Q 50% ${-50 + i * 150} 120% ${150 + i * 150}`}
                 dur={`${4 + i}s`}
                 repeatCount="indefinite"
                 begin={`${i * 0.5}s`}
               />
               <animate attributeName="opacity" values="0;1;0" dur={`${4 + i}s`} repeatCount="indefinite" begin={`${i * 0.5}s`} />
               <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
             </circle>
          </g>
        ))}
      </svg>
    </div>
  );
};

// 音频波形动画
export const WaveformAnim = ({ className }: { className?: string }) => {
  const id = React.useId();
  return (
    <svg 
      viewBox="0 0 100 60" 
      className={className} 
      style={{ width: '100%', height: '100%', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`wave-gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ui2v-primary)" />
          <stop offset="100%" stopColor="var(--ui2v-accent)" />
        </linearGradient>
      </defs>
      {[...Array(10)].map((_, i) => (
        <rect 
          key={i} 
          x={10 + i * 8} 
          y="30" 
          width="4" 
          height="20" 
          rx="2" 
          fill={`url(#wave-gradient-${id})`}
          transform={`rotate(180 ${12 + i * 8} 30)`}
        >
          <animate 
            attributeName="height" 
            values="10;40;10;25;10" 
            dur={`${1.5 + i * 0.1}s`} 
            repeatCount="indefinite" 
            begin={`${i * 0.1}s`}
          />
        </rect>
      ))}
    </svg>
  );
};

// 神经网络网格动画
export const NeuralNetworkGrid = ({ className }: { className?: string }) => {
  const id = React.useId();
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      style={{ width: '100%', height: '100%', opacity: 0.6, pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`grid-${id}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="var(--ui2v-primary)" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
      
      {/* 活跃连接 */}
      <path d="M42 42 L82 122 L162 82" fill="none" stroke="var(--ui2v-accent)" strokeWidth="1" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M162 82 L122 162 L42 122" fill="none" stroke="var(--ui2v-primary)" strokeWidth="1" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;1;0.2" dur="4s" repeatCount="indefinite" />
      </path>

      {/* 脉冲节点 */}
      <circle cx="82" cy="122" r="3" fill="var(--ui2v-accent)">
        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

// 渲染进度动画
export const RenderingAnim = ({ className }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 200 100" 
      className={className} 
      style={{ width: '100%', height: '100%', opacity: 0.7 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 进度条背景 */}
      <rect x="20" y="45" width="160" height="10" rx="5" fill="rgba(255,255,255,0.1)" />
      
      {/* 进度条填充 */}
      <rect x="20" y="45" width="0" height="10" rx="5" fill="var(--ui2v-primary)">
        <animate attributeName="width" values="0;160" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" />
      </rect>
      
      {/* 扫描线 */}
      <line x1="100" y1="20" x2="100" y2="80" stroke="var(--ui2v-accent)" strokeWidth="2" opacity="0">
        <animate attributeName="x1" values="20;180" dur="3s" repeatCount="indefinite" />
        <animate attributeName="x2" values="20;180" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </line>
      
      {/* 完成百分比文本效果 - 简化的视觉表示 */}
      <rect x="140" y="25" width="40" height="14" rx="2" fill="rgba(255,255,255,0.1)">
         <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
};

// 电路板背景
export const CircuitBoardBg = () => {
  const id = React.useId();
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: 0.05,
      pointerEvents: 'none',
      overflow: 'hidden',
      color: 'var(--ui2v-primary)'
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id={`circuit-${id}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 H 30 V 30 H 50" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
          <path d="M60 60 V 80 H 90" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="60" r="2" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#circuit-${id})`} />
      </svg>
    </div>
  );
};

// 模拟AI处理节点连接
export const AiProcessingNodes = ({ className }: { className?: string }) => {
  const id = React.useId();
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      style={{ width: '200px', height: '200px', opacity: 0.4, pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={`glow-${id}`}>
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* 节点连接线 */}
      <path d="M50 50 L150 50 L150 150 L50 150 Z" fill="none" stroke="var(--ui2v-primary)" strokeWidth="1" opacity="0.3" />
      <path d="M50 50 L150 150" fill="none" stroke="var(--ui2v-primary)" strokeWidth="1" opacity="0.3" />
      <path d="M150 50 L50 150" fill="none" stroke="var(--ui2v-primary)" strokeWidth="1" opacity="0.3" />

      {/* 浮动节点 */}
      <circle cx="50" cy="50" r="4" fill="var(--ui2v-accent)">
        <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="50" r="4" fill="var(--ui2v-primary)">
        <animate attributeName="r" values="4;6;4" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="150" r="4" fill="var(--ui2v-accent)">
        <animate attributeName="r" values="4;6;4" dur="3s" begin="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="150" r="4" fill="var(--ui2v-primary)">
        <animate attributeName="r" values="4;6;4" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* 数据流动的点 */}
      <circle r="3" fill="#fff">
        <animateMotion path="M50 50 L150 50 L150 150 L50 150 Z" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

// 胶片滚动背景
export const FilmStripBg = () => {
  const id = React.useId();
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      opacity: 0.05,
      pointerEvents: 'none',
      maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
      color: 'var(--ui2v-primary)'
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id={`filmstrip-${id}`} x="0" y="0" width="100" height="120" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="80" height="100" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="5" y="15" width="4" height="6" fill="currentColor" />
          <rect x="5" y="25" width="4" height="6" fill="currentColor" />
          <rect x="5" y="35" width="4" height="6" fill="currentColor" />
          <rect x="5" y="45" width="4" height="6" fill="currentColor" />
          <rect x="91" y="15" width="4" height="6" fill="currentColor" />
          <rect x="91" y="25" width="4" height="6" fill="currentColor" />
          <rect x="91" y="35" width="4" height="6" fill="currentColor" />
          <rect x="91" y="45" width="4" height="6" fill="currentColor" />
        </pattern>
        <rect x="0" y="0" width="100%" height="200%" fill={`url(#filmstrip-${id})`} style={{
           transform: 'rotate(-10deg) scale(1.5)',
           transformOrigin: 'center'
        }}>
          <animateTransform 
            attributeName="transform" 
            type="translate" 
            from="0 0" 
            to="0 -120" 
            dur="10s" 
            repeatCount="indefinite" 
            additive="sum"
          />
        </rect>
      </svg>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";

export function BackgroundDecorations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Top Right Abstract Shape (UI representation) */}
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          opacity: 0.03,
          transform: "rotate(15deg)",
        }}
      >
        <rect x="100" y="100" width="400" height="300" rx="20" stroke="currentColor" strokeWidth="2" />
        <rect x="130" y="140" width="340" height="40" rx="8" fill="currentColor" />
        <rect x="130" y="200" width="160" height="160" rx="8" stroke="currentColor" strokeWidth="2" />
        <rect x="310" y="200" width="160" height="20" rx="4" fill="currentColor" />
        <rect x="310" y="230" width="100" height="20" rx="4" fill="currentColor" />
        <circle cx="50" cy="500" r="20" fill="currentColor" />
        <circle cx="550" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Bottom Left Timeline/Sequencer Animation (Editor representation) */}
      <svg
        width="800"
        height="600"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          opacity: 0.04,
          transform: "rotate(-5deg)",
        }}
      >
        <defs>
          <linearGradient id="track-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Timeline Tracks */}
        <g transform="translate(50, 100)">
          {/* Track 1 */}
          <rect x="0" y="0" width="700" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
          <rect x="50" y="10" width="150" height="40" rx="4" fill="currentColor" fillOpacity="0.2">
             <animate attributeName="width" values="150;180;150" dur="8s" repeatCount="indefinite" />
          </rect>
          <rect x="250" y="10" width="200" height="40" rx="4" fill="currentColor" fillOpacity="0.15" />
          
          {/* Track 2 */}
          <rect x="0" y="80" width="700" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
          <rect x="100" y="90" width="300" height="40" rx="4" fill="currentColor" fillOpacity="0.2" />
          <rect x="450" y="90" width="100" height="40" rx="4" fill="currentColor" fillOpacity="0.15" />

          {/* Track 3 */}
          <rect x="0" y="160" width="700" height="60" rx="8" fill="currentColor" fillOpacity="0.05" />
          <rect x="0" y="170" width="700" height="40" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
           {/* Keyframes */}
           <circle cx="100" cy="190" r="4" fill="currentColor" fillOpacity="0.4" />
           <circle cx="300" cy="190" r="4" fill="currentColor" fillOpacity="0.4" />
           <circle cx="500" cy="190" r="4" fill="currentColor" fillOpacity="0.4" />
        </g>

        {/* Playhead Scanning Line */}
        <line x1="200" y1="50" x2="200" y2="400" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4">
           <animate attributeName="x1" values="50;750" dur="10s" repeatCount="indefinite" />
           <animate attributeName="x2" values="50;750" dur="10s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="0.2;0.6;0.2" dur="10s" repeatCount="indefinite" />
        </line>

        {/* Time Indicator */}
        <rect x="180" y="40" width="40" height="20" rx="4" fill="currentColor" fillOpacity="0.3">
           <animate attributeName="x" values="30;730" dur="10s" repeatCount="indefinite" />
        </rect>
      </svg>

      {/* Animated Connection Lines (Node-like) */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--brand-accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 200 Q 400 300 800 100 T 1600 400"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          style={{ opacity: 0.3 }}
        />
        <path
          d="M0 600 Q 500 500 1000 700 T 2000 400"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          style={{ opacity: 0.2 }}
        />
      </svg>
    </div>
  );
}

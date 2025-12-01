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

      {/* Bottom Left Abstract Shape (Video/Play representation) */}
      <svg
        width="700"
        height="700"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          opacity: 0.03,
          transform: "rotate(-10deg)",
        }}
      >
        <circle cx="350" cy="350" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
        <path d="M300 250L450 350L300 450V250Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="100" y="300" width="50" height="50" rx="10" fill="currentColor" />
        <rect x="550" y="300" width="50" height="50" rx="10" fill="currentColor" />
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

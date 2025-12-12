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


    </div>
  );
}

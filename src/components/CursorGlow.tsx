"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
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
      {/* 光标跟随的光晕 */}
      <div
        suppressHydrationWarning
        style={{
          position: "absolute",
          left: mousePosition.x,
          top: mousePosition.y,
          width: "1200px",
          height: "1200px",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 30%, transparent 70%)",
          filter: "blur(100px)",
          transition: "left 0.15s cubic-bezier(0.23, 1, 0.32, 1), top 0.15s cubic-bezier(0.23, 1, 0.32, 1)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}


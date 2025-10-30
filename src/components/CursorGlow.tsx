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
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.02) 0%, rgba(236, 72, 153, 0.01) 25%, transparent 50%)",
          filter: "blur(150px)",
          backdropFilter: "blur(40px) saturate(150%)",
          WebkitBackdropFilter: "blur(40px) saturate(150%)",
          transition: "left 0.25s ease-out, top 0.25s ease-out",
          opacity: 0.3,
        }}
      />
    </div>
  );
}


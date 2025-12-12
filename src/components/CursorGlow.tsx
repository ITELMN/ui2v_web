"use client";

import React, { useEffect, useState } from 'react';

interface CursorGlowProps {
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
}

/**
 * Global cursor-following glow effect
 */
export const CursorGlow: React.FC<CursorGlowProps> = ({
  color = 'rgba(139, 92, 246, 0.3)',
  size = 400,
  blur = 100,
  opacity = 0.6,
}) => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? opacity : 0 }}
    >
      <div
        className="absolute rounded-full transition-transform duration-100 ease-out"
        style={{
          width: size,
          height: size,
          left: position.x - size / 2,
          top: position.y - size / 2,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
};

export default CursorGlow;

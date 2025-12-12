"use client";

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
  glowIntensity?: number;
  scale?: number;
}

/**
 * 3D Tilt Card with mouse-following glow effect
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  glowColor = 'rgba(139, 92, 246, 0.4)',
  tiltIntensity = 8,
  glowIntensity = 0.15,
  scale = 1.02,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const rotateX = (y - 0.5) * tiltIntensity * -1;
      const rotateY = (x - 0.5) * tiltIntensity;
      
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
      setGlowPosition({ x: x * 100, y: y * 100 });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setTransform('');
      setGlowPosition({ x: 50, y: 50 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [tiltIntensity, scale]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden transition-transform duration-200 ease-out',
        className
      )}
      style={{
        transform: isHovering ? transform : '',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 40%)`,
          opacity: isHovering ? glowIntensity : 0,
        }}
      />
      
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`,
          opacity: isHovering ? 0.5 : 0,
          filter: 'blur(20px)',
        }}
      />
      
      {children}
    </div>
  );
};

export default TiltCard;

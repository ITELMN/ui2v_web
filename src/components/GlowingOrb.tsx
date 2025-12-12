"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingOrbProps {
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
  animate?: boolean;
  pulseSpeed?: number;
}

/**
 * Animated glowing orb for background decoration
 */
export const GlowingOrb: React.FC<GlowingOrbProps> = ({
  className,
  color = 'rgba(139, 92, 246, 0.4)',
  size = 400,
  blur = 100,
  animate = true,
  pulseSpeed = 4,
}) => {
  return (
    <div
      className={cn(
        'absolute rounded-full pointer-events-none',
        animate && 'animate-pulse-slow',
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        animationDuration: `${pulseSpeed}s`,
      }}
    />
  );
};

/**
 * Floating particles background
 */
interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 20,
  className,
}) => {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const particles = React.useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [count, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary-400"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default GlowingOrb;

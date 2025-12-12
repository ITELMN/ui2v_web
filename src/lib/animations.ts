/**
 * Enhanced Animation utilities for viewport-based animations
 * Includes scroll animations, stagger effects, and mouse interactions
 */

import { useEffect, useRef, useState, useCallback } from 'react';

export type AnimationType = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'blur';

/**
 * Hook to detect when an element is in viewport
 */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}

/**
 * Hook for scroll-based parallax effect
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}

/**
 * Hook for mouse position tracking (for glow effects)
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

/**
 * Hook for element-relative mouse position (for card tilt effects)
 */
export function useRelativeMousePosition<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setPosition({ x: 0.5, y: 0.5 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { ref, position, isHovering };
}

/**
 * Hook for staggered animations
 */
export function useStaggerAnimation(itemCount: number, baseDelay: number = 100) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the visibility of each item
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * baseDelay);
          }
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [itemCount, baseDelay]);

  return { containerRef, visibleItems };
}

/**
 * Get animation classes based on animation type and visibility
 */
export function getAnimationClasses(animation: AnimationType, isInView: boolean): string {
  const baseClasses = 'transition-all duration-700 ease-out';
  
  if (isInView) {
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100 blur-0`;
  }

  switch (animation) {
    case 'fadeIn':
      return `${baseClasses} opacity-0`;
    case 'slideUp':
      return `${baseClasses} opacity-0 translate-y-12`;
    case 'slideDown':
      return `${baseClasses} opacity-0 -translate-y-12`;
    case 'slideLeft':
      return `${baseClasses} opacity-0 translate-x-12`;
    case 'slideRight':
      return `${baseClasses} opacity-0 -translate-x-12`;
    case 'scale':
      return `${baseClasses} opacity-0 scale-90`;
    case 'blur':
      return `${baseClasses} opacity-0 blur-sm`;
    default:
      return `${baseClasses} opacity-0`;
  }
}

/**
 * Calculate 3D tilt transform based on mouse position
 */
export function getTiltTransform(x: number, y: number, intensity: number = 10): string {
  const rotateX = (y - 0.5) * intensity * -1;
  const rotateY = (x - 0.5) * intensity;
  return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

/**
 * Calculate glow position based on mouse position
 */
export function getGlowPosition(x: number, y: number): string {
  return `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(139, 92, 246, 0.15), transparent 40%)`;
}

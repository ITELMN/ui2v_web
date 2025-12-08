/**
 * Animation utilities for viewport-based entrance animations
 * Supports prefers-reduced-motion and provides GPU-accelerated animations
 * Validates: Requirements 8.1, 8.3, 8.4, 8.5
 */

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element enters the viewport
 * Respects prefers-reduced-motion setting
 * 
 * @param options - IntersectionObserver options
 * @returns ref to attach to element and isInView state
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // If reduced motion is preferred, show immediately
    if (prefersReducedMotion) {
      setIsInView(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, options]);

  return { ref, isInView };
}

/**
 * Animation variants for entrance animations
 * All animations use only transform and opacity for GPU acceleration
 */
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  slideUp: {
    initial: { opacity: 0, transform: 'translateY(20px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  slideDown: {
    initial: { opacity: 0, transform: 'translateY(-20px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  slideLeft: {
    initial: { opacity: 0, transform: 'translateX(20px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  slideRight: {
    initial: { opacity: 0, transform: 'translateX(-20px)' },
    animate: { opacity: 1, transform: 'translateX(0)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  scale: {
    initial: { opacity: 0, transform: 'scale(0.95)' },
    animate: { opacity: 1, transform: 'scale(1)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  stagger: {
    initial: { opacity: 0, transform: 'translateY(20px)' },
    animate: { opacity: 1, transform: 'translateY(0)' },
    transition: (index: number) => ({
      duration: 0.5,
      ease: 'easeOut',
      delay: index * 0.1,
    }),
  },
} as const;

/**
 * Get animation classes based on variant and state
 * Returns CSS classes for Tailwind animations
 * 
 * @param variant - Animation variant name
 * @param isInView - Whether element is in viewport
 * @returns CSS class string
 */
export function getAnimationClasses(
  variant: keyof typeof animationVariants,
  isInView: boolean
): string {
  if (!isInView) {
    return 'opacity-0';
  }

  const animationMap: Record<keyof typeof animationVariants, string> = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scale: 'animate-scale',
    stagger: 'animate-slide-up',
  };

  return animationMap[variant] || 'animate-fade-in';
}

/**
 * Check if user prefers reduced motion
 * @returns boolean indicating reduced motion preference
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get safe animation duration based on reduced motion preference
 * @param normalDuration - Normal animation duration in ms
 * @returns Safe duration (0 if reduced motion preferred)
 */
export function getSafeAnimationDuration(normalDuration: number): number {
  return prefersReducedMotion() ? 0 : normalDuration;
}

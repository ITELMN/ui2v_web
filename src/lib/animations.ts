/**
 * Animation utilities for viewport-based animations
 */

import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';

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
 * Get animation classes based on animation type and visibility
 */
export function getAnimationClasses(animation: AnimationType, isInView: boolean): string {
  const baseClasses = 'transition-all duration-700 ease-out';
  
  if (isInView) {
    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
  }

  switch (animation) {
    case 'fadeIn':
      return `${baseClasses} opacity-0`;
    case 'slideUp':
      return `${baseClasses} opacity-0 translate-y-8`;
    case 'slideDown':
      return `${baseClasses} opacity-0 -translate-y-8`;
    case 'slideLeft':
      return `${baseClasses} opacity-0 translate-x-8`;
    case 'slideRight':
      return `${baseClasses} opacity-0 -translate-x-8`;
    case 'scale':
      return `${baseClasses} opacity-0 scale-95`;
    default:
      return `${baseClasses} opacity-0`;
  }
}

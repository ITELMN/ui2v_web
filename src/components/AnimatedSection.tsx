/**
 * AnimatedSection component with viewport-based entrance animations
 * Automatically animates children when they enter the viewport
 * Validates: Requirements 8.1, 8.5
 */

'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView, getAnimationClasses } from '@/lib/animations';

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
}

/**
 * AnimatedSection component that triggers animations on viewport entry
 * Uses IntersectionObserver for performance
 * Respects prefers-reduced-motion setting
 */
export const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ 
    children, 
    animation = 'fadeIn', 
    delay = 0, 
    className,
    as: Component = 'div',
    ...props 
  }, forwardedRef) => {
    const { ref, isInView } = useInView<HTMLDivElement>();

    // Merge refs
    React.useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

    const animationClasses = getAnimationClasses(animation, isInView);
    
    return (
      <Component
        ref={ref}
        className={cn(
          'transition-all',
          animationClasses,
          className
        )}
        style={{
          animationDelay: delay ? `${delay}ms` : undefined,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

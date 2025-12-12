"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

/**
 * Scroll-triggered reveal animation component
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = 40,
  once = true,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'scale': return 'scale(0.9)';
      case 'fade': return 'none';
      default: return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Staggered children reveal animation
 */
interface StaggerRevealProps {
  children: React.ReactNode[];
  className?: string;
  childClassName?: string;
  direction?: AnimationDirection;
  staggerDelay?: number;
  duration?: number;
  distance?: number;
}

export const StaggerReveal: React.FC<StaggerRevealProps> = ({
  children,
  className,
  childClassName,
  direction = 'up',
  staggerDelay = 100,
  duration = 600,
  distance = 30,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [children.length, staggerDelay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'scale': return 'scale(0.9)';
      case 'fade': return 'none';
      default: return `translateY(${distance}px)`;
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={childClassName}
          style={{
            opacity: visibleItems[index] ? 1 : 0,
            transform: visibleItems[index] ? 'none' : getInitialTransform(),
            transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
            willChange: 'opacity, transform',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollReveal;

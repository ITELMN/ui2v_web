import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
  children: React.ReactNode;
}

/**
 * Card component with multiple variants and optional hover effects
 * Supports default, glass, and bordered variants
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = false, className, children, ...props }, ref) => {
    const baseClasses = 'rounded-2xl';
    
    const variantClasses = {
      default: 'bg-white/[0.02] backdrop-blur-sm',
      glass: 'bg-white/[0.05] backdrop-blur-md border border-white/10',
      bordered: 'bg-white/[0.02] border border-white/5',
    };
    
    const hoverClasses = hover
      ? 'transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/30 hover:bg-white/[0.04]'
      : '';
    
    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          hoverClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

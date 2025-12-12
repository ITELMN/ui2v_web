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
    const baseClasses = cn(
      'rounded-2xl',
      'relative overflow-hidden'
    );
    
    const variantClasses = {
      default: cn(
        'bg-white/[0.02] backdrop-blur-sm',
        'border border-white/5'
      ),
      glass: cn(
        'bg-white/[0.05] backdrop-blur-md',
        'border border-white/10',
        'shadow-lg'
      ),
      bordered: cn(
        'bg-white/[0.02]',
        'border border-white/5',
        'shadow-md'
      ),
    };
    
    const hoverClasses = hover
      ? cn(
          'transition-all duration-500',
          'hover:-translate-y-2',
          'hover:border-primary-500/30',
          'hover:bg-white/[0.04]',
          'hover:shadow-xl hover:shadow-primary-500/20',
          'cursor-pointer',
          'group'
        )
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
        {/* Gradient overlay on hover */}
        {hover && (
          <div className={cn(
            'absolute inset-0',
            'bg-gradient-to-br from-primary-500/0 via-primary-500/5 to-primary-500/0',
            'opacity-0 group-hover:opacity-100',
            'transition-opacity duration-500',
            'pointer-events-none'
          )} />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'success';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Badge component with variants and optional icon support
 * Displays inline badges with consistent styling
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', icon, className, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center gap-2',
      'px-3 py-1.5 rounded-full',
      'text-sm font-semibold',
      'transition-all duration-300',
      'hover:scale-105',
      'relative overflow-hidden'
    );
    
    const variantClasses = {
      default: cn(
        'bg-primary-500/10 text-primary-300',
        'border border-primary-500/20',
        'hover:bg-primary-500/20 hover:border-primary-500/30',
        'shadow-sm shadow-primary-500/10'
      ),
      accent: cn(
        'bg-accent-500/10 text-accent-300',
        'border border-accent-500/20',
        'hover:bg-accent-500/20 hover:border-accent-500/30',
        'shadow-sm shadow-accent-500/10'
      ),
      success: cn(
        'bg-green-500/10 text-green-300',
        'border border-green-500/20',
        'hover:bg-green-500/20 hover:border-green-500/30',
        'shadow-sm shadow-green-500/10'
      ),
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {/* Shimmer effect */}
        <div className={cn(
          'absolute inset-0',
          'bg-gradient-to-r from-transparent via-white/10 to-transparent',
          'translate-x-[-100%] hover:translate-x-[100%]',
          'transition-transform duration-1000',
          'pointer-events-none'
        )} />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {icon && <span className="flex items-center">{icon}</span>}
          {children}
        </span>
      </div>
    );
  }
);

Badge.displayName = 'Badge';

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
    const baseClasses = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold';
    
    const variantClasses = {
      default: 'bg-primary-500/10 text-primary-300 border border-primary-500/20',
      accent: 'bg-accent-500/10 text-accent-300 border border-accent-500/20',
      success: 'bg-green-500/10 text-green-300 border border-green-500/20',
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
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

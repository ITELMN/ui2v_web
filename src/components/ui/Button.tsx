import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Button component with multiple variants and sizes
 * Supports primary, secondary, and ghost variants with hover effects
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-semibold rounded-lg',
      'transition-all duration-300',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
      'relative overflow-hidden'
    );
    
    const variantClasses = {
      primary: cn(
        'bg-gradient-to-r from-primary-400 to-primary-600',
        'hover:from-primary-500 hover:to-primary-700',
        'text-white font-bold',
        'shadow-lg shadow-primary-500/20',
        'hover:shadow-xl hover:shadow-primary-500/40',
        'hover:scale-105',
        'before:absolute before:inset-0',
        'before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0',
        'before:translate-x-[-100%] hover:before:translate-x-[100%]',
        'before:transition-transform before:duration-700'
      ),
      secondary: cn(
        'border-2 border-primary-500',
        'text-primary-300 font-semibold',
        'hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-200',
        'hover:shadow-lg hover:shadow-primary-500/20',
        'hover:scale-105'
      ),
      ghost: cn(
        'text-neutral-300',
        'hover:bg-white/5 hover:text-white',
        'hover:shadow-md'
      ),
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

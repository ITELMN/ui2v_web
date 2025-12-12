"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface UseCasesProps {
  title?: string;
  subtitle?: string;
  useCases: UseCase[];
  className?: string;
}

interface UseCaseCardProps {
  useCase: UseCase;
  className?: string;
}

/**
 * UseCaseCard sub-component with icon, title, description
 * Includes hover effects with lift animation
 */
const UseCaseCard = React.forwardRef<HTMLDivElement, UseCaseCardProps>(
  ({ useCase, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'group flex flex-col items-center text-center p-8 rounded-2xl',
          'relative overflow-hidden',
          // Background and border
          'bg-white/[0.02] border border-white/5',
          // Hover effects with lift animation
          'hover:bg-primary-500/10 hover:border-primary-500/30',
          'hover:-translate-y-3',
          'hover:shadow-xl hover:shadow-primary-500/20',
          'transition-all duration-500',
          'cursor-pointer',
          className
        )}
      >
        {/* Radial gradient background on hover */}
        <div className={cn(
          'absolute inset-0',
          'bg-gradient-radial from-primary-500/20 via-primary-500/5 to-transparent',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-500'
        )} />

        {/* Icon with enhanced effects */}
        <div
          className={cn(
            'relative z-10',
            'w-16 h-16 flex items-center justify-center',
            'rounded-xl bg-primary-500/10 border border-primary-500/20',
            'text-primary-400 text-3xl',
            'mb-5',
            'group-hover:bg-primary-500/20 group-hover:border-primary-500/40',
            'group-hover:scale-110 group-hover:-rotate-6',
            'transition-all duration-500',
            'shadow-lg shadow-primary-500/0 group-hover:shadow-primary-500/30'
          )}
        >
          {useCase.icon}
        </div>

        {/* Title with gradient on hover */}
        <h3
          className={cn(
            'relative z-10',
            'text-xl font-semibold text-white mb-3',
            'group-hover:bg-gradient-to-r group-hover:from-primary-300 group-hover:to-primary-500',
            'group-hover:bg-clip-text group-hover:text-transparent',
            'transition-all duration-300'
          )}
        >
          {useCase.title}
        </h3>

        {/* Description */}
        <p className={cn(
          'relative z-10',
          'text-sm text-neutral-400 leading-relaxed',
          'group-hover:text-neutral-300',
          'transition-colors duration-300'
        )}>
          {useCase.description}
        </p>
        
        {/* Bottom accent line */}
        <div className={cn(
          'absolute bottom-0 left-1/2 -translate-x-1/2',
          'w-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600',
          'group-hover:w-3/4',
          'transition-all duration-500',
          'rounded-full'
        )} />
      </div>
    );
  }
);

UseCaseCard.displayName = 'UseCaseCard';

/**
 * Use Cases section component with 4-column grid layout
 * Responsive: 1 column mobile, 2 tablet, 4 desktop
 * Validates: Requirements 6.1, 6.2
 */
export const UseCases = React.forwardRef<HTMLElement, UseCasesProps>(
  ({ title, subtitle, useCases, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('relative py-20 lg:py-32', className)}
        {...props}
      >
        <Container size="xl">
          {/* Section Header */}
          {(title || subtitle) && (
            <div className="text-center mb-16 lg:mb-20">
              {title && (
                <h2
                  className={cn(
                    'text-4xl lg:text-6xl font-bold tracking-tight',
                    'bg-gradient-to-r from-primary-400 to-primary-600',
                    'bg-clip-text text-transparent',
                    'mb-4'
                  )}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Use Cases Grid */}
          <div
            className={cn(
              'grid gap-6',
              'sm:grid-cols-2 lg:grid-cols-4'
            )}
          >
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} useCase={useCase} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

UseCases.displayName = 'UseCases';

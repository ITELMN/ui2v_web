"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  decoration?: React.ReactNode;
}

export interface CapabilitiesProps {
  title?: string;
  subtitle?: string;
  capabilities: Capability[];
  className?: string;
}

interface CapabilityItemProps {
  capability: Capability;
  className?: string;
}

/**
 * CapabilityItem sub-component with icon and text
 * Includes hover effects and optional decorative animations
 */
const CapabilityItem = React.forwardRef<HTMLDivElement, CapabilityItemProps>(
  ({ capability, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'group relative flex items-start gap-4 p-6 rounded-xl overflow-hidden',
          // Background and border
          'bg-white/[0.02] border border-white/5',
          // Hover effects
          'hover:bg-primary-500/5 hover:border-primary-500/20',
          'hover:shadow-lg hover:shadow-primary-500/10',
          'transition-all duration-300',
          'cursor-pointer',
          className
        )}
      >
        {/* Decoration (optional background animation) */}
        {capability.decoration && (
          <div className={cn(
            'absolute bottom-0 right-0 opacity-20',
            'group-hover:opacity-40',
            'transition-opacity duration-300',
            'pointer-events-none'
          )}>
            {capability.decoration}
          </div>
        )}
        
        {/* Gradient overlay on hover */}
        <div className={cn(
          'absolute inset-0',
          'bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-transparent',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300'
        )} />

        {/* Icon with enhanced effects */}
        <div
          className={cn(
            'relative z-10 flex-shrink-0',
            'w-12 h-12 flex items-center justify-center',
            'rounded-lg bg-primary-500/10 border border-primary-500/20',
            'text-primary-400 text-2xl',
            'group-hover:bg-primary-500/20 group-hover:border-primary-500/40',
            'group-hover:scale-110',
            'transition-all duration-300',
            'shadow-lg shadow-primary-500/0 group-hover:shadow-primary-500/20'
          )}
        >
          {capability.icon}
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex-1 flex flex-col gap-1.5">
          <strong
            className={cn(
              'text-lg font-semibold',
              'bg-gradient-to-r from-primary-300 to-primary-500',
              'bg-clip-text text-transparent',
              'group-hover:from-primary-200 group-hover:to-primary-400',
              'transition-all duration-300'
            )}
          >
            {capability.title}
          </strong>
          <span className={cn(
            'text-sm text-neutral-400 leading-relaxed',
            'group-hover:text-neutral-300',
            'transition-colors duration-300'
          )}>
            {capability.description}
          </span>
        </div>
        
        {/* Arrow indicator */}
        <div className={cn(
          'absolute top-6 right-6',
          'text-primary-500 opacity-0 group-hover:opacity-100',
          'transform translate-x-2 group-hover:translate-x-0',
          'transition-all duration-300'
        )}>
          →
        </div>
      </div>
    );
  }
);

CapabilityItem.displayName = 'CapabilityItem';

/**
 * Capabilities section component with 2-column grid layout
 * Responsive: 1 column on mobile, 2 columns on desktop
 * Validates: Requirements 6.1, 6.2
 */
export const Capabilities = React.forwardRef<HTMLElement, CapabilitiesProps>(
  ({ title, subtitle, capabilities, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('relative py-20 lg:py-32 overflow-hidden', className)}
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

          {/* Capabilities Grid */}
          <div
            className={cn(
              'grid gap-6',
              'md:grid-cols-2'
            )}
          >
            {capabilities.map((capability, index) => (
              <CapabilityItem key={index} capability={capability} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

Capabilities.displayName = 'Capabilities';

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
          'relative flex items-start gap-4 p-6 rounded-xl overflow-hidden',
          // Background and border
          'bg-white/[0.02] border border-white/5',
          // Hover effects
          'hover:bg-primary-500/5 hover:border-primary-500/20',
          'transition-all duration-300',
          className
        )}
      >
        {/* Decoration (optional background animation) */}
        {capability.decoration && (
          <div className="absolute bottom-0 right-0 opacity-30 pointer-events-none">
            {capability.decoration}
          </div>
        )}

        {/* Icon */}
        <div
          className={cn(
            'relative z-10 flex-shrink-0',
            'w-12 h-12 flex items-center justify-center',
            'rounded-lg bg-primary-500/10 border border-primary-500/20',
            'text-primary-400 text-2xl',
            'group-hover:bg-primary-500/20 group-hover:border-primary-500/40',
            'transition-all duration-300'
          )}
        >
          {capability.icon}
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex-1 flex flex-col gap-1">
          <strong
            className={cn(
              'text-base font-semibold',
              'bg-gradient-to-r from-primary-400 to-primary-600',
              'bg-clip-text text-transparent'
            )}
          >
            {capability.title}
          </strong>
          <span className="text-sm text-neutral-400 leading-relaxed">
            {capability.description}
          </span>
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

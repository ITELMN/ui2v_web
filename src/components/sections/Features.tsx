"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

/**
 * FeatureCard sub-component with icon, title, description
 * Includes hover effects and gradient backgrounds
 */
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ feature, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'group relative p-8 rounded-2xl',
          // Background and border
          'bg-white/[0.02] border border-white/5',
          // Hover effects
          'hover:bg-white/[0.04] hover:border-primary-500/30',
          'transition-all duration-300',
          'hover:-translate-y-2',
          className
        )}
      >
        {/* Gradient background overlay */}
        {feature.gradient && (
          <div
            className={cn(
              'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10',
              'transition-opacity duration-300',
              feature.gradient
            )}
          />
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          {/* Icon */}
          <div
            className={cn(
              'w-12 h-12 flex items-center justify-center',
              'rounded-xl bg-primary-500/10 border border-primary-500/20',
              'text-primary-400 text-2xl',
              'group-hover:bg-primary-500/20 group-hover:border-primary-500/40',
              'group-hover:scale-110',
              'transition-all duration-300'
            )}
          >
            {feature.icon}
          </div>

          {/* Title */}
          <h3
            className={cn(
              'text-2xl font-semibold text-white',
              'group-hover:text-primary-300',
              'transition-colors duration-300'
            )}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-base text-neutral-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';

/**
 * Features section component with 3-column grid layout
 * Responsive: 1 column on mobile, 3 columns on desktop
 * Validates: Requirements 6.1, 6.2, 6.4
 */
export const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  ({ title, subtitle, features, className, ...props }, ref) => {
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

          {/* Features Grid */}
          <div
            className={cn(
              'grid gap-8',
              'md:grid-cols-2 lg:grid-cols-3'
            )}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

Features.displayName = 'Features';

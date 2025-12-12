"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export interface CTAFeature {
  icon: React.ReactNode;
  text: string;
}

export interface CTAProps {
  title: string;
  subtitle?: string;
  downloadText: string;
  downloadLink: string;
  systemRequirements?: string[];
  features?: CTAFeature[];
  className?: string;
}

/**
 * CTA (Call-to-Action) section component with centered content
 * Features prominent download button, system requirements, and feature highlights
 * Validates: Requirements 10.1, 10.2, 10.3, 10.4
 * 
 * @example
 * ```tsx
 * import { CTA } from '@/components/sections';
 * import { FaHome, FaBolt, FaRobot } from 'react-icons/fa';
 * 
 * <CTA
 *   title="Ready to Get Started?"
 *   subtitle="Join thousands of users creating amazing animations"
 *   downloadText="Download Now"
 *   downloadLink="https://example.com/download"
 *   systemRequirements={['Windows 10/11', 'macOS 12+', 'Linux (Ubuntu 20.04+)']}
 *   features={[
 *     { icon: <FaHome />, text: 'Fully Local' },
 *     { icon: <FaBolt />, text: 'Lightning Fast' },
 *     { icon: <FaRobot />, text: 'AI Powered' },
 *   ]}
 * />
 * ```
 */
export const CTA = React.forwardRef<HTMLElement, CTAProps>(
  ({ 
    title, 
    subtitle,
    downloadText, 
    downloadLink, 
    systemRequirements,
    features,
    className,
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative py-24 lg:py-32 overflow-hidden',
          className
        )}
        {...props}
      >
        {/* Animated background gradient */}
        <div className={cn(
          'absolute inset-0',
          'bg-gradient-to-b from-primary-400/10 via-primary-600/5 to-transparent',
          'pointer-events-none'
        )} />
        
        {/* Radial gradient overlay */}
        <div className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-[800px] h-[800px]',
          'bg-gradient-radial from-primary-500/20 via-primary-500/5 to-transparent',
          'pointer-events-none',
          'animate-pulse'
        )} />

        <Container size="lg" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title with enhanced gradient */}
            <h2
              className={cn(
                'text-4xl lg:text-6xl font-bold tracking-tight mb-6',
                'bg-gradient-to-br from-white via-primary-300 to-primary-500',
                'bg-clip-text text-transparent',
                'drop-shadow-lg'
              )}
            >
              {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg lg:text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {/* Prominent Download Button with enhanced effects */}
            <div className="flex justify-center mb-12">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = downloadLink}
                className={cn(
                  'group relative',
                  'text-xl px-12 py-6',
                  'shadow-2xl shadow-primary-500/40',
                  'hover:shadow-primary-500/60',
                  'hover:scale-110',
                  'transition-all duration-300',
                  'animate-pulse hover:animate-none'
                )}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {downloadText}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    ↓
                  </span>
                </span>
                
                {/* Multiple glow layers */}
                <div className={cn(
                  'absolute inset-0 rounded-lg',
                  'bg-gradient-to-r from-primary-400 to-primary-600',
                  'opacity-0 group-hover:opacity-30',
                  'blur-2xl transition-opacity duration-300'
                )} />
                
                <div className={cn(
                  'absolute inset-0 rounded-lg',
                  'bg-gradient-to-r from-accent-400 to-primary-600',
                  'opacity-0 group-hover:opacity-20',
                  'blur-xl transition-opacity duration-500'
                )} />
              </Button>
            </div>

            {/* System Requirements */}
            {systemRequirements && systemRequirements.length > 0 && (
              <div className="mb-12">
                <p className="text-sm text-neutral-500 mb-3 font-semibold uppercase tracking-wider">
                  System Requirements
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {systemRequirements.map((requirement, index) => (
                    <span
                      key={index}
                      className={cn(
                        'px-4 py-2 rounded-lg',
                        'bg-white/[0.02] border border-white/10',
                        'text-sm text-neutral-400',
                        'hover:bg-white/[0.05] hover:border-primary-500/30',
                        'transition-all duration-300'
                      )}
                    >
                      {requirement}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Feature Highlights Grid */}
            {features && features.length > 0 && (
              <div className={cn(
                'grid gap-6',
                'sm:grid-cols-2 lg:grid-cols-3',
                'max-w-3xl mx-auto'
              )}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-xl',
                      'bg-white/[0.02] border border-white/5',
                      'hover:bg-primary-500/5 hover:border-primary-500/20',
                      'transition-all duration-300',
                      'text-left'
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        'flex-shrink-0 w-10 h-10',
                        'flex items-center justify-center',
                        'rounded-lg bg-primary-500/10 border border-primary-500/20',
                        'text-primary-400 text-xl'
                      )}
                    >
                      {feature.icon}
                    </div>
                    
                    {/* Text */}
                    <span className="text-sm text-neutral-300 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }
);

CTA.displayName = 'CTA';

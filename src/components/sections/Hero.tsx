"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';

export interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  previewImage: string;
  platformInfo?: React.ReactNode;
  featureTags?: React.ReactNode;
  className?: string;
}

/**
 * Hero section component with two-column layout
 * Features gradient text effects, prominent CTA, and responsive design
 * Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5
 */
export const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ 
    badge, 
    title, 
    subtitle, 
    description, 
    ctaText, 
    ctaLink, 
    previewImage,
    platformInfo,
    featureTags,
    className,
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative min-h-screen flex items-center py-20 lg:py-32',
          className
        )}
        {...props}
      >
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Badge */}
              <div className="flex">
                <Badge variant="default" className="animate-fade-in">
                  {badge}
                </Badge>
              </div>

              {/* Title with Gradient */}
              <h1 className={cn(
                'text-5xl lg:text-7xl font-bold tracking-tight',
                'bg-gradient-to-r from-primary-400 to-primary-600',
                'bg-clip-text text-transparent',
                'animate-slide-up'
              )}>
                {title}
              </h1>

              {/* Subtitle */}
              <p className={cn(
                'text-2xl lg:text-3xl font-semibold text-neutral-200',
                'animate-slide-up'
              )}>
                {subtitle}
              </p>

              {/* Description */}
              <p className={cn(
                'text-lg lg:text-xl text-neutral-400 leading-relaxed',
                'animate-slide-up'
              )}>
                {description}
              </p>

              {/* CTA Button */}
              <div className="flex animate-slide-up">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = ctaLink}
                  className="group"
                >
                  {ctaText}
                </Button>
              </div>

              {/* Platform Info */}
              {platformInfo && (
                <div className="animate-fade-in">
                  {platformInfo}
                </div>
              )}

              {/* Feature Tags */}
              {featureTags && (
                <div className="animate-fade-in">
                  {featureTags}
                </div>
              )}
            </div>

            {/* Right Column - Preview Image */}
            <div className="relative animate-slide-up">
              <div className={cn(
                'relative rounded-2xl overflow-hidden',
                'border border-white/10',
                'shadow-2xl shadow-primary-500/20',
                'transition-all duration-500',
                'hover:shadow-primary-500/30 hover:border-primary-500/30',
                'hover:-translate-y-2'
              )}>
                <Image
                  src={previewImage}
                  alt="Preview"
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto"
                />
                
                {/* Glow Effect */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-t',
                  'from-primary-400/20 via-primary-600/10 to-transparent',
                  'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  'pointer-events-none'
                )} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

Hero.displayName = 'Hero';

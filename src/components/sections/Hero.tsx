"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import RippleGrid from '@/components/RippleGrid';

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
          'relative min-h-screen flex items-center py-20 lg:py-32 overflow-hidden',
          className
        )}
        {...props}
      >
        {/* RippleGrid Background - centered behind text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <RippleGrid
              enableRainbow={false}
              gridColor="#5b6ee1"
              rippleIntensity={0.08}
              gridSize={15}
              gridThickness={12}
              mouseInteraction={true}
              mouseInteractionRadius={1.5}
              opacity={0.4}
              fadeDistance={1.2}
              vignetteStrength={1.8}
              glowIntensity={0.15}
            />
          </div>
        </div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-animated opacity-50" />

        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Badge */}
              <div className="flex animate-fade-in">
                <Badge variant="default" className="shimmer">
                  {badge}
                </Badge>
              </div>

              {/* Title with Enhanced Gradient */}
              <h1 className={cn(
                'text-5xl lg:text-7xl font-bold tracking-tight',
                'bg-gradient-to-br from-white via-primary-300 to-primary-500',
                'bg-clip-text text-transparent',
                'animate-slide-up',
                'leading-[1.1]'
              )}>
                {title}
              </h1>

              {/* Subtitle with glow */}
              <p className={cn(
                'text-2xl lg:text-3xl font-semibold',
                'text-gradient-primary',
                'animate-slide-up',
                'drop-shadow-lg'
              )}>
                {subtitle}
              </p>

              {/* Description */}
              <p className={cn(
                'text-lg lg:text-xl text-neutral-300 leading-relaxed',
                'animate-slide-up',
                'max-w-xl'
              )}>
                {description}
              </p>

              {/* CTA Button with enhanced effects */}
              <div className="flex animate-slide-up">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = ctaLink}
                  className={cn(
                    'group relative',
                    'shadow-2xl shadow-primary-500/30',
                    'hover:shadow-primary-500/50',
                    'hover:scale-110',
                    'transition-all duration-300'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {ctaText}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                  
                  {/* Animated glow effect */}
                  <div className={cn(
                    'absolute inset-0 rounded-lg',
                    'bg-gradient-to-r from-primary-400 to-primary-600',
                    'opacity-0 group-hover:opacity-20',
                    'blur-xl transition-opacity duration-300'
                  )} />
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

            {/* Right Column - Preview Image with enhanced effects */}
            <div className="relative animate-slide-up group">
              {/* Glow background */}
              <div className={cn(
                'absolute -inset-4 rounded-3xl',
                'bg-gradient-to-r from-primary-500/20 to-accent-500/20',
                'blur-2xl opacity-0 group-hover:opacity-100',
                'transition-opacity duration-500'
              )} />
              
              <div className={cn(
                'relative rounded-2xl overflow-hidden',
                'border border-white/10',
                'shadow-2xl shadow-primary-500/20',
                'transition-all duration-500',
                'hover:shadow-primary-500/40 hover:border-primary-500/30',
                'hover:-translate-y-2',
                'backdrop-blur-sm'
              )}>
                <Image
                  src={previewImage}
                  alt="Preview"
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto"
                />
                
                {/* Gradient overlay on hover */}
                <div className={cn(
                  'absolute inset-0 bg-gradient-to-t',
                  'from-primary-400/20 via-primary-600/10 to-transparent',
                  'opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  'pointer-events-none'
                )} />
                
                {/* Shimmer effect */}
                <div className={cn(
                  'absolute inset-0',
                  'bg-gradient-to-r from-transparent via-white/10 to-transparent',
                  'translate-x-[-100%] group-hover:translate-x-[100%]',
                  'transition-transform duration-1000',
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

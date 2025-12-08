# Design System Documentation

This document describes the complete design system implementation for the Ui2v website redesign.

## Overview

The design system is built on Tailwind CSS and provides a consistent, professional, and accessible foundation for all UI components. It follows the design principles outlined in the requirements:

- **Simplicity First**: Clean, minimal design focused on content
- **Professional Quality**: Refined typography, spacing, and colors
- **Performance Optimized**: GPU-accelerated animations and efficient rendering
- **Responsive**: Perfect adaptation across all devices
- **Accessible**: WCAG AA compliant with proper contrast ratios

## Color System

### Color Palette

The design system uses three main color scales:

#### Primary (Purple) - Professional & Tech-focused
```typescript
primary: {
  50: '#faf5ff',   // Lightest
  500: '#a855f7',  // Main primary color
  950: '#3b0764',  // Darkest
}
```

**Usage:**
- Main CTA buttons
- Important headings with gradients
- Hover states
- Brand elements

#### Accent (Cyan) - Modern & Energetic
```typescript
accent: {
  50: '#ecfeff',   // Lightest
  500: '#06b6d4',  // Main accent color
  900: '#164e63',  // Darkest
}
```

**Usage:**
- Secondary emphasis
- Icon highlights
- Link colors
- Gradient endpoints

#### Neutral (Gray) - Backgrounds & Text
```typescript
neutral: {
  50: '#fafafa',   // Lightest
  400: '#a1a1aa',  // Mid-tone
  950: '#09090b',  // Darkest (main background)
}
```

**Usage:**
- Background: `neutral-950`, `neutral-900`
- Text: `white`, `neutral-300`, `neutral-400`
- Borders: `white/5`, `white/10`
- Card backgrounds: `white/[0.02]`, `white/[0.05]`

### Tailwind Classes

```tsx
// Primary gradient text
className="bg-gradient-to-br from-white via-white to-primary-300 bg-clip-text text-transparent"

// Primary button
className="bg-gradient-to-r from-primary-600 to-primary-700"

// Card background
className="bg-white/[0.02] border border-white/5"
```

## Typography System

### Font Families

```typescript
fontFamily: {
  sans: 'var(--font-body)',      // Geist Sans - body text
  heading: 'var(--font-heading)', // Geist Sans - headings
  mono: 'var(--font-code)',       // Geist Mono - code
}
```

### Font Size Scale

| Size | Value | Line Height | Usage |
|------|-------|-------------|-------|
| xs | 0.75rem | 1rem | Small labels |
| sm | 0.875rem | 1.25rem | Secondary text |
| base | 1rem | 1.5rem | Body text |
| lg | 1.125rem | 1.75rem | Large body text |
| xl | 1.25rem | 1.75rem | Subheadings |
| 2xl | 1.5rem | 2rem | Small headings |
| 3xl | 1.875rem | 2.25rem | Medium headings |
| 4xl | 2.25rem | 2.5rem | Large headings |
| 5xl | 3rem | 1.1 | Hero text (mobile) |
| 6xl | 3.75rem | 1.1 | Hero text |
| 7xl | 4.5rem | 1.1 | Large hero text |
| 8xl | 6rem | 1 | Extra large hero |

### Heading Hierarchy

```tsx
// H1 - Hero titles
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight">

// H2 - Section titles
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight">

// H3 - Subsection titles
<h3 className="text-3xl lg:text-4xl font-semibold">

// H4 - Card titles
<h4 className="text-2xl lg:text-3xl font-semibold">
```

### Body Text

```tsx
// Large body text
<p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">

// Regular body text
<p className="text-base lg:text-lg text-neutral-400">

// Small text
<p className="text-sm lg:text-base text-neutral-500">
```

## Spacing System

### Section Spacing

```tsx
// Standard section spacing
className="py-20 lg:py-32"

// Reduced section spacing
className="py-16 lg:py-24"
```

### Container Padding

```tsx
// Page container
className="px-6 lg:px-8"

// Card padding
className="p-6 lg:p-8"
```

### Grid Gaps

```tsx
// Small gap
className="gap-4 lg:gap-6"

// Medium gap (most common)
className="gap-6 lg:gap-8"

// Large gap
className="gap-8 lg:gap-12"
```

### Vertical Spacing

```tsx
// Small stack
className="space-y-4 lg:space-y-6"

// Medium stack
className="space-y-6 lg:space-y-8"

// Large stack
className="space-y-8 lg:space-y-12"
```

## Animation System

### Animation Principles

1. **GPU Acceleration**: Only animate `transform` and `opacity`
2. **Performance**: Maintain 60fps during animations
3. **Accessibility**: Respect `prefers-reduced-motion`
4. **Subtlety**: Animations enhance, not distract

### Animation Variants

```typescript
// Available animations
'fadeIn'      // Fade in from transparent
'slideUp'     // Slide up from below
'slideDown'   // Slide down from above
'slideLeft'   // Slide in from right
'slideRight'  // Slide in from left
'scale'       // Scale up from 95%
```

### Using Animations

#### With Tailwind Classes

```tsx
<div className="animate-fade-in">
  Content fades in
</div>

<div className="animate-slide-up">
  Content slides up
</div>
```

#### With AnimatedSection Component

```tsx
import { AnimatedSection } from '@/components/AnimatedSection';

<AnimatedSection animation="slideUp" delay={100}>
  <div>This content animates when it enters the viewport</div>
</AnimatedSection>
```

#### With useInView Hook

```tsx
import { useInView } from '@/lib/animations';

function MyComponent() {
  const { ref, isInView } = useInView();
  
  return (
    <div ref={ref} className={isInView ? 'animate-fade-in' : 'opacity-0'}>
      Content
    </div>
  );
}
```

### Animation Durations

```typescript
duration-150  // Fast (150ms) - buttons, small elements
duration-300  // Normal (300ms) - cards, medium elements
duration-500  // Slow (500ms) - large elements, page transitions
duration-700  // Slower (700ms) - special effects
```

### Easing Functions

```typescript
ease-out      // Enter animations
ease-in-out   // Hover effects
ease-in       // Exit animations
```

### Hover Effects

```tsx
// Lift effect
className="hover:-translate-y-2 transition-transform duration-300"

// Scale effect
className="hover:scale-105 transition-transform duration-300"

// Glow effect
className="hover:shadow-xl hover:shadow-primary-500/30 transition-shadow duration-300"

// Border highlight
className="hover:border-primary-500/30 transition-colors duration-300"

// Background change
className="hover:bg-white/[0.04] transition-colors duration-300"
```

### Reduced Motion Support

The design system automatically respects user preferences:

```css
/* In globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Component Patterns

### Card Pattern

```tsx
<div className={cn(
  // Base
  'rounded-2xl bg-white/[0.02] border border-white/5',
  // Hover
  'hover:bg-white/[0.04] hover:border-primary-500/30',
  'transition-all duration-300',
  // Interactive
  'hover:-translate-y-2'
)}>
  Card content
</div>
```

### Button Pattern

```tsx
// Primary button
<button className={cn(
  'inline-flex items-center justify-center',
  'px-6 py-3 rounded-lg',
  'font-semibold text-white',
  'bg-gradient-to-r from-primary-600 to-primary-700',
  'hover:from-primary-700 hover:to-primary-800',
  'hover:scale-105',
  'transition-all duration-300',
  'shadow-lg shadow-primary-500/20',
  'hover:shadow-xl hover:shadow-primary-500/30'
)}>
  Click me
</button>

// Secondary button
<button className={cn(
  'inline-flex items-center justify-center',
  'px-6 py-3 rounded-lg',
  'font-semibold',
  'border-2 border-primary-500',
  'text-primary-300',
  'hover:bg-primary-500/10',
  'hover:border-primary-400',
  'transition-all duration-300'
)}>
  Secondary
</button>
```

### Section Pattern

```tsx
<section className="relative py-20 lg:py-32">
  <Container size="xl">
    {/* Section header */}
    <div className="text-center mb-16 lg:mb-20">
      <h2 className={cn(
        'text-4xl lg:text-6xl font-bold tracking-tight',
        'bg-gradient-to-br from-white via-white to-primary-300',
        'bg-clip-text text-transparent',
        'mb-4'
      )}>
        Section Title
      </h2>
      <p className="text-lg lg:text-xl text-neutral-400 max-w-3xl mx-auto">
        Section description
      </p>
    </div>

    {/* Section content */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Grid items */}
    </div>
  </Container>
</section>
```

## Responsive Design

### Breakpoints

```typescript
sm: '640px'   // Mobile landscape, small tablets
md: '768px'   // Tablets
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large screens
```

### Responsive Patterns

```tsx
// Responsive grid
className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"

// Responsive text
className="text-base lg:text-lg"

// Responsive spacing
className="py-16 lg:py-24"

// Responsive visibility
className="hidden md:flex"
```

## Accessibility

### Color Contrast

All text meets WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio

### Focus States

```tsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
```

### Semantic HTML

Always use appropriate HTML elements:
- `<button>` for clickable actions
- `<a>` for navigation
- `<h1>` through `<h6>` for headings
- `<section>` for page sections
- `<article>` for independent content

### ARIA Labels

Add ARIA labels when needed:

```tsx
<button aria-label="Toggle mobile menu">
  <HiMenu />
</button>

<img src="..." alt="Descriptive text" />
```

## Utilities

### Design System Module

Import design tokens programmatically:

```typescript
import { 
  colors, 
  typography, 
  spacing, 
  animation,
  gradients,
  hoverEffects 
} from '@/lib/design-system';
```

### Animation Utilities

```typescript
import { 
  useInView, 
  getAnimationClasses,
  prefersReducedMotion,
  getSafeAnimationDuration 
} from '@/lib/animations';
```

### Class Name Utility

```typescript
import { cn } from '@/lib/utils';

// Merge classes with proper precedence
className={cn(
  'base-classes',
  condition && 'conditional-classes',
  props.className
)}
```

## Best Practices

1. **Use Design Tokens**: Always use Tailwind classes from the config
2. **Consistent Spacing**: Use the defined spacing scale
3. **Responsive First**: Design for mobile, enhance for desktop
4. **Accessible Always**: Test with keyboard and screen readers
5. **Performance Matters**: Only animate transform and opacity
6. **Semantic HTML**: Use appropriate HTML elements
7. **Test Reduced Motion**: Verify animations respect user preferences

## Examples

See the following components for implementation examples:
- `src/components/ui/Button.tsx` - Button patterns
- `src/components/ui/Card.tsx` - Card patterns
- `src/components/sections/Hero.tsx` - Section patterns
- `src/components/sections/Features.tsx` - Grid patterns
- `src/components/AnimatedSection.tsx` - Animation patterns

## Validation

The design system implementation validates the following requirements:
- **1.2**: Consistent color palette
- **2.1, 2.3**: Tailwind CSS usage
- **3.1, 3.4**: Color system and gradients
- **4.1-4.5**: Typography system
- **8.1-8.5**: Animation system
- **9.1, 9.3, 9.4**: Spacing and layout system

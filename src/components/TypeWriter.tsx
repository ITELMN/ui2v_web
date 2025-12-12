"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TypeWriterProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorChar?: string;
  loop?: boolean;
}

/**
 * Typewriter effect component for dynamic text
 */
export const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  cursorChar = '|',
  loop = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          if (loop || textIndex < texts.length - 1) {
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, currentText, textIndex, texts.length, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span>{displayText}</span>
      <span 
        className="ml-1 animate-pulse text-primary-400"
        style={{ animationDuration: '0.8s' }}
      >
        {cursorChar}
      </span>
    </span>
  );
};

export default TypeWriter;

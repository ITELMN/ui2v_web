"use client";

import React from 'react';

export const WaveDivider = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      bottom: 0, 
      left: 0, 
      width: '100%', 
      overflow: 'hidden', 
      lineHeight: 0, 
      transform: 'rotate(180deg)',
      zIndex: 0
    }}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: '60px',
      }}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(139, 92, 246, 0.1)" opacity="0.5"></path>
      </svg>
    </div>
  );
};

export const SectionConnector = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 0',
            opacity: 0.5
        }}>
            <svg width="24" height="100" viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="0" x2="12" y2="100" stroke="url(#connector-gradient)" strokeWidth="2" strokeDasharray="8 8" />
                <circle cx="12" cy="50" r="4" fill="var(--ui2v-accent)" />
                <defs>
                    <linearGradient id="connector-gradient" x1="12" y1="0" x2="12" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--ui2v-primary)" stopOpacity="0" />
                        <stop offset="0.5" stopColor="var(--ui2v-primary)" />
                        <stop offset="1" stopColor="var(--ui2v-primary)" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

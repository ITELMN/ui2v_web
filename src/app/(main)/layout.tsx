import '@/app/globals.css';
import '@/resources/custom.css'
import type { Metadata } from 'next';

import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { DynamicTitle } from '@/components/DynamicTitle';
import { BackgroundDecorations } from '@/components/BackgroundDecorations';

export const metadata: Metadata = {
  title: 'Ui2v - 本地 AI 动画设计工具',
  description: 'Ui2v 是一款完全本地运行的 AI 动画设计工具。用自然语言描述想法，AI 即刻生成精美动画。快速、安全、易用。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        {/* Mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        
        {/* Critical CSS for preventing white flash */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              background-color: #030008 !important;
              color: white;
            }
          `
        }} />
        
        {/* Umami Analytics */}
        <script
          defer
          src="https://data.illli.cc/script.js"
          data-website-id="001af9f0-4b15-499b-ac70-a3eb09cbeafa"
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  root.setAttribute('data-theme', 'dark');
                  document.documentElement.style.backgroundColor = '#030008';
                  document.body.style.backgroundColor = '#030008';
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                }
              })();
            `,
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://data.illli.cc" />
        <link rel="dns-prefetch" href="https://data.illli.cc" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/preview1.png" as="image" />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Providers>
          <DynamicTitle />
          <BackgroundDecorations />
          <Navbar />
          <main style={{ position: 'relative', zIndex: 1, background: 'transparent', width: '100%', flex: 1 }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

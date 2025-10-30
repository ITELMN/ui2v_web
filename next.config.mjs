/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  
  // 性能优化配置
  reactStrictMode: true,
  
  // 图片优化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  
  // 压缩优化
  compress: true,
  
  // 实验性功能
  experimental: {
    optimizePackageImports: ['@once-ui-system/core'],
  },
  
  // 生产环境优化
  poweredByHeader: false,
};

export default nextConfig;

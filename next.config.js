/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置
  images: {
    // 图片格式优化 - Next.js会自动转换为WebP
    formats: ['image/webp'],
    
    // 图片尺寸优化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // 缓存优化
    minimumCacheTTL: 31536000, // 1年缓存
    
    // 默认图片质量
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 性能优化
  swcMinify: true,
  
  // 压缩
  compress: true,
  
  // 生产环境优化
  productionBrowserSourceMaps: false,
  
  // React严格模式
  reactStrictMode: true,
};

module.exports = nextConfig;


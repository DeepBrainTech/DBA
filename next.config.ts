import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 只在生产构建时使用静态导出，开发模式禁用以支持热重载
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
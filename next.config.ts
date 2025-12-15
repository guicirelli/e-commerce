import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
  images: {
    domains: [],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*',
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
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

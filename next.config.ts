import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['avatars.mds.yandex.net'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true, // ← ОБЯЗАТЕЛЬНО для экспортируемых кириллических маршрутов!
};

export default nextConfig;


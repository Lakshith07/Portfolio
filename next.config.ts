import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
  // Hide the Next.js Dev Indicator ("N" badge) in the corner
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  } as any,
};

export default nextConfig;

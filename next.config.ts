import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['shaurya-iitkgp.github.io'], // Only the hostname
    unoptimized: true, // Required for static export
  },

};

export default nextConfig;

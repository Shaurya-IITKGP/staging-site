import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['shaurya-iitkgp.github.io'], // Only the hostname
    unoptimized: true, // Required for static export
  },
  basePath: '/staging-site', // Use the repository name as basePath
  assetPrefix: '/staging-site/', // Required for GitHub Pages
  output: 'export', // Ensures compatibility with GitHub Pages
};

export default nextConfig;

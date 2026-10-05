import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

// Extracts the repo name automatically during GitHub Actions build
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig: NextConfig = {
  // Required: Generates a static HTML/CSS/JS export in the ./out directory
  output: 'export',

  // Required: GitHub Pages cannot run the Next.js server-side image optimization API
  images: {
    unoptimized: true,
  },

  // Only applies the basePath in production if running in GitHub Actions
  basePath: isProd && repo ? `/${repo}` : '',
  assetPrefix: isProd && repo ? `/${repo}/` : '',

  allowedDevOrigins: ['0.0.0.0'],
};

export default nextConfig;
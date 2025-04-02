import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubcontent.com'
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during production build
  },
  /* config options here */
};

export default nextConfig;

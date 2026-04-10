import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1ofesossdj49a.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;

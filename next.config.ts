import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent.fbom12-1.fna.fbcdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

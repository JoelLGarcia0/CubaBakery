import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

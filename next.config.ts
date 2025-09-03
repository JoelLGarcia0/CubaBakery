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
      // Force apex domain to www for canonical consistency
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "cubabakery.com",
          },
        ],
        destination: "https://www.cubabakery.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

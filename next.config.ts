import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  experimental: {
    serverActions: {
      allowedOrigins: ["fiestacabs.com", "www.fiestacabs.com", "*.fiestacabs.com"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fiestacabs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.fiestacabs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.fiestacabs.com",
          },
        ],
        destination: "https://fiestacabs.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

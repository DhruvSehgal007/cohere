import type { NextConfig } from "next";

/* --- PREVIOUS CODE (Before allowing LinkedIn remote images) ---
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/employeement-labour",
        destination: "/employment-and-labour",
        permanent: true,
      },
    ];
  },
};
--- END PREVIOUS CODE --- */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.licdn.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.instagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/employeement-labour",
        destination: "/employment-and-labour",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

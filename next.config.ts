import type { NextConfig } from "next";

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

export default nextConfig;

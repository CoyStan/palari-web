import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/philosophy", destination: "/manifesto", permanent: true },
      { source: "/life", destination: "/memory", permanent: true },
    ];
  },
};

export default nextConfig;

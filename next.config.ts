import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  experimental: {
    optimizePackageImports: ["@heroicons/react"],
  },
};

export default nextConfig;

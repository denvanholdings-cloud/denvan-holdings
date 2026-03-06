import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/denvan-holdings",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

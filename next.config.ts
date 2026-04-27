import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/developer-portfolio-pixel-art",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

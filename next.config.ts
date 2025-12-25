import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-globe.gl", "three", "three-glow-mesh"],
  /* config options here */
};

export default nextConfig;

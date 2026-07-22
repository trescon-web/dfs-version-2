import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build_out",
  basePath: "/dfs-version-2",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

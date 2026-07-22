import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = "dubai-fintech-summit-v2";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

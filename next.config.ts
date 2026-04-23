import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const base = isProd ? "/digital-curator" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: base,
  assetPrefix: isProd ? "/digital-curator/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
};

export default nextConfig;

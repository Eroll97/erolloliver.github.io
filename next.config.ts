import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Configure Turbopack (for Next.js 15+)
  experimental: {
    turbo: {
      rules: {
        "*.glb": {
          loaders: ["file-loader"],
          as: "*.js",
        },
        "*.gltf": {
          loaders: ["file-loader"],
          as: "*.js",
        },
      },
    },
  },

  // ✅ Keep Webpack config as fallback (for production builds or if Turbopack is disabled)
  webpack: (config, { dev, isServer }) => {
    // Only apply webpack config when not using Turbopack
    if (!dev || isServer) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        type: "asset/resource",
      });
    }

    return config;
  },
};

export default nextConfig;

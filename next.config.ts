import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

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

  // Add images domain for Google Drive thumbnails
  images: {
    domains: ["drive.google.com", "lh3.googleusercontent.com"],
  },
};

export default withNextVideo(nextConfig);

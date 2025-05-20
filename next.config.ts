import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        "@nutrient-sdk/viewer": "@nutrient-sdk/viewer",
      });
    }
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@nutrient-sdk/viewer": "@nutrient-sdk/viewer",
      },
    },
  },
  images: {
    remotePatterns: [
      {
         protocol: 'http',
        hostname: 'api-euro.bscenter.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;


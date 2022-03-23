/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
  webpack: (config, { isServer, dev }) => {
    config.module.rules.push({ test: /\.svg$/, use: ["@svgr/webpack"] });

    if (isServer) {
      return config;
    }
    if (dev) {
      return config;
    }

    return config;
  },
};

module.exports = nextConfig;

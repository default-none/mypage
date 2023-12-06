/** @type {import('next').NextConfig} */

const { prefix } = require('./prefix.config');

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: prefix,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production next"
    ? "https://default-none.github.io/mypage/"
    : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: prefix,
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;

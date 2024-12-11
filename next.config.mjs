/*module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      dns: false,
      tls: false,
      net: false,
    };
    return config;
  },
};*/


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

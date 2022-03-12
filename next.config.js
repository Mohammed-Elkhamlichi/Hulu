/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["localhost", "127.0.0.1"] },
  env: {
    apiKey: "cc971e656b14660d19f5ced178df8863",
    BaseApiUrl: "https://api.themoviedb.org/3/",
  },
};

module.exports = nextConfig;

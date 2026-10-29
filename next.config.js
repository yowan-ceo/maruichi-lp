/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For flexibility in static export or lightweight rendering
  },
};

module.exports = nextConfig;

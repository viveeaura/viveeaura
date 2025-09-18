/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://viveeaura.com'],
    formats: ['image/webp', 'image/avif'], // Modern image formats
    remotePatterns: [new URL('https://viveeaura.org/wp-content/uploads/***')],
  },
};

export default nextConfig;

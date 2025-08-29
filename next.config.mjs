/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://viveeaura.org/wp-content/uploads/***')],
  },
};

export default nextConfig;

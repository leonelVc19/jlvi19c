/** @type {import('next').NextConfig} */
const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: domain
      }
    ],
    minimumCacheTTL: 1500000,
  },
}
export default nextConfig;

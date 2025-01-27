/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  process.env.NEXT_PUBLIC_S3_DOMAIN
      }
    ],
    minimumCacheTTL: 1500000,
  },
}
export default nextConfig;

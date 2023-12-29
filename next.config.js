/** @type {import('next').NextConfig} */
const nextConfig = {
   // reactStrictMode: true,
   trailingSlash: true, // for refresh page
   output: 'standalone',
   experimental: {
      appDir: true,
   },
   images: {
      unoptimized: true,
      // formats: ['image/avif', 'image/webp'],
      // unoptimized: false, //default false
      // remotePatterns: [
      //    {
      //       protocol: 'https',
      //       hostname: '**.sciepro.sheep.fish',
      //       port: '',
      //       pathname: '/storage/**',
      //    },
      // ],
   },
}

module.exports = nextConfig

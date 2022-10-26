/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  // use to customize route
  async rewrites() {
    return [
      {
        source: '/product/:path*',
        destination: '/product/:path*'
      }
    ]
  }
}

module.exports = nextConfig

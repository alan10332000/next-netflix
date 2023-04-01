/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['upload.wikimedia.org', 'uhdtv.io', 'mango.blender.org', 'download.blender.org'],
  },
}

module.exports = nextConfig

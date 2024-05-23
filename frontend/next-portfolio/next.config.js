/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist/app',
    eslint: {
      ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

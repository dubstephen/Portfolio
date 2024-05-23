/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'frontend/next-portfolio/out',
    eslint: {
      ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig

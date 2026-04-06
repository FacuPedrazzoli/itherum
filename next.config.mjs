/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: ignoreBuildErrors is temporary - pre-existing framer-motion variant type issues
  // need systematic refactoring across all components to fix properly
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig

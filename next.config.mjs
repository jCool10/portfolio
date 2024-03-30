/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["picsum.photos", "res.cloudinary.com"],
  },
}

export default nextConfig

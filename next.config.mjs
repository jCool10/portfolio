/** @type {import('next').NextConfig} */

class VeliteWebpackPlugin {
  static started = false
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs !!!
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === "development"
      this.options.watch = this.options.watch ?? dev
      this.options.clean = this.options.clean ?? !dev
      const { build } = await import("velite")
      await build(this.options) // start velite
    })
  }
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}

export default nextConfig

const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: isProd ? "/" : "",
  output: "export",
  trailingSlash: true,
  images.unoptimized = true,
};

const images: {
  unoptimized: true,
},

module.exports = nextConfig, images;
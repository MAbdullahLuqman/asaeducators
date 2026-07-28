/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep development output separate from production builds so a build cannot
  // invalidate the CSS/chunks used by an open local dev server.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

module.exports = nextConfig;

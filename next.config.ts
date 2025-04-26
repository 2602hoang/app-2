/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/app-2",

  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

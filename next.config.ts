/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/app-2",

  async rewrites() {
    return [
      {
        source: "/app-2/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

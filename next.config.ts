/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/app-2",
  assetPrefix: "/app-2/",
  async rewrites() {
    return [
      {
        source: "/app-2/:path*",
        destination: "/:path*",
      },
    ];
  },
};

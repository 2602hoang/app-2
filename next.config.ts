/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/",
  // assetPrefix: "/app-2/",
  // trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

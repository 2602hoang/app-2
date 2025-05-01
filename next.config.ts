/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/app-2",
  async rewrites() {
    return [
      {
        source: "/app-2/:path*",
        destination: "https://app-2-black.vercel.app/app-2/:path*",
      },
    ];
  },
};

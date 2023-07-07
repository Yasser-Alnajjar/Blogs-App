/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/Yasser-Alnajjar/blog_post/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;

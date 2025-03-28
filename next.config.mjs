/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.SUPABASE_HOSTNAME,
        port: "",
        pathname: process.env.CABINS_PATHNAME,
      },
    ],
  },
};

export default nextConfig;

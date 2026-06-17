import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN IP access to Next.js dev server resources (HMR)
  allowedDevOrigins: [
    '192.168.100.150',
    'localhost:3001',
    'localhost:3000',
  ],
};

export default nextConfig;

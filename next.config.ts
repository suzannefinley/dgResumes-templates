import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'xftw4cx8tj.ufs.sh',
        port: ''
      }
    ]
  }
};

export default nextConfig;

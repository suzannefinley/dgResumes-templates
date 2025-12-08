import type { NextConfig } from 'next';
import path from 'path/win32';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '..') // Set to parent directory or monorepo root
  },
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

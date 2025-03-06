import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/payment-success',
        destination: '/payment/success',
        permanent: true,
      },
      {
        source: '/payment-fail',
        destination: '/payment/fail',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;

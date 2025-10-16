import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Allow Unsplash images
  },
  // ✅ Redirect HTTP → HTTPS and optionally to your preferred domain
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'career-counselor-one.vercel.app', // Only needed if enforcing custom domain
          },
        ],
        destination: 'https://career-counselor-one.vercel.app/:path*',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;

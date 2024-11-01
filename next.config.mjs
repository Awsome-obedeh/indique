/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.indiquehair.com',
           
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
           
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
           
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
           
          },
        ],
      },
};

export default nextConfig;

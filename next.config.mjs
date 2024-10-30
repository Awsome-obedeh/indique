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
        ],
      },
};

export default nextConfig;

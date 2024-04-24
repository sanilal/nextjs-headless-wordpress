/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.aptech.ae',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;

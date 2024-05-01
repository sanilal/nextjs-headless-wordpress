/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.aptech.ae',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'aptechwp.webhostingdubai.net',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;

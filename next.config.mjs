/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: ["images-storage-domain.com"],
        minimumCacheTTL: 31536000
    }
};

export default nextConfig;
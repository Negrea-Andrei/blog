// next.config.mjs

const nextConfig = {
    images: {
        remotePatterns: [
            { domain: 'lh3.googleusercontent.com', path: '/.*' },
            { domain: 'firebasestorage.googleapis.com', path: '/.*' }
        ]
    }
};

export default nextConfig;

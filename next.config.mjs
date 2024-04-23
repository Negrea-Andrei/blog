/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            'https://lh3\\.googleusercontent\\.com/.*',
            'https://firebasestorage\\.googleapis\\.com/.*'
        ]
    }
}

export default nextConfig;

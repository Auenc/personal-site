/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    serverRuntimeConfig: {
        apiUrl: process.env.URL,
    }
};

export default nextConfig;

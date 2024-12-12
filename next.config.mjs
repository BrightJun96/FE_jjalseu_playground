/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
    experimental: {
        inlineCss: true,
    },
};

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);

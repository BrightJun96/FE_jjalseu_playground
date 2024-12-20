import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        inlineCss: true,

    },
};

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});
//
export default bundleAnalyzer(nextConfig);

// export default nextConfig;

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fa'],
        defaultLocale: process.env.DEFAULT_MARKET,
        localeDetection: false
    },

    eslint: {
        dirs: ['.']
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    reactStrictMode: true,
    swcMinify: true
}

module.exports = withBundleAnalyzer(nextConfig)

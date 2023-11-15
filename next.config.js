/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        prependData: '@import "@/styles/variables.scss";@import "@/styles/mixins.scss";',
    },
    images: {
        domains: ['localhost', 'tocoriri.com'],
    },
    env: {
        API_URL: process.env.API_URL ? process.env.API_URL : 'http://localhost:8080/api',
        DOMAIN_URL: process.env.DOMAIN_URL ? process.env.DOMAIN_URL : `http://localhost:${process.env.PORT ? process.env.PORT : '3000'}`,
    },
}

module.exports = nextConfig

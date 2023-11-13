/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: '@import "@/styles/variables.scss";@import "@/styles/mixins.scss";',
    },
    env: {
        API_URL: process.env.API_URL ? process.env.API_URL : 'http://localhost:8080/api',
    },
}

module.exports = nextConfig

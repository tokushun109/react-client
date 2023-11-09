/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: '@import "@/styles/variables.scss";@import "@/styles/mixins.scss";'
    },
}

module.exports = nextConfig

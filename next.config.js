/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: '@import "@/styles/variables.scss";'
    },
}

module.exports = nextConfig

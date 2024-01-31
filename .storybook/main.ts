import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
    stories: ['./Configure.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src'),
            }
        }
        if (config.module && config.module.rules) {
            config.module.rules.push({
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        options: {
                            loader: 'sass-loader',
                            prependData: '@import "@/styles/variables.scss";@import "@/styles/mixins.scss";',
                        },
                    },
                ],
            })
        }
        return config
    },
}
export default config

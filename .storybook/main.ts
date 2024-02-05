import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
    stories: ['./Configure.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
        '@storybook/addon-controls',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        // @を../srcのエイリアスとして設定
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src'),
            }
        }
        // グローバルなscssファイルの読み込み
        if (config.module && config.module.rules) {
            config.module.rules.push({
                test: /\.scss$/i,
                use: [
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@import "@/styles/variables.scss";@import "@/styles/mixins.scss";`,
                        },
                    },
                ],
            })
        }
        return config
    },
}
export default config

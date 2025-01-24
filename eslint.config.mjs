import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import unusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

const configs = [
    ...compat.extends('next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:storybook/recommended'),
    {
        plugins: {
            'unused-imports': unusedImports,
        },

        languageOptions: {
            globals: {
                React: 'readonly',
                JSX: 'readonly',
            },
        },

        rules: {
            'no-unused-vars': [
                1,
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_$',
                },
            ],

            'no-console': [
                'error',
                {
                    allow: ['error'],
                },
            ],

            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],

                    'newlines-between': 'always',

                    alphabetize: {
                        order: 'asc',
                    },
                },
            ],

            'unused-imports/no-unused-imports': 'error',
            'react/destructuring-assignment': 'error', // Props などの分割代入を強制
        },
    },

    {
        files: ['**/*.stories.*'],
        rules: {
            'no-console': 'off',
        },
    },
]

export default configs

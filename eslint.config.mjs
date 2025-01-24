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
            // Props などの分割代入を強制
            'react/destructuring-assignment': 'error',
            // コンポーネントの定義方法をアロー関数に統一
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
            // useState の返り値の命名を [value, setValue] に統一
            'react/hook-use-state': 'error',
            // boolean 型の Props の渡し方を統一
            'react/jsx-boolean-value': 'error',
            // React Fragment の書き方を統一
            'react/jsx-fragments': 'error',
            // Props と children で不要な中括弧を削除
            'react/jsx-curly-brace-presence': 'error',
            // 不要な React Fragment を削除
            'react/jsx-no-useless-fragment': 'error',
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

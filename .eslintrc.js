module.exports = {
    plugins: ['import', 'unused-imports'],
    extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
    globals: {
        React: 'readonly',
        JSX: 'readonly',
    },
    rules: {
        'no-unused-vars': [
            1,
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                // _だけの時はwarningを出さない
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
    },
    ignorePatterns: ['dummies'],
}

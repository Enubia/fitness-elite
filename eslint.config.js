import antfu from '@antfu/eslint-config';

export default antfu({
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'node/prefer-global/process': 'off',
        'style/brace-style': ['error', '1tbs'],
        'style/comma-dangle': ['error', 'always-multiline'],
        'style/eol-last': ['error', 'always'],
        'style/linebreak-style': ['error', 'unix'],
        'style/quote-props': ['error', 'as-needed'],
        'style/quotes': ['error', 'single', { avoidEscape: true }],
        curly: ['error', 'all'],
    },

    stylistic: {
        indent: 4,
        semi: true,
    },

    ignores: [
        '.vscode',
        '.husky',
        'dist',
        'dist-electron',
        'node_modules',
    ],

    yaml: false,
});

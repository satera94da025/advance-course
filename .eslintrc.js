module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', "plugin:storybook/recommended"],
    parser: '@typescript-eslint/parser',
    overrides: [{
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        files: ['*.ts', '*.tsx'],
    }],
    plugins: ['react', '@typescript-eslint', 'unused-imports'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        quotes: [0],
        'max-len': ['error', {
            code: 200,
            ignoreUrls: true,
            ignoreComments: true,
        }],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'arrow-body-style': [0],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "unused-imports/no-unused-imports": "error",
    },
    globals: {
        _IS_DEV_: true,
    },
};
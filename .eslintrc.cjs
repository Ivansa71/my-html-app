module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'html'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'warn',
    'no-debugger': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
  },
};

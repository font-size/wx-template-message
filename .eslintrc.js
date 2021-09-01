module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    process: true,
    uni: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  parser: 'babel-eslint',
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': [0, 'never'],
  },
};

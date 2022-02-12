module.exports = {
  extends: ['eslint-config-airbnb-base', 'plugin:eslint-comments/recommended'],

  parser: '@babel/eslint-parser',

  settings: {
    'import/parser': '@babel/eslint-parser',
  },

  plugins: ['@babel'],

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
    requireConfigFile: false,
  },
};

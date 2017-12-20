module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['prettier', 'react', 'flowtype'],
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        enforceInMethodNames: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        jsxBracketSameLine: false,
      },
    ],
    'react/prop-types': 'off', // we use Flow instead,
    'react/jsx-no-bind': 'error',
    'flowtype/require-valid-file-annotation': ['error', 'always'],
  },
};

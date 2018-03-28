const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  root: true, // stop ESLint from looking for a configuration file in parent folders
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: [
    'import',
    'prettier',
    'react',
    'react-native',
    'flowtype',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],
  rules: {
    'no-console': [ERROR, { allow: ['warn', 'error'] }],
    'no-duplicate-imports': ERROR,
    'no-underscore-dangle': [ERROR, { enforceInMethodNames: true }],
    'no-restricted-imports': [
      ERROR,
      {
        patterns: ["moment"], // DateFormatter
        paths: [
          {
            name: 'react-native',
            importNames: [
              'Button', // Button
              'Dimensions', // Device
              'StyleSheet', // StyleSheet
              'Text', // Text
              'TouchableHighlight', // Touchable
              'TouchableNativeFeedback', // Touchable
              'TouchableOpacity', // Touchable
            ],
            message:
              "Please use '@kiwicom/react-native-app-shared' package instead.",
          },
          {
            name: 'react-native-read-more-text', // ReadMore
            message:
              "Please use '@kiwicom/react-native-app-shared' package instead.",
          },
          {
            name: 'react-navigation',
            importNames: [
              'StackNavigator', // StackNavigator
            ],
            message:
              "Please use '@kiwicom/react-native-app-navigation' package instead.",
          },
        ],
      },
    ],
    'import/order': [
      ERROR,
      {
        groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': ERROR,
    'import/no-mutable-exports': ERROR,
    'import/no-absolute-path': ERROR,
    'prettier/prettier': [
      ERROR,
      { singleQuote: true, trailingComma: 'all', jsxBracketSameLine: false },
    ],
    'react/jsx-no-bind': ERROR,
    'react/no-access-state-in-setstate': ERROR,
    'react/prop-types': OFF, // we use Flow instead,
    'react-native/no-unused-styles': ERROR,
    'react-native/no-inline-styles': WARNING,
    'flowtype/require-valid-file-annotation': [ERROR, 'always'],
  },
};

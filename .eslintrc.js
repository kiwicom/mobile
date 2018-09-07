const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    jasmine: true
  },
  root: true, // stop ESLint from looking for a configuration file in parent folders
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ["import", "prettier", "react", "react-native", "flowtype", "detox"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react",
    "prettier/flowtype"
  ],
  rules: {
    "react/no-did-update-set-state": ERROR,
    "prefer-const": ERROR,
    curly: ERROR,
    "no-console": [ERROR, { allow: ["warn", "error"] }],
    "no-duplicate-imports": ERROR,
    "no-underscore-dangle": [
      ERROR,
      {
        enforceInMethodNames: true,
        allow: ["__typename"] // needed for GraphQL interface types, see: https://github.com/facebook/relay/issues/2463
      }
    ],
    "no-restricted-imports": [
      ERROR,
      {
        patterns: ["moment"], // DateFormatter
        paths: [
          {
            name: "react-native",
            importNames: [
              "Button", // Button
              "LayoutAnimation", // LayoutAnimation
              "StyleSheet", // StyleSheet
              "Text", // Text
              "TouchableHighlight", // Touchable
              "TouchableNativeFeedback", // Touchable
              "TouchableOpacity", // Touchable
              "TouchableWithoutFeedback", // TouchableWithoutFeedback
              "Switch", //Switch
              "Alert", // Alert (localization)
              "TextInput",
              "Modal"
            ],
            message: "Please use '@kiwicom/mobile-shared' package instead."
          },
          {
            name: "@kiwicom/orbit-design-tokens",
            importNames: ["defaultTokens"],
            message: "Please use '@kiwicom/mobile-orbit' package instead."
          },
          {
            name: "react-native-read-more-text", // ReadMore
            message: "Please use '@kiwicom/mobile-shared' package instead."
          },
          {
            name: "react-navigation",
            importNames: [
              "StackNavigator", // StackNavigator
              "withNavigation"
            ],
            message: "Please use '@kiwicom/mobile-navigation' package instead."
          },
          {
            name: "react-relay",
            message: "Please use '@kiwicom/mobile-relay' package instead."
          }
        ]
      }
    ],
    "import/order": [
      ERROR,
      {
        groups: [["builtin", "external"], ["parent", "sibling"], "index"],
        "newlines-between": "always"
      }
    ],
    "import/newline-after-import": ERROR,
    "import/no-mutable-exports": ERROR,
    "import/no-absolute-path": ERROR,
    "prettier/prettier": [
      ERROR,
      { singleQuote: true, trailingComma: "all", jsxBracketSameLine: false }
    ],
    "react/jsx-boolean-value": [ERROR, "always"],
    "react/jsx-no-bind": ERROR,
    "react/no-access-state-in-setstate": ERROR,
    "react/prop-types": OFF, // we use Flow instead,
    "react-native/no-unused-styles": ERROR,
    "flowtype/require-valid-file-annotation": [ERROR, "always"],
    "flowtype/newline-after-flow-annotation": [ERROR, "always"]
  }
};

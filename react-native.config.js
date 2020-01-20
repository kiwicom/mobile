// @flow

const deactivatedAutolinkingModules = [
  'react-native-gesture-handler',
  '@react-native-community/async-storage',
  '@react-native-community/netinfo',
  'react-native-maps',
  'react-native-webview',
  'react-native-code-push',
];

function getAutolinkConfig() {
  return deactivatedAutolinkingModules.reduce((acc, curr) => {
    return {
      // $FlowFixMe Errors after moving rn modules from untyped to declarations
      ...acc,
      // $FlowFixMe Errors after moving rn modules from untyped to declarations
      [curr]: {
        platforms: {
          ios: null,
          android: null,
        },
      },
    };
  }, {});
}

module.exports = {
  assets: ['./assets/fonts'],
  dependencies: {
    ...getAutolinkConfig(),
  },
};

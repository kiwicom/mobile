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
      ...acc,
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
  assets: ['./assets/fonts', '@kiwicom/account-native/apps/account-native/assets/fonts'],
  dependencies: {
    ...getAutolinkConfig(),
  },
};

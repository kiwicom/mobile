// @flow

import { AppRegistry, YellowBox } from 'react-native';

import App from './app/App';
// import App from './packages/playground/src/Navigation';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
  // TODO this a warning from react-navigation, see: https://reactnavigation.org/docs/en/common-mistakes.html
  // This happens in our app because the package-stack architecture we have for native apps
  'You should only render one navigator',
]);

AppRegistry.registerComponent('reactNativeApp', () => App);

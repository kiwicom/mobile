// @flow

import { AppRegistry, YellowBox } from 'react-native';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
  'Module R', // ... requires main queue setup since it overrides ...
]);

import App from './app/App';
// import App from './app/playground/src/Navigation';

AppRegistry.registerComponent('reactNativeApp', () => App);

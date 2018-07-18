// @flow

import { AppRegistry, YellowBox } from 'react-native';

// TODO: please check if it's still needed
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
  'Module R', // ... requires main queue setup since it overrides ...
  'Class RCTCxxModule was not exported. Did you forget to use RCT_EXPORT_MODULE()?', // https://github.com/facebook/react-native/issues/18201
  // TODO this a warning from react-navigation, see: https://reactnavigation.org/docs/en/common-mistakes.html
  // This happens in our app because the package-stack architecture we have for native apps
  'You should only render one navigator',
]);

import App from './app/App';
// import App from './packages/playground/src/Navigation';

AppRegistry.registerComponent('reactNativeApp', () => App);

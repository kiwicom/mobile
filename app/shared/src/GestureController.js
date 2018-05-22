// @flow strict

import { NativeModules } from 'react-native';

const noop: (x: *) => void = () => {};

const { enableGestures = noop, disableGestures = noop } =
  NativeModules.RNKiwiGestureController || {};

export default { enableGestures, disableGestures };

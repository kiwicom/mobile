// @flow strict

import { NativeModules, Platform } from 'react-native';

const noop: (x: *) => void = () => {};

const {
  enableGestures = noop,
  disableGestures = noop,
  invokeDefaultBackButton = noop,
} =
  Platform.OS === 'ios'
    ? NativeModules.RNKiwiGestureController
    : NativeModules.RNKiwiBackButton;

export default { enableGestures, disableGestures, invokeDefaultBackButton };

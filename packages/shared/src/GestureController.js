// @flow strict

import { NativeModules, Platform } from 'react-native';

const noop: (x: *) => void = () => {};

const isNativeGestureModule = () => {
  if (Platform.OS === 'ios') {
    return !!NativeModules.RNKiwiGestureController;
  }
  return !!NativeModules.RNKiwiBackButton;
};

const {
  enableGestures = noop,
  disableGestures = noop,
  closeModal = noop,
  invokeDefaultBackButton = noop,
} =
  Platform.OS === 'ios'
    ? NativeModules.RNKiwiGestureController || {}
    : NativeModules.RNKiwiBackButton || {};

export default {
  enableGestures,
  disableGestures,
  closeModal,
  invokeDefaultBackButton,
  isNativeGestureModule: isNativeGestureModule(),
};

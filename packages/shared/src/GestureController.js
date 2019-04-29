// @flow

import { NativeModules, Platform } from 'react-native';
import { noop } from '@kiwicom/mobile-utils';

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

type GestureControllerType = {|
  enableGestures: Function,
  disableGestures: Function,
  closeModal: Function,
  invokeDefaultBackButton: Function,
  isNativeGestureModule: boolean,
|};

const GestureController: GestureControllerType = {
  enableGestures,
  disableGestures,
  closeModal,
  invokeDefaultBackButton,
  isNativeGestureModule: isNativeGestureModule(),
};

export default GestureController;

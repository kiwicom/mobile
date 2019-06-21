// @flow

import { NativeModules } from 'react-native';

NativeModules.UIManager = NativeModules.UIManager ?? {};
NativeModules.UIManager.RCTView = NativeModules.UIManager.RCTView ?? {};
NativeModules.RNGestureHandlerModule = NativeModules.RNGestureHandlerModule ?? {
  State: {
    BEGAN: 'BEGAN',
    FAILED: 'FAILED',
    ACTIVE: 'ACTIVE',
    END: 'END',
  },
};
NativeModules.PlatformConstants = {};
NativeModules.RNGestureHandlerModule = {
  Direction: {},
  createGestureHandler: () => {},
  attachGestureHandler: () => {},
};

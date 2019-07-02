// @flow

import { NativeModules } from 'react-native';

NativeModules.UIManager = NativeModules.UIManager ?? {};
NativeModules.UIManager.RCTView = NativeModules.UIManager.RCTView ?? {};
NativeModules.PlatformConstants = {};
NativeModules.RNGestureHandlerModule = {
  Direction: {},
  createGestureHandler: () => {},
  attachGestureHandler: () => {},
  State: {
    BEGAN: 'BEGAN',
    FAILED: 'FAILED',
    ACTIVE: 'ACTIVE',
    END: 'END',
  },
  dropGestureHandler: () => {},
};

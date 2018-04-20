// @flow

import { NativeModules } from 'react-native';

NativeModules.RNTranslationManager = {
  translate: jest.fn(key => key),
  translateAsync: jest.fn(key => key),
};

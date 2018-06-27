// @flow strict

import { NativeModules } from 'react-native';

const {
  getLanguage: nativeGetLanguage,
  getTerritory: nativeGetTerritory,
  getLocaleUnderscored: nativeGetLocaleUnderscored,
  getLocaleDashed: nativeGetLocaleDashed,
} = NativeModules.RNDeviceInfo;

export const getLanguage = () => nativeGetLanguage;
export const getTerritory = () => nativeGetTerritory;
export const getLocaleUnderscored = () => nativeGetLocaleUnderscored;
export const getLocaleDashed = () => nativeGetLocaleDashed;

export default {
  getLanguage,
  getTerritory,
  getLocaleUnderscored,
  getLocaleDashed,
};

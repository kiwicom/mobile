// @flow strict

import { NativeModules } from 'react-native';

const locale = NativeModules.RNDeviceInfo.Locale; // e.g. en-US
const [language, territory] = locale.split('-');

export const getLanguage = () => language;
export const getTerritory = () => territory;
export const getLocaleUnderscored = () => locale.replace('-', '_');
export const getLocaleDashed = () => locale;

const DeviceLocale = {
  getLanguage,
  getTerritory,
  getLocaleUnderscored,
  getLocaleDashed,
};

export default DeviceLocale;

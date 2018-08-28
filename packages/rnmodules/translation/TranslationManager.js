// @flow

import { NativeModules } from 'react-native';

export const translate = (key: string): Promise<String> => {
  return NativeModules.RNTranslationManager.translate(key);
};

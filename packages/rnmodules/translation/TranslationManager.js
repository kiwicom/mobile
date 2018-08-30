// @flow

import { NativeModules } from 'react-native';

export const translate = (key: string): Promise<string> => {
  return NativeModules.RNTranslationManager.translate(key);
};

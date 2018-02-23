// @flow

import { NativeModules } from 'react-native';

export default function(key: string) {
  return NativeModules.RNTranslationManager.translate(key);
}

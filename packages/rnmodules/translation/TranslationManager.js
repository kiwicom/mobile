// @flow

import { NativeModules } from 'react-native';

export const translate = NativeModules.RNTranslationManager.translate;
export const translateAsync = NativeModules.RNTranslationManager.translateAsync;

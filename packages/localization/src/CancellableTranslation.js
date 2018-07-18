// @flow strict

import { NativeModules } from 'react-native';
import { CancellablePromise } from '@kiwicom/mobile-shared';

export type TranslationPromise = {|
  cancel: () => void,
  promise: Promise<string>,
|};

export function cancellableTranslation(nativeKey: string): TranslationPromise {
  return CancellablePromise(
    NativeModules.RNTranslationManager.translateAsync(nativeKey),
  );
}

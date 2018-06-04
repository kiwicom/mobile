// @flow strict

import { NativeModules } from 'react-native';

export type TranslationPromise = {|
  cancel: () => void,
  promise: Promise<string>,
|};

export function cancellableTranslation(nativeKey: string): TranslationPromise {
  let resolve;
  let reject;

  const promise = new Promise((originalResolve, originalReject) => {
    resolve = originalResolve;
    reject = originalReject;
  });

  NativeModules.RNTranslationManager.translateAsync(nativeKey)
    .then(resolve)
    .then(reject);

  return {
    promise,
    cancel: () => {
      reject('cancelled');
    },
  };
}

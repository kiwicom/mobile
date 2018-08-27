// @flow strict

import { CancellablePromise } from '@kiwicom/mobile-shared';
import { translate } from '@kiwicom/rnmodules';

export type TranslationPromise = {|
  cancel: () => void,
  promise: Promise<string>,
|};

export function cancellableTranslation(nativeKey: string): TranslationPromise {
  return CancellablePromise(translate(nativeKey));
}

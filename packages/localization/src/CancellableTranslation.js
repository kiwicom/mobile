// @flow strict

import { cancellablePromise } from '@kiwicom/mobile-utils';
import { translate } from '@kiwicom/rnmodules';

export type TranslationPromise = {|
  cancel: () => void,
  promise: Promise<string>,
|};

export function cancellableTranslation(nativeKey: string): TranslationPromise {
  return cancellablePromise(translate(nativeKey));
}

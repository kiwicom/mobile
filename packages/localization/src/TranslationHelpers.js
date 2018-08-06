//@flow

import DefaultVocabulary, { type TranslationKeys } from './DefaultVocabulary';
import {
  cancellableTranslation,
  type TranslationPromise,
} from './CancellableTranslation';

export const setTranslatedString = async (
  id: TranslationKeys,
  translatePromiseRef: TranslationPromise | null = null,
  callback: string => void | string,
) => {
  if (id) {
    const nativeKey = 'mobile.' + id;
    try {
      translatePromiseRef = cancellableTranslation(nativeKey);
      let translatedString = await translatePromiseRef.promise;
      if (translatedString === nativeKey) {
        // fallback to our dummy vocabulary because native code didn't provide translation
        translatedString = DefaultVocabulary[id];
      }
      if (translatedString === undefined) {
        // Everything failed - native translation even our fallback. This usually
        // means we are using key that does not exist. In this case the only thing
        // we can actually do is to use original key as a text.
        translatedString = id;
      }
      translatePromiseRef = null;
      return callback(translatedString);
    } catch (err) {
      translatePromiseRef = null;
    }
  }
};

export function replaceValues(text: string, values?: Object): string {
  const VARIABLE_REGEX = /__([0-9]+_)?([a-zA-Z-_]+)__/g;
  return text.replace(VARIABLE_REGEX, (match, variableIndex, variableName) => {
    // 'variableIndex' is currently being ignored (we don't need it)
    const value = values && values[variableName];
    return value !== undefined ? value : '?';
  });
}

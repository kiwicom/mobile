//@flow

import DefaultVocabulary, { type TranslationKeys } from './DefaultVocabulary';

export const getTranslation = (
  translatedString: ?string,
  translationId: TranslationKeys,
): string => {
  const nativeKey = `mobile.${translationId}`;

  if (translatedString === nativeKey) {
    // fallback to our dummy vocabulary because native code didn't provide translation
    return DefaultVocabulary[translationId];
  }
  if (translatedString == null) {
    // Everything failed - native translation even our fallback. This usually
    // means we are using key that does not exist. In this case the only thing
    // we can actually do is to use original key as a text.
    return translationId;
  }
  return translatedString;
};

export function replaceValues(text: string, values?: Object): string {
  const VARIABLE_REGEX = /__([0-9]+_)?([a-zA-Z-_]+)__/g;
  return text.replace(VARIABLE_REGEX, (match, variableIndex, variableName) => {
    // 'variableIndex' is currently being ignored (we don't need it)
    const value = values && values[variableName];
    return value !== undefined ? value : '?';
  });
}

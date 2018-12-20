//@flow

import DefaultVocabulary, {
  type TranslationKeys,
  type TranslationKeysObject,
} from './DefaultVocabulary';

export const getTranslation = (
  translatedString: ?string,
  translationId: TranslationKeys,
  vocabulary: TranslationKeysObject = DefaultVocabulary,
): string => {
  const nativeKey = `mobile.${translationId}`;
  const defaultTranslation = vocabulary[translationId];

  if (translatedString === nativeKey) {
    // fallback to our dummy vocabulary because native code didn't provide translation
    return defaultTranslation;
  }
  if (translatedString == null) {
    // Everything failed - native translation even our fallback. This usually
    // means we are using key that does not exist. In this case the only thing
    // we can actually do is to use original key as a text.
    return translationId;
  }

  // Translated strings from native come under the form
  // %1$@, so we lose information about the variables.
  // We add this information back in:
  try {
    const NATIVE_TRANSLATION_PARAM_REGEX = /%([0-9]+)\$@/g;
    const compatibleTranslatedString = translatedString.replace(
      NATIVE_TRANSLATION_PARAM_REGEX,
      (match, variableIndex) => {
        const ORIGINAL_PARAM_REGEX = new RegExp(
          `__(${variableIndex}_)?([a-zA-Z-_]+)__`,
          'g',
        );
        const originalParamMatches = defaultTranslation.match(
          ORIGINAL_PARAM_REGEX,
        );

        if (originalParamMatches == null || originalParamMatches.length !== 1) {
          throw new Error(
            `There was a problem with translationId ${translationId}`,
          );
        }

        return originalParamMatches[0];
      },
    );
    return compatibleTranslatedString;
  } catch (e) {
    return translatedString;
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

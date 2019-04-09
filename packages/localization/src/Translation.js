// @flow

import { translate } from '@kiwicom/rnmodules';

import vocabulary, { type TranslationKeys } from './DefaultVocabulary';
import { getTranslation, replaceValues } from './TranslationHelpers';

// Preload translations
Object.keys(vocabulary).forEach(async key => {
  const nativeKey = 'mobile.' + key;

  const translatedString = await translate(nativeKey);
  if (translatedString != null) {
    vocabulary[key] = getTranslation(translatedString, key);
  }
});

export default function translateId(id: TranslationKeys, values?: Object) {
  return replaceValues(vocabulary[id], values);
}

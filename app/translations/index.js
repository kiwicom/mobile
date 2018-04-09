// @flow

import * as React from 'react';

import Translation from './src/Translation';
import TranslationFragment from './src/TranslationFragment';
import DateFormatter from './src/DateFormatter';
import MapLocaleToLanguageQuery from './src/MapLocaleToLanguageQuery';

export { TranslationFragment, DateFormatter, MapLocaleToLanguageQuery };
export default Translation;

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof TranslationFragment>;

// @flow

import * as React from 'react';

import Translation from './src/Translation';
import DummyTranslation from './src/DummyTranslation';
import TranslationFragment from './src/TranslationFragment';
import DateFormatter from './src/DateFormatter';

export { DummyTranslation, TranslationFragment, DateFormatter };
export default Translation;

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof DummyTranslation>
  | React.Element<typeof TranslationFragment>;

// @flow

import * as React from 'react';

import Translation from './src/Translation';
import TranslationFragment from './src/TranslationFragment';
import DateFormatter from './src/DateFormatter';
import DateUtils from './src/DateUtils';
import GetDeviceLocale from './src/GetDeviceLocale';

export {
  TranslationFragment,
  DateFormatter,
  DateUtils,
  GetDeviceLocale,
  Translation,
};

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof TranslationFragment>;

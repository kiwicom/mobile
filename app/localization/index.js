// @flow

import * as React from 'react';

import Translation from './src/Translation';
import TranslationFragment from './src/TranslationFragment';
import DateFormatter from './src/DateFormatter';
import GetDeviceLocale from './src/GetDeviceLocale';

export { TranslationFragment, DateFormatter, GetDeviceLocale, Translation };

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof TranslationFragment>;

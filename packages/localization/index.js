// @flow strict

import * as React from 'react';

import Translation from './src/Translation';
import TranslationFragment from './src/TranslationFragment';
import DateFormatter from './src/DateFormatter';
import DateUtils from './src/DateUtils';
import DeviceInfo from './src/GetDeviceLocale';

export {
  TranslationFragment,
  DateFormatter,
  DateUtils,
  DeviceInfo,
  Translation,
};

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof TranslationFragment>;

// @flow strict

import * as React from 'react';

import Translation from './src/Translation';
import Alert, { type Translation as AlertTranslation } from './src/Alert';
import TranslationFragment from './src/TranslationFragment';
import DateFormatter from './src/DateFormatter';
import DateUtils from './src/DateUtils';
import DeviceInfo from './src/GetDeviceLocale';
import Tooltips, {
  type Translation as TooltipsTranslation,
} from './src/Tooltips';
import type { TranslationKeys } from './src/DefaultVocabulary';

export {
  TranslationFragment,
  DateFormatter,
  DateUtils,
  DeviceInfo,
  Translation,
  Alert,
  Tooltips,
};

export type TranslationKeysType = TranslationKeys;
export type AlertTranslationType = AlertTranslation;
export type TooltipsTranslationType = TooltipsTranslation;

export type DateFormatterFunctions =
  | 'formatToDate'
  | 'formatToTime'
  | 'formatToShortDate'
  | 'formatToBirthday'
  | 'formatForMachine';

export type TranslationType =
  | React.Element<typeof Translation>
  | React.Element<typeof TranslationFragment>;

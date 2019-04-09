// @flow strict

import getTranslation from './src/Translation';
import Alert, { type Translation as AlertTranslation } from './src/Alert';
import DateFormatter from './src/DateFormatter';
import DateUtils from './src/DateUtils';
import DeviceInfo from './src/GetDeviceLocale';
import type { TranslationKeys } from './src/DefaultVocabulary';
import { type SupportedTransformationsType as _SupportedTransformationsType } from './src/transformations/CaseTransform';

export { DateFormatter, DateUtils, DeviceInfo, getTranslation, Alert };

export { default as CaseTransform } from './src/transformations/CaseTransform';
export { replaceValues } from './src/TranslationHelpers';

export type TranslationKeysType = TranslationKeys;
export type AlertTranslationType = AlertTranslation;

export type DateFormatterFunctions =
  | 'formatToDate'
  | 'formatToTime'
  | 'formatToShortDate'
  | 'formatToBirthday'
  | 'formatForMachine';

export type SupportedTransformationsType = _SupportedTransformationsType;

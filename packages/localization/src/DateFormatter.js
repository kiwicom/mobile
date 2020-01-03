// @flow strict

import { enGB } from 'date-fns/locale';
import { format } from 'date-fns';

import { getLanguage } from './GetDeviceLocale';
import DateUtils from './DateUtils';
import dateLanguageMap from './dateFnsLanguageMap';

const locale = dateLanguageMap[getLanguage()] ?? enGB; // fallback to default locale

function date(date: Date) {
  return format(date, 'E, MM/dd', {
    locale,
  });
}

function custom(date: Date, dateFormat: string) {
  return format(date, dateFormat, { locale });
}

function pad(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

/**
 * Purpose of this wrapper is to make very opinionated and restrictive
 * formatter. Every function is localized and you should never call formatting
 * on the raw Date object.
 */
function DateFormatter(rawDate: Date = DateUtils.getUTCNow()) {
  return {
    formatToDate: () => date(rawDate),

    /**
     * Always returns YYYY-MM-DD at this moment.
     */
    formatForMachine: () => {
      return `${rawDate.getUTCFullYear()}-${pad(rawDate.getUTCMonth() + 1)}-${pad(
        rawDate.getUTCDate(),
      )}`;
    },

    // Pass in your own configuration
    formatCustom: (dateFormat: string) => custom(rawDate, dateFormat),
  };
}

export default DateFormatter;

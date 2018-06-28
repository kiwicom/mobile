// @flow strict

import { getLocaleDashed } from './GetDeviceLocale';

import 'intl'; // Polyfill because of Android
import 'intl/locale-data/complete';

// language prop passed from native code is not accessible at this point
const DEVICE_LOCALE = getLocaleDashed();

function date(date: Date, timeZone: string) {
  return Intl.DateTimeFormat(DEVICE_LOCALE, {
    timeZone,
    weekday: 'short',
    month: 'numeric',
    day: 'numeric',
  }).format(date);
}

function time(date: Date, timeZone: string) {
  return Intl.DateTimeFormat(DEVICE_LOCALE, {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
}

function birthday(date: Date, timeZone: string) {
  return Intl.DateTimeFormat(DEVICE_LOCALE, {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);
}

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

/**
 * Purpose of this wrapper is to make very opinionated and restrictive
 * formatter. Every function is localized and you should never call formatting
 * on the raw Date object.
 */
function DateFormatter(rawDate: Date = new Date()) {
  return {
    formatToDate: (timeZone: string = 'UTC') => date(rawDate, timeZone),
    formatToTime: (timeZone: string = 'UTC') => time(rawDate, timeZone),

    // note: I am not sure about the naming - improve when needed
    formatToBirthday: (timeZone: string = 'UTC') => birthday(rawDate, timeZone),

    /**
     * Always returns YYYY-MM-DD at this moment.
     */
    formatForMachine: () => {
      return (
        rawDate.getUTCFullYear() +
        '-' +
        pad(rawDate.getUTCMonth() + 1) +
        '-' +
        pad(rawDate.getUTCDate())
      );
    },
  };
}

export default DateFormatter;

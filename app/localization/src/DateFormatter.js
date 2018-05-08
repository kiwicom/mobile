// @flow strict

import moment from 'moment/min/moment-with-locales'; // eslint-disable-line no-restricted-imports

import getDeviceLocale from './GetDeviceLocale';

// Language prop passed from native code is not accessible at this point.
moment.locale(getDeviceLocale());

// moment.forat('L') returns a string like DD/MM/YYYY or DD.MM.YYYY depending on current locale
// This function will chop of the year
moment.getLocalizedWithoutYear = (date: moment) => {
  return moment(date)
    .format('L')
    .substring(0, 5);
};
export default moment;

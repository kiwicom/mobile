// @flow

import moment from 'moment/min/moment-with-locales'; // eslint-disable-line no-restricted-imports

import getDeviceLocale from './GetDeviceLocale';

// Language prop passed from native code is not accessible at this point.
moment.locale(getDeviceLocale());

export default moment;

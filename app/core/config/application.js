// @flow

import { SENTRY_DSN } from 'react-native-dotenv';

const application = {
  animations: {
    duration: 100, // ms
  },
  sentry: {
    dsn: sanitize(SENTRY_DSN),
    enableInExpoDevelopment: false,
  },
};

/**
 * Assigning a property on process.env will implicitly convert the value
 * to a string. (see: https://nodejs.org/api/process.html#process_process_env)
 *
 * This is very confusing and this function will convert booleans, null and
 * undefined values back to the normal world. All other values are returned
 * "as is" which means that for example numbers are converted to strings.
 */
function sanitize(environmentVariable: string) {
  switch (environmentVariable) {
    case 'true':
      return true;
    case 'false':
      return false;
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    default:
      return environmentVariable;
  }
}

export default application;

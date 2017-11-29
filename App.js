// @flow

import Sentry from 'sentry-expo';

import config from './app/native/config/application';

if (config.sentry.dsn) {
  Sentry.enableInExpoDevelopment = config.sentry.enableInExpoDevelopment;
  Sentry.config(config.sentry.dsn).install();
}

export { default } from './app/native/src/navigation';

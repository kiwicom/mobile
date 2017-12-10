// @flow

import Sentry from 'sentry-expo';

import config from './app/core/config/application';

if (config.sentry.dsn) {
  Sentry.enableInExpoDevelopment = config.sentry.enableInExpoDevelopment;
  Sentry.config(config.sentry.dsn).install();
}

export { default } from './app/core/src/navigation';

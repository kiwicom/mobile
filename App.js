// @flow

import Sentry from 'sentry-expo';

import config from './app/native/config/application';

Sentry.enableInExpoDevelopment = config.sentry.enableInExpoDevelopment;
Sentry.config(config.sentry.dsn).install();

export { default } from './app/native/src/navigation';

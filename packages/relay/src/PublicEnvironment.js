// @flow strict

import type { Environment as RelayEnvironment } from '@adeira/relay';

import createEnvironment from './Environment';

export default new (class PublicEnvironment {
  environment: RelayEnvironment;

  constructor() {
    this.environment = createEnvironment();
  }

  getEnvironment = () => {
    return this.environment;
  };
})();

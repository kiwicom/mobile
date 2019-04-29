// @flow strict

import createEnvironment from './Environment';

export default new (class PublicEnvironment {
  environment = {};

  constructor() {
    this.environment = createEnvironment();
  }

  getEnvironment = () => {
    return this.environment;
  };
})();

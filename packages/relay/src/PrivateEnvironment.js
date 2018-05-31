// @flow

import createEnvironment from './Environment';

export default new class PrivateEnvironment {
  environment = null;
  token = null;

  getEnvironment = (token: string) => {
    if (!token) {
      throw new Error('Cannot create private environment without token.');
    }

    if (this.environment === null || token !== this.token) {
      this.environment = createEnvironment(token);
    }

    this.token = token;
    return this.environment;
  };
}();

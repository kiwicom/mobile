// @flow

import createEnvironment from './Environment';

class PrivateEnvironment {
  environment = null;
  token = null;
  currentPartialErrorHandler: Object => void;

  partialErrorHandler = (error: Object) => {
    this.currentPartialErrorHandler(error);
  };

  getEnvironment = (partialErrorHandler: Object => void, token: string) => {
    if (!token) {
      throw new Error('Can not create private environment without token.');
    }

    if (this.environment === null || token !== this.token) {
      this.environment = createEnvironment(this.partialErrorHandler, token);
    }

    this.token = token;
    this.currentPartialErrorHandler = partialErrorHandler;
    return this.environment;
  };
}

const privateEnvironment = new PrivateEnvironment();
export default privateEnvironment;

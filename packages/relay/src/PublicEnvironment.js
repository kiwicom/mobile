// @flow

import createEnvironment from './Environment';

class PublicEnvironment {
  environment = null;
  currentPartialErrorHandler: Object => void;

  constructor() {
    this.environment = createEnvironment(this.partialErrorHandler, '');
  }

  partialErrorHandler = (error: Object) => {
    this.currentPartialErrorHandler(error);
  };

  getEnvironment = (partialErrorHandler: Object => void) => {
    this.currentPartialErrorHandler = partialErrorHandler;
    return this.environment;
  };
}

const publicEnvironment = new PublicEnvironment();
export default publicEnvironment;

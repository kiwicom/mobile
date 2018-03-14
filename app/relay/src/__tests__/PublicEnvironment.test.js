// @flow

import PublicEnvironment from '../PublicEnvironment';
import createEnvironment from '../Environment';

jest.mock('../Environment.js', () => jest.fn(() => 'environment'));

describe('PublicEnvironment', () => {
  it('should be initiated with an environment', () => {
    expect(createEnvironment).toHaveBeenCalledTimes(1);
    expect(PublicEnvironment.environment).toEqual('environment');
  });

  it('should set a partial error handler', () => {
    const errorHandler = jest.fn();

    PublicEnvironment.getEnvironment(errorHandler);
    expect(PublicEnvironment.currentPartialErrorHandler).toEqual(errorHandler);
  });

  it('should call the partial error handler on partial error', () => {
    const errorHandler = jest.fn();

    PublicEnvironment.getEnvironment(errorHandler);
    PublicEnvironment.partialErrorHandler({ error: 'error' });
    expect(errorHandler).toBeCalledWith({ error: 'error' });
  });
});

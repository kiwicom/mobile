// @flow

import PublicEnvironment from '../PublicEnvironment';
import createEnvironment from '../Environment';

jest.mock('../Environment.js', () => jest.fn(() => 'environment'));

describe('PublicEnvironment', () => {
  it('should be initiated with an environment', () => {
    expect(createEnvironment).toHaveBeenCalledTimes(1);
    expect(PublicEnvironment.environment).toEqual('environment');
  });

  it('should return the same environment instances', () => {
    expect(PublicEnvironment.getEnvironment()).toBe(
      PublicEnvironment.getEnvironment(),
    );
  });
});

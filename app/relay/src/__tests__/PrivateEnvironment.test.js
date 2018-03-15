// @flow

import PrivateEnvironment from '../PrivateEnvironment';
import createEnvironment from '../Environment';

jest.mock('../Environment');

let count = 0;
// $FlowExpectedError: mockImplementation does exists, but flow does not know about it
createEnvironment.mockImplementation(() => {
  return `environment ${++count}`;
});

let currentPartialErrorHandlerIntial =
  PrivateEnvironment.currentPartialErrorHandler;

afterEach(() => {
  PrivateEnvironment.environment = null;
  PrivateEnvironment.token = null;
  PrivateEnvironment.currentPartialErrorHandler = currentPartialErrorHandlerIntial;
  count = 0;
});

describe('PrivateEnvironment', () => {
  it('should be initiated without values', () => {
    expect(PrivateEnvironment.environment).toBe(null);
    expect(PrivateEnvironment.token).toBe(null);
    expect(PrivateEnvironment.currentPartialErrorHandler).toBeUndefined();
    expect(createEnvironment).not.toHaveBeenCalled();
  });

  it('should throw an error if token is undefined, null or empty string', () => {
    const errorHandler = jest.fn();
    let token1;
    const token2 = null;
    const token3 = '';

    expect(() => {
      PrivateEnvironment.getEnvironment(errorHandler, token1);
    }).toThrowError('Cannot create private environment without token.');

    expect(() => {
      // $FlowExpectedError: Intentionally testing what happens if null is passed
      PrivateEnvironment.getEnvironment(errorHandler, token2);
    }).toThrowError('Cannot create private environment without token.');

    expect(() => {
      PrivateEnvironment.getEnvironment(errorHandler, token3);
    }).toThrowError('Cannot create private environment without token.');

    expect(createEnvironment).not.toHaveBeenCalled();
  });

  it('creates a new environment if one does not exist', () => {
    const errorHandler = jest.fn();
    const token = 'myToken';

    PrivateEnvironment.getEnvironment(errorHandler, token);
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual(token);
    expect(PrivateEnvironment.currentPartialErrorHandler).toEqual(errorHandler);
  });

  it('creates a new environment if token changes', () => {
    const errorHandler = jest.fn();
    const token = 'myToken';
    const newToken = 'newToken';

    PrivateEnvironment.getEnvironment(errorHandler, token);
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual(token);
    expect(PrivateEnvironment.currentPartialErrorHandler).toEqual(errorHandler);

    PrivateEnvironment.getEnvironment(errorHandler, newToken);
    expect(PrivateEnvironment.environment).toEqual('environment 2');
    expect(PrivateEnvironment.token).toEqual(newToken);
    expect(PrivateEnvironment.currentPartialErrorHandler).toEqual(errorHandler);
  });

  it('does not create a new environment if token is the same', () => {
    const errorHandler = jest.fn();
    const token = 'myToken';

    PrivateEnvironment.getEnvironment(errorHandler, token);
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual(token);
    expect(PrivateEnvironment.currentPartialErrorHandler).toEqual(errorHandler);

    PrivateEnvironment.getEnvironment(errorHandler, token);
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual(token);
    expect(PrivateEnvironment.currentPartialErrorHandler).toEqual(errorHandler);
  });

  it('calls error handler on partial error', () => {
    const errorHandler = jest.fn();
    const token = 'myToken';

    PrivateEnvironment.getEnvironment(errorHandler, token);
    PrivateEnvironment.partialErrorHandler({ error: 'error' });
    expect(errorHandler).toBeCalledWith({ error: 'error' });
  });
});

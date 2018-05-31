// @flow

import PrivateEnvironment from '../PrivateEnvironment';
import createEnvironment from '../Environment';

jest.mock('../Environment');

let count = 0;
// $FlowExpectedError: mockImplementation does exists, but flow does not know about it
createEnvironment.mockImplementation(() => {
  return `environment ${++count}`;
});

afterEach(() => {
  PrivateEnvironment.environment = null;
  PrivateEnvironment.token = null;
  count = 0;
});

describe('PrivateEnvironment', () => {
  it('should be initiated without values', () => {
    expect(PrivateEnvironment.environment).toBe(null);
    expect(PrivateEnvironment.token).toBe(null);
    expect(createEnvironment).not.toHaveBeenCalled();
  });

  it('should throw an error if token is undefined, null or empty string', () => {
    expect(() => {
      // $FlowExpectedError: Intentionally testing what happens if undefined is passed
      PrivateEnvironment.getEnvironment(undefined);
    }).toThrowError('Cannot create private environment without token.');

    expect(() => {
      // $FlowExpectedError: Intentionally testing what happens if null is passed
      PrivateEnvironment.getEnvironment(null);
    }).toThrowError('Cannot create private environment without token.');

    expect(() => {
      PrivateEnvironment.getEnvironment('');
    }).toThrowError('Cannot create private environment without token.');

    expect(createEnvironment).not.toHaveBeenCalled();
  });

  it('creates a new environment if one does not exist', () => {
    PrivateEnvironment.getEnvironment('myToken');
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual('myToken');
  });

  it('creates a new environment if token changes', () => {
    PrivateEnvironment.getEnvironment('myToken');
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual('myToken');

    PrivateEnvironment.getEnvironment('newToken');
    expect(PrivateEnvironment.environment).toEqual('environment 2');
    expect(PrivateEnvironment.token).toEqual('newToken');
  });

  it('does not create a new environment if token is the same', () => {
    const e1 = PrivateEnvironment.getEnvironment('myToken');
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual('myToken');

    const e2 = PrivateEnvironment.getEnvironment('myToken');
    expect(PrivateEnvironment.environment).toEqual('environment 1');
    expect(PrivateEnvironment.token).toEqual('myToken');

    expect(e1).toBe(e2);
  });
});

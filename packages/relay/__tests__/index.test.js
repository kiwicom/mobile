// @flow strict

import Relay from 'react-relay'; // eslint-disable-line no-restricted-imports

import { commitMutation } from '../';
import ConnectionManager from '../src/ConnectionManager';
import PrivateEnvironment from '../src/PrivateEnvironment';
import PublicEnvironment from '../src/PublicEnvironment';

jest.mock('react-relay', () => ({
  commitMutation: jest.fn(),
}));

jest.mock('@kiwicom/mobile-localization', () => ({
  Alert: {
    translatedAlert: jest.fn(),
  },
}));

jest.mock('../src/ConnectionManager.js', () => {
  let desiredReturn = false;
  return {
    isConnected: () => desiredReturn,
    setDesiredReturn: (input: boolean) => {
      desiredReturn = input;
    },
  };
});

jest.mock('../src/PublicEnvironment.js', () => ({
  getEnvironment: jest.fn(),
}));
jest.mock('../src/PrivateEnvironment.js', () => ({
  getEnvironment: jest.fn(),
}));
jest.mock('../src/Environment.js');

const config = {
  mutation: 'test',
  variables: {},
  onCompleted: jest.fn(),
};

describe('commitMutation', () => {
  it('does not call network if there is no connection', () => {
    commitMutation(config);
    expect(Relay.commitMutation).not.toHaveBeenCalled();
    expect(config.onCompleted).toHaveBeenCalledWith(
      { data: null },
      'No connection',
    );
  });

  it('does calls commit mutation and PrivateEnvironment if there is connection and a token', () => {
    // $FlowExpectedError: method does not exist on class, but in mock
    ConnectionManager.setDesiredReturn(true);
    commitMutation(config, 'token');
    expect(Relay.commitMutation).toHaveBeenCalled();
    expect(PrivateEnvironment.getEnvironment).toHaveBeenCalledWith('token');
  });

  it('does calls commit mutation and PublicEnvironment if there is connection but not a token', () => {
    // $FlowExpectedError: method does not exist on class, but in mock
    ConnectionManager.setDesiredReturn(true);
    commitMutation(config);
    expect(Relay.commitMutation).toHaveBeenCalled();
    expect(PublicEnvironment.getEnvironment).toHaveBeenCalledWith();
  });
});

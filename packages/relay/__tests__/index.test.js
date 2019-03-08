// @flow strict

import Relay from '@kiwicom/relay';

import { commitMutation } from '..';

import ConnectionManager from '../src/ConnectionManager';
import PrivateEnvironment from '../src/PrivateEnvironment';
import PublicEnvironment from '../src/PublicEnvironment';

jest.mock('@kiwicom/relay', () => ({
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
  getEnvironment: jest.fn(() => 'public environment'),
}));
jest.mock('../src/PrivateEnvironment.js', () => ({
  getEnvironment: jest.fn(() => 'private environment'),
}));
jest.mock('../src/Environment.js');

const config = {
  mutation: 'test',
  variables: {},
  onCompleted: jest.fn(),
};

describe('commitMutation', () => {
  it('does not call network if there is no connection', () => {
    // $FlowExpectedError: Ok to pass string for testing
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
    expect(Relay.commitMutation).toHaveBeenCalledWith('private environment', {
      mutation: 'test',
      onCompleted: config.onCompleted,
      variables: {},
    });
    expect(PrivateEnvironment.getEnvironment).toHaveBeenCalledWith('token');
  });

  it('does calls commit mutation and PublicEnvironment if there is connection but not a token', () => {
    // $FlowExpectedError: method does not exist on class, but in mock
    ConnectionManager.setDesiredReturn(true);
    commitMutation(config);
    expect(Relay.commitMutation).toHaveBeenCalledWith('public environment', {
      mutation: 'test',
      onCompleted: config.onCompleted,
      variables: {},
    });
    expect(PublicEnvironment.getEnvironment).toHaveBeenCalledWith();
  });
});

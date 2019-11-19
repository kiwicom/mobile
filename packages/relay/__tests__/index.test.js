// @flow strict

import Relay from '@kiwicom/relay';

import { commitMutation } from '..';

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
    commitMutation(null, config);
    expect(Relay.commitMutation).not.toHaveBeenCalled();
    expect(config.onCompleted).toHaveBeenCalledWith({ data: null }, 'No connection');
  });
});

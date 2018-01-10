// @flow

import UserReducer from '../UserReducer';

it('returns initial state for unknown actions', () => {
  expect(
    // $FlowExpectedError: action type 'unknown' is not valid action type
    UserReducer(undefined, {
      type: 'unknown',
    }),
  ).toMatchSnapshot();
});

it('resolves the "login" action', () => {
  expect(
    UserReducer(undefined, {
      type: 'login',
      accessToken: 'acces_token',
    }),
  ).toMatchSnapshot();
});

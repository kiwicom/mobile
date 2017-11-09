// @flow

import SearchReducer from '../SearchReducer';

it('returns initial state for unknown actions', () => {
  expect(
    // $FlowExpectedError: action type 'unknown' is not valid action type
    SearchReducer(undefined, {
      type: 'unknown',
    }),
  ).toMatchSnapshot();
});

it('resolves the "updateFieldValue" action', () => {
  // add initial values to the state
  const state = SearchReducer(undefined, {
    type: 'updateFieldValue',
    identifier: 'ID1',
    value: 'ID1_value',
  });

  expect(
    // use already created state and update it with new values
    SearchReducer(state, {
      type: 'updateFieldValue',
      identifier: 'ID2',
      value: 'ID2_value',
    }),
  ).toMatchSnapshot();
});

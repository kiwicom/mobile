// @flow

import ConfigReducer from '../ConfigReducer';

let initialState;
let toggle;

beforeEach(() => {
  initialState = {
    dataSaverEnabled: false,
  };
  toggle = {
    type: 'TOGGLE_DATA_SAVER',
  };
});

it('toggles the action', () => {
  // $FlowExpectedError: 'UNKNOWN' action does not exist (therefore, it should return initial state)
  let newState = ConfigReducer(initialState, { type: 'UNKNOWN' });
  expect(newState).toBe(initialState);

  newState = ConfigReducer(newState, toggle);
  expect(newState).toEqual({ dataSaverEnabled: true });

  newState = ConfigReducer(newState, toggle);
  expect(newState).toEqual({ dataSaverEnabled: false });

  newState = ConfigReducer(newState, toggle);
  expect(newState).toEqual({ dataSaverEnabled: true });
});

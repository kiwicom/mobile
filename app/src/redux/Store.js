// @flow

import { createStore } from 'redux';

import type { ReduxState, ReduxActions } from '../../types/Redux';

const InitialState: ReduxState = {
  user: {
    logged: false,
    accessToken: null,
  },
};

const reducer = (state: ReduxState = InitialState, action: ReduxActions) => {
  if (action.type === 'login') {
    return {
      ...state,
      user: {
        ...state.user,
        logged: true,
        accessToken: action.accessToken,
      },
    };
  }
  if (action.type === 'logout') {
    return {
      ...state,
      user: {
        ...state.user,
        logged: false,
        accessToken: null,
      },
    };
  }
  return state;
};

export default createStore(reducer);

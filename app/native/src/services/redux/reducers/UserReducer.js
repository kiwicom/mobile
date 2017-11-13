// @flow

import { AsyncStorage } from 'react-native';

import type { ReduxState, ReduxActions } from '../../../types/Redux';

type UserState = $PropertyType<ReduxState, 'user'>;

const InitialUserState: UserState = {
  logged: false,
  accessToken: null,
};

export default (state: UserState = InitialUserState, action: ReduxActions) => {
  if (action.type === 'login') {
    return {
      ...state,
      logged: true,
      accessToken: action.accessToken,
    };
  }
  if (action.type === 'logout') {
    AsyncStorage.clear(); // clear all the local cache
    return {
      ...state,
      logged: false,
      accessToken: null,
    };
  }
  return state;
};

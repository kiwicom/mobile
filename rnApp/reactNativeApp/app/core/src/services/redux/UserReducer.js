// @flow

import { AsyncStorage } from 'react-native';

export type UserReducerState =
  | {|
      logged: true,
      accessToken: string,
    |}
  | {|
      logged: false,
      accessToken: null,
    |};

type UserReducerActions =
  | {| type: 'login', accessToken: string |}
  | {| type: 'logout' |};

const InitialUserState: UserReducerState = {
  logged: false,
  accessToken: null,
};

export default (
  state: UserReducerState = InitialUserState,
  action: UserReducerActions,
) => {
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

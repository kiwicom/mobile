// @flow

export type ReduxState = {|
  user:
    | {|
        logged: true,
        accessToken: string,
      |}
    | {|
        logged: false,
        accessToken: null,
      |},
|};

export type ReduxActions =
  | {| type: 'login', accessToken: string |}
  | {| type: 'logout' |};

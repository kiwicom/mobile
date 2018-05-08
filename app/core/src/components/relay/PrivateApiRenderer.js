// @flow

import * as React from 'react';
import {
  PrivateApiRenderer as PrivateApiRendererOriginal,
  type QueryRendererProps,
} from '@kiwicom/mobile-relay';

import Login from '../authentication/Login';

type Props = {|
  ...QueryRendererProps,
  onLogin: (accessToken: string) => void,
|};

const VoidLoginAction = accessToken => {
  console.warn(`TODO: Login - ${accessToken}`);
};

export default function PrivateApiRenderer(props: Props) {
  const user = {
    // TODO: this will be replaced with the React Context when needed
    logged: false,
    accessToken: null,
  };

  return user.logged ? (
    <PrivateApiRendererOriginal
      query={props.query}
      variables={props.variables}
      render={props.render}
    />
  ) : (
    <Login onLogin={VoidLoginAction} />
  );
}

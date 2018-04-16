// @flow

import * as React from 'react';
import { connect } from '@kiwicom/mobile-redux';
import {
  PrivateApiRenderer as PrivateApiRendererOriginal,
  type QueryRendererProps,
} from '@kiwicom/mobile-relay';

import Login from '../authentication/Login';
import type { UserReducerState } from '../../services/redux/UserReducer';

type Props = {|
  ...QueryRendererProps,
  user: UserReducerState,
  onLogin: (accessToken: string) => void,
|};

function PrivateApiRenderer(props: Props) {
  return props.user.logged ? (
    <PrivateApiRendererOriginal
      query={props.query}
      variables={props.variables}
      render={props.render}
      accessToken={props.user.accessToken}
    />
  ) : (
    <Login onLogin={props.onLogin} />
  );
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onLogin: accessToken => {
      dispatch({
        type: 'login',
        accessToken,
      });
    },
  }),
)(PrivateApiRenderer);

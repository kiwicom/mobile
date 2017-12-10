// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import {
  PrivateApiRenderer as PrivateApiRendererOriginal,
  type QueryRendererProps,
} from '@kiwicom/native-relay';

import Login from '../authentication/Login';

import type { ReduxState } from '../../types/Redux';

type Props = {|
  ...QueryRendererProps,
  user: $PropertyType<ReduxState, 'user'>,
  onLogin: (accessToken: string) => void,
|};

function PrivateApiRenderer(props: Props) {
  return props.user.logged ? (
    <PrivateApiRendererOriginal
      query={props.query}
      variables={props.variables}
      render={props.render}
      cacheConfig={props.cacheConfig}
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

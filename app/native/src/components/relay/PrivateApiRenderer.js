// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import Login from '../../components/authentication/Login';
import QueryRenderer from './QueryRenderer';

import type { ReduxState } from '../../types/Redux';
import type { Props as PublicProps } from './PublicApiRenderer';

type Props = {|
  ...PublicProps,
  user: $PropertyType<ReduxState, 'user'>,
  onLogin: (accessToken: string) => void,
|};

function PrivateApiRenderer(props: Props) {
  return props.user.logged ? (
    <QueryRenderer
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

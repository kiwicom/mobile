// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import { connect } from 'react-redux';

import createEnvironment from '../../services/relay/Environment';
import FullPageLoading from '../../components/visual/loaders/FullPageLoading';
import GeneralError from '../../components/errors/GeneralError';
import Login from '../../components/authentication/Login';

import type { ReduxState } from '../../types/Redux';

type Props = {|
  query: string,
  render: ({ error: Object, props: Object }) => React.Node,
  variables?: Object,
  cacheConfig?: {|
    force: boolean,
  |},
  user: $PropertyType<ReduxState, 'user'>,
  onLogin: (accessToken: string) => void,
|};

function publicApiRenderer({
  query,
  render,
  variables,
  cacheConfig,
  user,
  onLogin,
}: Props) {
  return user.logged ? (
    <QueryRenderer
      environment={createEnvironment(user.accessToken)}
      query={query}
      variables={variables}
      render={({ error, props }) => {
        // FIXME: it does not catch errors?
        if (error) {
          return <GeneralError errorMessage={error.message} />;
        } else if (props) {
          return render(props);
        }
        return <FullPageLoading />;
      }}
      cacheConfig={cacheConfig}
    />
  ) : (
    <Login onLogin={onLogin} />
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
)(publicApiRenderer);

// @flow strict

import * as React from 'react';

import QueryRenderer from './QueryRenderer';
import type { QueryRendererProps } from '../index';
import AuthContext from './AuthContext';

type PropsWithContext = {|
  ...Props,
  +accessToken: string | null,
|};

export function PrivateApiRenderer(props: PropsWithContext) {
  if (props.accessToken === null) {
    // TODO: Return login
    return null;
  }

  return (
    <QueryRenderer
      query={props.query}
      variables={props.variables}
      render={props.render}
      accessToken={props.accessToken}
      authHeaderKey={props.authHeaderKey}
      renderOfflineScreen={props.renderOfflineScreen}
      errorFooter={props.errorFooter}
    />
  );
}

type Props = {|
  ...QueryRendererProps,
  +authHeaderKey?: string,
|};

export default function PrivateApiRendererWithContext(props: Props) {
  return (
    <AuthContext.Consumer>
      {({ accessToken }) => (
        <PrivateApiRenderer {...props} accessToken={accessToken} />
      )}
    </AuthContext.Consumer>
  );
}

// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import createEnvironment from './Environment';

type Props = {
  accessToken: string,
  query: string,
  variables?: Object,
  render: ({ error: Object, props: Object }) => React.Node,
};

export default function publicApiRenderer({
  accessToken,
  query,
  variables,
  render,
}: Props) {
  return (
    <QueryRenderer
      environment={createEnvironment(accessToken)}
      query={query}
      variables={variables}
      render={render}
    />
  );
}

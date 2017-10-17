// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import createEnvironment from '../../src/relay/Environment';

type Props = {
  accessToken: string,
  query: string,
  render: ({ error: Object, props: Object }) => React.Node,
  variables?: Object,
  cacheConfig?: {
    offline: boolean,
  },
};

export default function publicApiRenderer({
  accessToken,
  query,
  render,
  variables,
  cacheConfig,
}: Props) {
  return (
    <QueryRenderer
      environment={createEnvironment(accessToken)}
      query={query}
      variables={variables}
      render={render}
      cacheConfig={cacheConfig}
    />
  );
}

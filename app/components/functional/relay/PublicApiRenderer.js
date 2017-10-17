// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import createEnvironment from '../../../src/relay/Environment';

type Props = {
  query: string,
  render: ({ error: Object, props: Object }) => React.Node,
  variables?: Object,
  cacheConfig?: {
    offline: boolean,
  },
};

export default function publicApiRenderer({
  query,
  render,
  variables,
  cacheConfig,
}: Props) {
  return (
    <QueryRenderer
      environment={createEnvironment()}
      query={query}
      variables={variables}
      render={render}
      cacheConfig={cacheConfig}
    />
  );
}

// @flow

import * as React from 'react';

import QueryRenderer from './QueryRenderer';

export type Props = {|
  query: string,
  render: (props: Object) => React.Node,
  variables?: Object,
  cacheConfig?: {|
    force: boolean,
  |},
|};

export default function PublicApiRenderer(props: Props) {
  return (
    <QueryRenderer
      query={props.query}
      variables={props.variables}
      render={props.render}
      cacheConfig={props.cacheConfig}
    />
  );
}

// @flow

import * as React from 'react';

import QueryRenderer from './QueryRenderer';

import type { QueryRendererProps } from '../index';

type Props = {|
  ...QueryRendererProps,
  accessToken: string,
|};

export default function PrivateApiRenderer(props: Props) {
  return (
    <QueryRenderer
      query={props.query}
      variables={props.variables}
      render={props.render}
      cacheConfig={props.cacheConfig}
      accessToken={props.accessToken}
    />
  );
}

// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import Environment from '../src/Environment';

type Props = {
  query: string,
  variables?: Object,
  render: ({ error: Object, props: Object }) => React.Node,
};

export default function publicApiRenderer({ query, variables, render }: Props) {
  return (
    <QueryRenderer
      environment={Environment}
      query={query}
      variables={variables}
      render={render}
    />
  );
}

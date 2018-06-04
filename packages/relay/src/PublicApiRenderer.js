// @flow strict

import * as React from 'react';

import QueryRenderer from './QueryRenderer';
import type { QueryRendererProps } from '../index';

export default function PublicApiRenderer(props: QueryRendererProps) {
  return (
    <QueryRenderer
      query={props.query}
      variables={props.variables}
      render={props.render}
    />
  );
}

// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import Environment from '../src/Environment';

export default ({ query, variables, render }) => (
  <QueryRenderer
    environment={Environment}
    query={query}
    variables={variables}
    render={render}
  />
);

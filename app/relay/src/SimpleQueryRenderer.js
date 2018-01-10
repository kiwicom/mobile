// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';

import createEnvironment from './Environment';
import type { QueryRendererProps } from '../index';

type Props = {|
  ...QueryRendererProps,
  accessToken?: string,
|};

export default class SimpleQueryRenderer extends React.Component<Props> {
  partialError: Object;

  createEnvironment = () =>
    createEnvironment(partialError => {
      this.partialError = partialError;
    }, this.props.accessToken || '');

  render = () => {
    return (
      <OriginalQueryRenderer
        environment={this.createEnvironment()}
        query={this.props.query}
        variables={this.props.variables}
        render={this.props.render}
        cacheConfig={this.props.cacheConfig}
      />
    );
  };
}

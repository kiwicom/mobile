// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';
import {
  FullPageLoading,
  GeneralError,
} from '@kiwicom/react-native-app-common';

import createEnvironment from './Environment';

import type { QueryRendererProps } from '../index';

type Props = {|
  ...QueryRendererProps,
  accessToken?: string,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderRelayContainer = ({
    error,
    props,
  }: {
    error: Object,
    props: Object,
  }) => {
    // FIXME: Relay swallows all GraphQL errors
    if (error) {
      return <GeneralError errorMessage={error.message} />;
    } else if (props) {
      return this.props.render(props);
    }
    return <FullPageLoading />;
  };

  render = () => {
    return (
      <OriginalQueryRenderer
        environment={createEnvironment(this.props.accessToken || '')}
        query={this.props.query}
        variables={this.props.variables}
        render={this.renderRelayContainer}
        cacheConfig={this.props.cacheConfig}
      />
    );
  };
}

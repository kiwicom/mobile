// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';
import {
  FullPageLoading,
  GeneralError,
  PartialFailure,
} from '@kiwicom/react-native-app-shared';

import createEnvironment from './Environment';
import type { QueryRendererProps } from '../index';

type Props = {|
  ...QueryRendererProps,
  accessToken?: string,
|};

export default class QueryRenderer extends React.Component<Props> {
  partialError: Object;

  createEnvironment = () =>
    createEnvironment(partialError => {
      this.partialError = partialError;
    }, this.props.accessToken || '');

  renderRelayContainer = ({
    error,
    props,
  }: {
    error?: Object,
    props?: Object,
  }) => {
    if (error) {
      if (error.message === 'Network request failed') {
        // See: https://github.com/github/fetch/blob/fcc4e1b48cfb5a2b1625fcd6eac06d954b00ccb6/fetch.js#L438-L444
        return (
          <GeneralError errorMessage="No internet connection, please check your internet settings or try it later." />
        );
      }

      // total failure (data == null, errors != null)
      return <GeneralError errorMessage={error.message} />;
    }

    if (props) {
      if (this.partialError) {
        // partial failure (data != null, errors != null)
        // Relay swallows all GraphQL errors if 'data != null' (see: https://github.com/facebook/relay/issues/1913)

        console.log('QueryRenderer partial error:'); // eslint-disable-line no-console
        console.log(JSON.stringify(this.partialError, null, 2)); // eslint-disable-line no-console

        return <PartialFailure>{this.props.render(props)}</PartialFailure>;
      }

      // success (data != null, errors == null)
      return this.props.render(props);
    }

    // no data or errors yet
    return <FullPageLoading />;
  };

  render = () => {
    return (
      <OriginalQueryRenderer
        environment={this.createEnvironment()}
        query={this.props.query}
        variables={this.props.variables}
        render={this.renderRelayContainer}
        cacheConfig={this.props.cacheConfig}
      />
    );
  };
}

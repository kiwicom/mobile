// @flow

import * as React from 'react';
import { QueryRenderer as KiwicomQueryRenderer } from '@kiwicom/relay';
import {
  FullPageLoading,
  GeneralError,
  Translation,
} from '@kiwicom/mobile-shared';
import { TimeoutError } from '@kiwicom/fetch';

import PublicEnvironment from './PublicEnvironment';
import PrivateEnvironment from './PrivateEnvironment';
import type { QueryRendererProps } from '../index';

type Props = {|
  ...QueryRendererProps,
  +accessToken?: string,
  +authHeaderKey?: string,
|};

type RendererResponse = {
  +error: Error,
  +retry: ?() => void,
};

const noConnectionErrorMessages = [
  'Network request failed', // See: https://github.com/github/fetch/blob/fcc4e1b48cfb5a2b1625fcd6eac06d954b00ccb6/fetch.js#L438-L444
  'No network',
];

export default class QueryRenderer extends React.Component<Props> {
  createEnvironment = () => {
    const accessToken = this.props.accessToken;
    if (accessToken == null || accessToken === '') {
      return PublicEnvironment.getEnvironment();
    }

    return PrivateEnvironment.getEnvironment(
      accessToken,
      this.props.authHeaderKey,
    );
  };

  renderRelayContainer = ({ error, retry }: RendererResponse) => {
    let Component = null;
    if (error && noConnectionErrorMessages.includes(error.message)) {
      if (this.props.renderOfflineScreen != null && retry != null) {
        return this.props.renderOfflineScreen(retry);
      }
      Component = (
        <GeneralError
          errorMessage={<Translation id="relay.query_renderer.no_connection" />}
        />
      );
    } else if (error instanceof TimeoutError) {
      Component = (
        <GeneralError
          errorMessage={<Translation id="relay.query_renderer.timeout" />}
        />
      );
    } else if (error) {
      // total failure (data == null, errors != null)
      Component = (
        <GeneralError
          errorMessage={<Translation passThrough={error.message} />}
        />
      );
    }

    return (
      <React.Fragment>
        {Component}
        {this.props.errorFooter}
      </React.Fragment>
    );
  };

  onLoading = () => <FullPageLoading />;

  render() {
    return (
      <KiwicomQueryRenderer
        environment={this.createEnvironment()}
        query={this.props.query}
        variables={this.props.variables}
        onLoading={this.onLoading}
        onResponse={this.props.render}
        onSystemError={this.renderRelayContainer}
      />
    );
  }
}

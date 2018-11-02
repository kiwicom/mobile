// @flow

import * as React from 'react';
import Relay from 'react-relay'; // eslint-disable-line no-restricted-imports
import { FullPageLoading, GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { TimeoutError } from '@mrtnzlml/fetch';

import PublicEnvironment from './PublicEnvironment';
import PrivateEnvironment from './PrivateEnvironment';
import type { QueryRendererProps } from '../index';

type Props = {|
  ...QueryRendererProps,
  +accessToken?: string,
|};

type RendererResponse = {|
  +error?: Object,
  +props?: Object,
|};

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

    return PrivateEnvironment.getEnvironment(accessToken);
  };

  renderRelayContainer = ({ error, props }: RendererResponse) => {
    if (error && noConnectionErrorMessages.includes(error.message)) {
      return (
        <GeneralError
          errorMessage={<Translation id="relay.query_renderer.no_connection" />}
        />
      );
    } else if (error instanceof TimeoutError) {
      return (
        <GeneralError
          errorMessage={<Translation id="relay.query_renderer.timeout" />}
        />
      );
    } else if (error) {
      // total failure (data == null, errors != null)
      return (
        <GeneralError
          errorMessage={<Translation passThrough={error.message} />}
        />
      );
    }

    if (props) {
      // success (data != null, errors == null)
      return this.props.render(props);
    }

    // no data or errors yet
    return <FullPageLoading />;
  };

  render = () => {
    return (
      <Relay.QueryRenderer
        environment={this.createEnvironment()}
        query={this.props.query}
        variables={this.props.variables}
        render={this.renderRelayContainer}
      />
    );
  };
}

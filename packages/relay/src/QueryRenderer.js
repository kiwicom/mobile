// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from '@kiwicom/mobile-relay';
import { FullPageLoading, GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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

export default class QueryRenderer extends React.Component<Props> {
  createEnvironment = () => {
    if (!this.props.accessToken) {
      return PublicEnvironment.getEnvironment();
    }

    return PrivateEnvironment.getEnvironment(this.props.accessToken || '');
  };

  renderRelayContainer = ({ error, props }: RendererResponse) => {
    if (error) {
      if (error.message === 'Network request failed') {
        // See: https://github.com/github/fetch/blob/fcc4e1b48cfb5a2b1625fcd6eac06d954b00ccb6/fetch.js#L438-L444
        return (
          <GeneralError
            errorMessage={
              <Translation id="relay.query_renderer.no_connection" />
            }
          />
        );
      }

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
      <OriginalQueryRenderer
        environment={this.createEnvironment()}
        query={this.props.query}
        variables={this.props.variables}
        render={this.renderRelayContainer}
      />
    );
  };
}

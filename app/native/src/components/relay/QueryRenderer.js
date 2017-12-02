// @flow

import * as React from 'react';
import { QueryRenderer as OriginalQueryRenderer } from 'react-relay';
import { FullPageLoading } from '@kiwicom/native-common';

import createEnvironment from '../../services/relay/Environment';
import GeneralError from '../../components/errors/GeneralError';

import type { Props as PublicProps } from './PublicApiRenderer';

type Props = {|
  ...PublicProps,
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

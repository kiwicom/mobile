// @flow

import * as React from 'react';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import { OfflineScreen } from '@kiwicom/mobile-shared';
import { StatusBar } from 'react-native';

type Props = {|
  +render: (props: Object) => React.Node,
  +query: string,
  +variables: Object,
|};

export default class PaymentQueryRenderer extends React.Component<Props> {
  renderOfflineScreen = (retry: () => void) => (
    <OfflineScreen onTryAgain={retry} />
  );

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <PublicApiRenderer
          renderOfflineScreen={this.renderOfflineScreen}
          render={this.props.render}
          query={this.props.query}
          variables={this.props.variables}
        />
      </React.Fragment>
    );
  }
}

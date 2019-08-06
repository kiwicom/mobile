// @flow

import * as React from 'react';
import { PublicApiRenderer, type GraphQLTaggedNode } from '@kiwicom/mobile-relay';
import { OfflineScreen } from '@kiwicom/mobile-shared';

import CloseModal from '../../components/CloseModal';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: Object,
  +render: (props: Object) => React.Node,
  +onClose: () => void,
|};

export default class SingleMapQueryRenderer extends React.Component<Props> {
  renderOfflineScreen = (retry: () => void) => (
    <OfflineScreen onTryAgain={retry} onClose={this.props.onClose} />
  );

  render() {
    return (
      <PublicApiRenderer
        renderOfflineScreen={this.renderOfflineScreen}
        variables={this.props.variables}
        render={this.props.render}
        query={this.props.query}
        errorFooter={<CloseModal onPress={this.props.onClose} />}
      />
    );
  }
}

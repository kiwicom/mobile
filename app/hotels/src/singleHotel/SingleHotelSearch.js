// @flow

import * as React from 'react';
import {
  PublicApiRenderer,
  type GraphQLTaggedNode,
} from '@kiwicom/mobile-relay';
import { OfflineScreen, AdaptableLayout } from '@kiwicom/mobile-shared';

import CloseModal from '../components/CloseModal';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: Object,
  +render: (props: Object) => React.Node,
  +onClose: () => void,
|};

export default class SingleHotelSearch extends React.Component<Props> {
  renderOfflineScreen = (retry: () => void) => {
    const sharedProps = {
      onTryAgain: retry,
    };
    return (
      <AdaptableLayout
        renderOnNarrow={
          <OfflineScreen onClose={this.props.onClose} {...sharedProps} />
        }
        renderOnWide={<OfflineScreen {...sharedProps} />}
      />
    );
  };

  render() {
    return (
      <PublicApiRenderer
        errorFooter={<CloseModal onPress={this.props.onClose} />}
        renderOfflineScreen={this.renderOfflineScreen}
        query={this.props.query}
        variables={this.props.variables}
        render={this.props.render}
      />
    );
  }
}

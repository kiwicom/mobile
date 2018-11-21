// @flow

import * as React from 'react';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import { OfflineScreen, AdaptableLayout } from '@kiwicom/mobile-shared';

import BookingSummary from './summary/BookingSummary';

type Props = {|
  +query: string,
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
        footer={<BookingSummary goBack={this.props.onClose} />}
        renderOfflineScreen={this.renderOfflineScreen}
        query={this.props.query}
        variables={this.props.variables}
        render={this.props.render}
      />
    );
  }
}

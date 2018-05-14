// @flow

import * as React from 'react';
import { WebView } from '@kiwicom/mobile-shared';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type {
  DirectAccessURLValues,
  DeeplinkQueryResponse,
} from './__generated__/DeeplinkQuery.graphql';

type Props = {|
  bookingID: string,
  to?: DirectAccessURLValues,
|};

export default class Deeplink extends React.Component<Props> {
  renderInnerComponent = (renderProps: DeeplinkQueryResponse) => {
    const uri =
      idx(renderProps, _ => _.booking.directAccessURL) ||
      'https://www.kiwi.com/';

    return <WebView source={{ uri }} />;
  };

  render = () => (
    <PrivateApiRenderer
      render={this.renderInnerComponent}
      query={graphql`
        query DeeplinkQuery(
          $bookingId: ID!
          $deeplinkTo: DirectAccessURLValues
        ) {
          booking(id: $bookingId) {
            directAccessURL(deeplinkTo: $deeplinkTo)
          }
        }
      `}
      variables={{
        bookingId: this.props.bookingID,
        deeplinkTo: this.props.to,
      }}
    />
  );
}

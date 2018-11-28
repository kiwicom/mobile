// @flow strict

import * as React from 'react';
import { WebView } from '@kiwicom/mobile-shared';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import BookingDetailContext, {
  type State as BookingDetailState,
} from '../context/BookingDetailContext';
import type {
  DirectAccessURLValues,
  DeeplinkQueryResponse,
} from './__generated__/DeeplinkQuery.graphql';

type Props = {|
  +to?: DirectAccessURLValues,
|};

export default class Deeplink extends React.Component<Props> {
  renderInnerComponent = (renderProps: DeeplinkQueryResponse) => {
    const uri =
      renderProps.singleBooking?.directAccessURL ?? 'https://www.kiwi.com/';

    return <WebView source={{ uri }} />;
  };

  renderInner = ({ bookingId, authToken }: BookingDetailState) => (
    <PublicApiRenderer
      render={this.renderInnerComponent}
      query={graphql`
        query DeeplinkQuery(
          $bookingId: Int!
          $authToken: String!
          $deeplinkTo: DirectAccessURLValues
        ) {
          singleBooking(id: $bookingId, authToken: $authToken) {
            ... on BookingInterface {
              directAccessURL(deeplinkTo: $deeplinkTo)
            }
          }
        }
      `}
      variables={{
        bookingId,
        authToken,
        deeplinkTo: this.props.to,
      }}
    />
  );

  render() {
    return (
      <BookingDetailContext.Consumer>
        {this.renderInner}
      </BookingDetailContext.Consumer>
    );
  }
}

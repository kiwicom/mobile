// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import PassengerDetail from './PassengerDetail';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { PassengerDetailContainerQueryResponse } from './__generated__/PassengerDetailContainerQuery.graphql';

type Props = {||};

export default class PassengerDetailContainer extends React.Component<Props> {
  renderInner = (renderProps: PassengerDetailContainerQueryResponse) => {
    return <PassengerDetail booking={renderProps.singleBooking} />;
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          query={graphql`
            query PassengerDetailContainerQuery(
              $id: Int!
              $authToken: String!
            ) {
              singleBooking(id: $id, authToken: $authToken) {
                ... on BookingInterface {
                  ...PassengerDetail_booking
                }
              }
            }
          `}
          variables={{ id: bookingId, authToken }}
          render={this.renderInner}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

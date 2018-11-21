// @flow

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import { sanitizeDate } from '../../GraphQLSanitizers';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';
import type { Stay22SingleHotelMapScreenQueryResponse } from './__generated__/Stay22SingleHotelMapScreenQuery.graphql';
import SingleMap from './SingleMap';
import SingleMapQueryRenderer from './SingleMapQueryRenderer';

type Props = {|
  +navigation: NavigationType,
  +currency: string,
  +getGuestCount: () => number,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
|};

class Stay22SingleHotelMapScreen extends React.Component<Props> {
  goBack = () => {
    this.props.navigation.goBack(null);
  };

  renderInner = (props: Stay22SingleHotelMapScreenQueryResponse) => (
    <SingleMap data={props.stay22HotelDetail} />
  );

  render() {
    const { getGuestCount, currency, hotelId, checkin, checkout } = this.props;
    return (
      <SingleMapQueryRenderer
        onClose={this.goBack}
        query={graphql`
          query Stay22SingleHotelMapScreenQuery(
            $id: ID!
            $guests: Int!
            $currency: Currency
            $checkin: Date!
            $checkout: Date!
          ) {
            stay22HotelDetail(
              id: $id
              guests: $guests
              currency: $currency
              checkin: $checkin
              checkout: $checkout
            ) {
              ...SingleMap
            }
          }
        `}
        variables={{
          checkin: sanitizeDate(checkin),
          checkout: sanitizeDate(checkout),
          id: hotelId,
          guests: getGuestCount(),
          currency,
        }}
        render={this.renderInner}
      />
    );
  }
}

const select = ({
  getGuestCount,
  currency,
  hotelId,
  checkin,
  checkout,
}: HotelsContextState) => ({
  getGuestCount,
  currency,
  hotelId,
  checkin,
  checkout,
});

export default withHotelsContext(select)(
  withNavigation(Stay22SingleHotelMapScreen),
);

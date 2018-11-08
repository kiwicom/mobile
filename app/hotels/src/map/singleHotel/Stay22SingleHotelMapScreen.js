// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import { sanitizeDate } from '../../GraphQLSanitizers';
import SingleHotelContext from '../../navigation/singleHotel/SingleHotelContext';
import HotelsContext from '../../HotelsContext';
import type { Stay22SingleHotelMapScreenQueryResponse } from './__generated__/Stay22SingleHotelMapScreenQuery.graphql';
import SingleMap from './SingleMap';

type Props = {|
  +navigation: NavigationType,
|};

class Stay22SingleHotelMapScreen extends React.Component<Props> {
  goBack = () => {
    this.props.navigation.goBack(null);
  };

  renderHotelContext = ({ getGuestCount, currency }) => (
    <SingleHotelContext.Consumer>
      {this.renderSingleHotelContext(getGuestCount, currency)}
    </SingleHotelContext.Consumer>
  );

  renderSingleHotelContext = (getGuestCount, currency) => ({
    hotelId,
    checkin,
    checkout,
  }) => (
    <PublicApiRenderer
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

  renderInner = (props: Stay22SingleHotelMapScreenQueryResponse) => (
    <SingleMap data={props.stay22HotelDetail} goBack={this.goBack} />
  );

  render() {
    return (
      <HotelsContext.Consumer>{this.renderHotelContext}</HotelsContext.Consumer>
    );
  }
}

export default withNavigation(Stay22SingleHotelMapScreen);

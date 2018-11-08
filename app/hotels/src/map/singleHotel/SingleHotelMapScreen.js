// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import type { SingleHotelMapScreenQueryResponse } from './__generated__/SingleHotelMapScreenQuery.graphql';
import { sanitizeDate } from '../../GraphQLSanitizers';
import SingleMap from './SingleMap';
import SingleHotelContext from '../../navigation/singleHotel/SingleHotelContext';
import HotelsContext from '../../HotelsContext';

type Props = {|
  +currency: string,
  +search: AvailableHotelSearchInput,
  +navigation: NavigationType,
|};

class SingleHotelMapScreen extends React.Component<Props> {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  renderInnerComponent = ({
    availableHotel,
  }: SingleHotelMapScreenQueryResponse) => (
    <SingleMap goBack={this.goBack} data={availableHotel} />
  );

  renderQuery = (currency, roomsConfiguration) => ({
    checkin,
    checkout,
    hotelId,
  }) => {
    return (
      <PublicApiRenderer
        query={graphql`
          query SingleHotelMapScreenQuery(
            $search: AvailableHotelSearchInput!
            $options: AvailableHotelOptionsInput
          ) {
            availableHotel(search: $search, options: $options) {
              ...SingleMap
            }
          }
        `}
        variables={{
          search: {
            hotelId,
            roomsConfiguration,
            checkin: sanitizeDate(checkin),
            checkout: sanitizeDate(checkout),
          },
          options: { currency },
        }}
        render={this.renderInnerComponent}
      />
    );
  };

  renderHotelsContext = ({ currency, roomsConfiguration }) => (
    <SingleHotelContext.Consumer>
      {this.renderQuery(currency, roomsConfiguration)}
    </SingleHotelContext.Consumer>
  );

  render() {
    return (
      <HotelsContext.Consumer>
        {this.renderHotelsContext}
      </HotelsContext.Consumer>
    );
  }
}

export default withNavigation(SingleHotelMapScreen);

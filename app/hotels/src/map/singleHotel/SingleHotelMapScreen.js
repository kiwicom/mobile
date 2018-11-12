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
import {
  withHotelsContext,
  type RoomConfigurationType,
} from '../../HotelsContext';

type Props = {|
  +currency: string,
  +search: AvailableHotelSearchInput,
  +navigation: NavigationType,
  +roomsConfiguration: RoomConfigurationType,
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

  renderQuery = ({ checkin, checkout, hotelId }) => {
    const { currency, roomsConfiguration } = this.props;
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

  render() {
    return (
      <SingleHotelContext.Consumer>
        {this.renderQuery}
      </SingleHotelContext.Consumer>
    );
  }
}

const select = ({ currency, roomsConfiguration }) => ({
  currency,
  roomsConfiguration,
});

export default withHotelsContext(select)(withNavigation(SingleHotelMapScreen));

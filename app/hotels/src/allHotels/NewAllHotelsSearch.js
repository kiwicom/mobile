// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { DateFormatter } from '@kiwicom/mobile-localization';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import HotelsFilterContext from '../HotelsFilterContext';
import {
  type RoomConfigurationType,
  withHotelsContext,
} from '../HotelsContext';
import AllHotelsSearchList from './AllHotelsSearchList';
import { sanitizeHotelFacilities } from '../GraphQLSanitizers';
import type { NewAllHotelsSearchQueryResponse } from './__generated__/NewAllHotelsSearchQuery.graphql';

type Props = {|
  +navigation: NavigationType,
  +checkin: Date | null,
  +checkout: Date | null,
  +currency: string,
  +roomsConfiguration: RoomConfigurationType | null,
  +cityId: string | null,
|};

class NewAllHotelsSearch extends React.Component<Props> {
  openSingleHotel = (hotelId: string) => {
    this.props.navigation.navigate('SingleHotel', {
      hotelId,
      checkin: this.props.checkin,
      checkout: this.props.checkout,
      roomsConfiguration: this.props.roomsConfiguration,
    });
  };

  renderAllHotelsSearchList = (
    propsFromRenderer: NewAllHotelsSearchQueryResponse,
  ) => {
    return (
      <AllHotelsSearchList
        data={propsFromRenderer}
        openSingleHotel={this.openSingleHotel}
      />
    );
  };

  render = () => {
    const {
      cityId,
      checkin,
      checkout,
      roomsConfiguration,
      currency,
    } = this.props;

    if (checkin === null || checkout === null) {
      // TODO: Show error
      return null;
    }
    return (
      <HotelsFilterContext.Consumer>
        {({ filterParams }) => (
          <PublicApiRenderer
            query={graphql`
              query NewAllHotelsSearchQuery(
                $search: HotelsSearchInput!
                $filter: HotelsFilterInput!
                $options: AvailableHotelOptionsInput
                $first: Int
                $after: String
              ) {
                ...AllHotelsSearchList_data
              }
            `}
            variables={{
              search: {
                cityId,
                checkin: DateFormatter(checkin).formatForMachine(),
                checkout: DateFormatter(checkout).formatForMachine(),
                roomsConfiguration,
              },
              filter: {
                ...filterParams,
                hotelFacilities: sanitizeHotelFacilities(
                  filterParams.hotelFacilities,
                ),
              },
              first: 50,
              options: {
                currency,
              },
            }}
            render={this.renderAllHotelsSearchList}
          />
        )}
      </HotelsFilterContext.Consumer>
    );
  };
}

export default withNavigation(withHotelsContext(NewAllHotelsSearch));

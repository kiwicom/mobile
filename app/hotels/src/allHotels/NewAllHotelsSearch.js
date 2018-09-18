// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { DateFormatter, Translation } from '@kiwicom/mobile-localization';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { GeneralError } from '@kiwicom/mobile-shared';

import HotelsFilterContext from '../HotelsFilterContext';
import {
  type RoomConfigurationType,
  withHotelsContext,
} from '../HotelsContext';
import { sanitizeHotelFacilities } from '../GraphQLSanitizers';
import type { NewAllHotelsSearchQueryResponse } from './__generated__/NewAllHotelsSearchQuery.graphql';
import RenderSearchResults from './RenderSearchResults';

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
      <RenderSearchResults
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
      return (
        <GeneralError
          errorMessage={
            <Translation id="hotels_search.all_hotels_search.date_error" />
          }
        />
      );
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
                ...RenderSearchResults
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

export default withNavigation(
  withHotelsContext(state => ({
    checkin: state.checkin,
    checkout: state.checkout,
    currency: state.currency,
    roomsConfiguration: state.roomsConfiguration,
    cityId: state.cityId,
  }))(NewAllHotelsSearch),
);

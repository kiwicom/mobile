// @flow strict

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import { DateFormatter } from '@kiwicom/mobile-localization';

import {
  HotelsFilterContext,
  type HotelsFilterState,
} from '../HotelsFilterContext';
import {
  type RoomConfigurationType,
  type HotelsContextState,
  withHotelsContext,
} from '../HotelsContext';
import { sanitizeHotelAmenities } from '../GraphQLSanitizers';
import type { NewAllHotelsSearchQueryResponse } from './__generated__/NewAllHotelsSearchQuery.graphql';
import HotelsPaginationContainer from './HotelsPaginationContainer';
import HotelsSearch from './HotelsSearch';

type Props = {|
  +checkin: Date | null,
  +checkout: Date | null,
  +currency: string,
  +roomsConfiguration: RoomConfigurationType | null,
  +cityId: string | null,
  +orderBy: $PropertyType<HotelsFilterState, 'orderBy'>,
  +filterParams: $PropertyType<HotelsFilterState, 'filterParams'>,
  +renderOfflineScreen: (retry: () => void) => React.Node,
  +onClose: () => void,
  +renderDateError: () => React.Node,
  +renderFooter: () => React.Node,
|};

const query = graphql`
  query NewAllHotelsSearchQuery(
    $search: HotelsSearchInput!
    $filter: HotelsFilterInput!
    $options: AvailableHotelOptionsInput
    $first: Int
    $after: String
  ) {
    ...HotelsPaginationContainer_data
  }
`;

const renderAllHotelsSearchList = (
  propsFromRenderer: NewAllHotelsSearchQueryResponse,
) => {
  return <HotelsPaginationContainer data={propsFromRenderer} />;
};

const NewAllHotelsSearch = ({
  cityId,
  checkin,
  checkout,
  roomsConfiguration,
  currency,
  onClose,
}: Props) => {
  const { orderBy, filterParams }: HotelsFilterState = React.useContext(
    HotelsFilterContext,
  );
  return (
    <HotelsSearch
      shouldRenderDateError={checkin === null || checkout === null}
      onClose={onClose}
      query={query}
      variables={{
        search: {
          cityId,
          checkin: DateFormatter(checkin ?? new Date()).formatForMachine(),
          checkout: DateFormatter(checkout ?? new Date()).formatForMachine(),
          roomsConfiguration,
        },
        filter: {
          ...filterParams,
          hotelAmenities: sanitizeHotelAmenities(filterParams.hotelAmenities),
        },
        first: 50,
        options: {
          currency,
          orderBy,
        },
      }}
      render={renderAllHotelsSearchList}
    />
  );
};

const selectHotelsContext = (state: HotelsContextState) => ({
  checkin: state.checkin,
  checkout: state.checkout,
  currency: state.currency,
  roomsConfiguration: state.roomsConfiguration,
  cityId: state.cityId,
  onClose: state.closeHotels,
});

export default withHotelsContext(selectHotelsContext)(NewAllHotelsSearch);

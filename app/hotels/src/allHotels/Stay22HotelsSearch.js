// @flow strict

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import { DateFormatter } from '@kiwicom/mobile-localization';

import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import type { Stay22HotelsSearchQueryResponse } from './__generated__/Stay22HotelsSearchQuery.graphql';
import Stay22PaginationContainer from './Stay22PaginationContainer';
import HotelsSearch from './HotelsSearch';
import useHotelsFilter from './useHotelsFilter';
import {
  HotelsFilterContext,
  type HotelsFilterState,
} from '../HotelsFilterContext';

const renderAllHotelsSearchList = (
  propsFromRenderer: Stay22HotelsSearchQueryResponse,
) => {
  return <Stay22PaginationContainer data={propsFromRenderer} />;
};

export function Stay22HotelsSearch() {
  const {
    checkin,
    checkout,
    currency,
    getGuestCount,
    latitude,
    longitude,
    closeHotels: onClose,
  }: HotelsContextState = React.useContext(HotelsContext);
  const { orderBy }: HotelsFilterState = React.useContext(HotelsFilterContext);
  const hotelsFilter = useHotelsFilter();

  const shouldRenderDateError =
    checkin === null ||
    checkout === null ||
    latitude === null ||
    longitude === null;

  return (
    <HotelsSearch
      onClose={onClose}
      shouldRenderDateError={shouldRenderDateError}
      query={graphql`
        query Stay22HotelsSearchQuery(
          $search: Stay22HotelsSearchInput!
          $filter: HotelsFilterInput!
          $first: Int
          $after: String
        ) {
          ...Stay22PaginationContainer_data
        }
      `}
      variables={{
        first: 50,
        search: {
          latitude,
          longitude,
          checkin: DateFormatter(checkin ?? new Date()).formatForMachine(),
          checkout: DateFormatter(checkout ?? new Date()).formatForMachine(),
          guests: getGuestCount(),
          currency,
          ...(orderBy !== null ? { orderBy } : {}),
        },
        filter: hotelsFilter,
      }}
      render={renderAllHotelsSearchList}
    />
  );
}

export default Stay22HotelsSearch;

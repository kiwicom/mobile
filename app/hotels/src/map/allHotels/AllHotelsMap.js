// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  AdaptableLayout,
  AppStateChange,
} from '@kiwicom/mobile-shared';

import MapScreen from './MapScreen';
import FilterStripe from '../../filter/FilterStripe';
import type { AllHotelsMapQueryResponse } from './__generated__/AllHotelsMapQuery.graphql';
import type {
  SearchParams,
  OnChangeSearchParams,
} from '../../allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../../filter/FilterParametersType';
import { handleOpenSingleHotel } from '../../singleHotel';
import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import { sanitizeHotelFacilities } from '../../GraphQLSanitizers';
import type { Coordinates } from '../../CoordinatesType';
import {
  getSearchQueryParams,
  updateCheckinDateIfBeforeToday,
} from '../../search/SearchQueryHelpers';
import HotelsSearchContext from '../../HotelsSearchContext';
import HotelsFilterContext from '../../HotelsFilterContext';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

type PropsWithContext = {
  ...Props,
  search: SearchParams,
  cityId: string | null,
  filter: FilterParams,
  onFilterChange: OnChangeFilterParams => void,
  onSearchChange: OnChangeSearchParams => void,
};

class AllHotelsMap extends React.Component<PropsWithContext> {
  componentDidMount = () => {
    this.validateCheckinDate();
  };

  validateCheckinDate = () => {
    updateCheckinDateIfBeforeToday(
      this.props.search,
      this.props.onSearchChange,
    );
  };

  handleOpenSingleHotel = (hotelId: string) => {
    handleOpenSingleHotel(
      hotelId,
      this.props.search,
      this.props.onGoToSingleHotel,
    );
  };

  renderInnerComponent = (props: AllHotelsMapQueryResponse) => (
    <MapScreen
      data={props.allAvailableHotels}
      filter={this.props.filter}
      onFilterChange={this.props.onFilterChange}
      onOpenSingleHotel={this.handleOpenSingleHotel}
    />
  );

  render = () => {
    const {
      cityId,
      search,
      filter,
      onFilterChange,
      currency,
      coordinates,
    } = this.props;

    return (
      <AppStateChange
        states={['active']}
        onStateChange={this.validateCheckinDate}
      >
        <View style={styles.container}>
          <AdaptableLayout
            renderOnNarrow={
              <FilterStripe
                filter={filter}
                onChange={onFilterChange}
                currency={currency}
              />
            }
          />
          <PublicApiRenderer
            query={graphql`
              query AllHotelsMapQuery(
                $search: HotelsSearchInput!
                $filter: HotelsFilterInput
                $options: AvailableHotelOptionsInput
              ) {
                allAvailableHotels(
                  search: $search
                  filter: $filter
                  options: $options
                ) {
                  ...MapScreen
                }
              }
            `}
            variables={{
              search: getSearchQueryParams(search, coordinates, cityId),
              filter: {
                ...filter,
                hotelFacilities: sanitizeHotelFacilities(
                  filter.hotelFacilities,
                ),
              },
              options: { currency },
            }}
            render={this.renderInnerComponent}
          />
        </View>
      </AppStateChange>
    );
  };
}

type Props = {|
  currency: string,
  onGoToSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  coordinates: Coordinates | null,
|};

export default function AllHotelsMapWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ cityId, searchParams, actions: searchActions }) => (
        <HotelsFilterContext.Consumer>
          {({ filterParams, actions: filterActions }) => (
            <AllHotelsMap
              {...props}
              cityId={cityId}
              search={searchParams}
              filter={filterParams}
              onFilterChange={filterActions.setFilter}
              onSearchChange={searchActions.setSearch}
            />
          )}
        </HotelsFilterContext.Consumer>
      )}
    </HotelsSearchContext.Consumer>
  );
}

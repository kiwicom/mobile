// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import {
  StyleSheet,
  AdaptableLayout,
  AppStateChange,
} from '@kiwicom/react-native-app-shared';
import { connect } from '@kiwicom/react-native-app-redux';

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
import type { HotelsReducerState } from '../../HotelsReducer';
import type { FilterReducerState } from '../../filter/FiltersReducer';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

type Props = {|
  location: string,
  search: SearchParams,
  cityId: string | null,
  filter: FilterParams,
  currency: string,
  onFilterChange: OnChangeFilterParams => void,
  onGoToSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  coordinates: Coordinates | null,
  onSearchChange: OnChangeSearchParams => void,
|};

class AllHotelsMap extends React.Component<Props> {
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
      location,
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
              search: getSearchQueryParams(
                search,
                coordinates,
                cityId,
                location,
              ),
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

const select = ({
  hotels,
  filters,
}: {
  hotels: HotelsReducerState,
  filters: FilterReducerState,
}) => ({
  location: hotels.location,
  search: hotels.searchParams,
  cityId: hotels.cityId,
  filter: filters.filterParams,
});

const actions = dispatch => ({
  onFilterChange: filter =>
    dispatch({
      type: 'filtersReducer/FILTER_CHANGED',
      filter,
    }),
  onSearchChange: search =>
    dispatch({
      type: 'setSearch',
      search,
    }),
});

export default connect(select, actions)(AllHotelsMap);

// @flow

import * as React from 'react';
import { ScrollView, Keyboard } from 'react-native';
import idx from 'idx';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import { Layout, AppStateChange, StyleSheet } from '@kiwicom/mobile-shared';
import { connect } from '@kiwicom/mobile-redux';
import { DateFormatter } from '@kiwicom/mobile-localization';

import AllHotelsSearch from './AllHotelsSearch';
import SearchForm from './searchForm/SearchForm';
import FilterStripe from '../filter/FilterStripe';
import type {
  SearchParams,
  OnChangeSearchParams,
} from './searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';
import type { AllHotels_cityLookup_QueryResponse } from './__generated__/AllHotels_cityLookup_Query.graphql';
import GeneralError from '../../../shared/src/errors/GeneralError';
import type { HotelsReducerState } from '../HotelsReducer';
import type { FilterReducerState } from '../filter/FiltersReducer';
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';
import type { Coordinates } from '../CoordinatesType';
import {
  updateCheckinDateIfBeforeToday,
  isDateBeforeToday,
} from '../search/SearchQueryHelpers';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
});

type Props = {|
  onSearchChange: OnChangeSearchParams => void,
  onLocationChange: (location: string) => void,
  onFilterChange: OnChangeFilterParams => void,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  openLocationPicker: (location: string | null) => void,
  openGuestsModal: () => void,
  onCityIdChange: (cityId: string | null) => void,
  search: SearchParams,
  coordinates: Coordinates | null,
  location: string,
  filter: FilterParams,
  currency: string,
  cityId: string | null,
  checkin?: string,
  checkout?: string,
|};

/**
 * We need to lookup city ID first and only after that we can search for all
 * hotels. This is why we use two nested query renderers.
 */
export class AllHotels extends React.Component<Props> {
  componentDidMount = () => {
    const { checkin, checkout, search } = this.props;

    if (checkin && checkout && !isDateBeforeToday(DateFormatter(checkin))) {
      this.props.onSearchChange({
        ...search,
        checkin: DateFormatter(checkin).toDate(),
        checkout: DateFormatter(checkout).toDate(),
      });
    } else {
      this.validateCheckinDate();
    }
  };

  componentWillUnmount = () => {
    this.props.onLocationChange('');
    this.props.onCityIdChange(null);
  };

  validateCheckinDate = () => {
    updateCheckinDateIfBeforeToday(
      this.props.search,
      this.props.onSearchChange,
    );
  };

  openLocationPicker = () => {
    this.props.openLocationPicker(this.props.location);
  };

  renderAllHotelsSearchPublicRenderer = (
    rendererProps: AllHotels_cityLookup_QueryResponse,
  ) => {
    const cityId = idx(rendererProps, _ => _.city.edges[0].node.id) || null;
    if (cityId === null) {
      return <GeneralError errorMessage="Cannot find such city." />;
    }
    return (
      <AllHotelsSearch
        {...rendererProps}
        coordinates={this.props.coordinates}
        openSingleHotel={this.props.openSingleHotel}
        cityId={cityId}
        currency={this.props.currency}
      />
    );
  };

  render = () => (
    <AppStateChange
      states={['active']}
      onStateChange={this.validateCheckinDate}
    >
      <Layout>
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
          onScroll={Keyboard.dismiss}
        >
          <SearchForm
            onChange={this.props.onSearchChange}
            search={this.props.search}
            location={this.props.location}
            openLocationPicker={this.openLocationPicker}
            openGuestsModal={this.props.openGuestsModal}
          />
          <FilterStripe
            filter={this.props.filter}
            onChange={this.props.onFilterChange}
            currency={this.props.currency}
          />
          {this.props.cityId ? (
            <AllHotelsSearch
              coordinates={this.props.coordinates}
              openSingleHotel={this.props.openSingleHotel}
              cityId={this.props.cityId}
              currency={this.props.currency}
            />
          ) : (
            <PublicApiRenderer
              query={graphql`
                query AllHotels_cityLookup_Query($prefix: String!) {
                  city: hotelCities(prefix: $prefix, first: 1) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              `}
              render={this.renderAllHotelsSearchPublicRenderer}
              variables={{
                prefix: this.props.location,
              }}
            />
          )}
        </ScrollView>
      </Layout>
    </AppStateChange>
  );
}

const select = ({
  hotels,
  filters,
}: {
  hotels: HotelsReducerState,
  filters: FilterReducerState,
}) => ({
  location: hotels.location,
  cityId: hotels.cityId,
  search: hotels.searchParams,
  filter: filters.filterParams,
});

const actions = dispatch => ({
  onSearchChange: search =>
    dispatch({
      type: 'setSearch',
      search,
    }),
  onLocationChange: (location: string) =>
    dispatch({
      type: 'setLocation',
      location,
    }),
  onCityIdChange: (cityId: string | null) =>
    dispatch({
      type: 'setCityId',
      cityId,
    }),
  onFilterChange: filter =>
    dispatch({
      type: 'filtersReducer/FILTER_CHANGED',
      filter,
    }),
});

export default connect(select, actions)(AllHotels);

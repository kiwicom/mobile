// @flow

import * as React from 'react';
import { ScrollView, Keyboard } from 'react-native';
import idx from 'idx';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import { Layout, AppStateChange, StyleSheet } from '@kiwicom/mobile-shared';

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
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';
import type { Coordinates } from '../CoordinatesType';
import HotelsSearchContext from '../HotelsSearchContext';
import HotelsFilterContext from '../HotelsFilterContext';
import {
  updateCheckinDateIfBeforeToday,
  isDateBeforeToday,
} from '../search/SearchQueryHelpers';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
});

type PropsWithContext = {
  ...Props,
  location: string,
  cityId: string | null,
  search: SearchParams,
  filter: FilterParams,
  setSearch: OnChangeSearchParams => void,
  setFilter: OnChangeFilterParams => void,
  setCityIdAndLocation: (cityId: string | null, location: string) => void,
};

/**
 * We need to lookup city ID first and only after that we can search for all
 * hotels. This is why we use two nested query renderers.
 */
export class AllHotels extends React.Component<PropsWithContext> {
  componentDidMount = () => {
    const { checkin, checkout, search } = this.props;

    if (checkin && checkout && !isDateBeforeToday(checkin)) {
      this.props.setSearch({
        ...search,
        checkin: checkin,
        checkout: checkout,
      });
    } else {
      this.validateCheckinDate();
    }
  };

  componentWillUnmount = () => {
    this.props.setCityIdAndLocation(null, '');
  };

  validateCheckinDate = () => {
    updateCheckinDateIfBeforeToday(this.props.search, this.props.setSearch);
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
            onChange={this.props.setSearch}
            search={this.props.search}
            location={this.props.location}
            openLocationPicker={this.openLocationPicker}
            openGuestsModal={this.props.openGuestsModal}
          />
          <FilterStripe
            filter={this.props.filter}
            onChange={this.props.setFilter}
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

type Props = {|
  currency: string,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  coordinates: Coordinates | null,
  openLocationPicker: (location: string | null) => void,
  openGuestsModal: () => void,
  checkin: ?Date,
  checkout: ?Date,
|};

export default function AllHotelsWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({
        location,
        cityId,
        searchParams,
        actions: { setSearch, setCityIdAndLocation },
      }) => (
        <HotelsFilterContext.Consumer>
          {({ filterParams, actions: { setFilter } }) => (
            <AllHotels
              {...props}
              location={location}
              cityId={cityId}
              search={searchParams}
              filter={filterParams}
              setSearch={setSearch}
              setFilter={setFilter}
              setCityIdAndLocation={setCityIdAndLocation}
            />
          )}
        </HotelsFilterContext.Consumer>
      )}
    </HotelsSearchContext.Consumer>
  );
}

// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  AdaptableLayout,
  AppStateChange,
  GeolocationContext,
  IconLoading,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MapScreen from './MapScreen';
import FilterStripe from '../../filter/FilterStripe';
import type { AllHotelsMapQueryResponse } from './__generated__/AllHotelsMapQuery.graphql';
import type {
  SearchParams,
  OnChangeSearchParams,
} from '../../allHotels/searchForm/SearchParametersType';
import type { FilterParams } from '../../filter/FilterParametersType';
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
  noSearchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
});

type PropsWithContext = {
  ...Props,
  search: SearchParams,
  cityId: string | null,
  filter: FilterParams,
  lat: number | null,
  lng: number | null,
  canGetUserLocation: boolean,
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

  getCoordinates = () => {
    const { coordinates, lat, lng } = this.props;

    if (coordinates) {
      return coordinates;
    }
    if (lat !== null && lng !== null) {
      return {
        latitude: lat,
        longitude: lng,
      };
    }
    return null;
  };

  renderInnerComponent = (props: AllHotelsMapQueryResponse) => (
    <MapScreen
      data={props.allAvailableHotels}
      onOpenSingleHotel={this.handleOpenSingleHotel}
    />
  );

  render = () => {
    const { cityId, search, currency, filter } = this.props;
    const coordinates = this.getCoordinates();
    const canSearch = cityId || coordinates;
    return (
      <AppStateChange
        states={['active']}
        onStateChange={this.validateCheckinDate}
      >
        <View style={styles.container}>
          <AdaptableLayout
            renderOnNarrow={<FilterStripe currency={currency} />}
          />
          {canSearch ? (
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
          ) : (
            <View style={styles.noSearchContainer}>
              {!this.props.canGetUserLocation ? (
                <Translation id="hotels_search.all_hotels_map.allow_localization_or_search" />
              ) : (
                <IconLoading />
              )}
            </View>
          )}
        </View>
      </AppStateChange>
    );
  };
}

type Props = {|
  currency: string,
  coordinates: Coordinates | null,
  onGoToSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
|};

export default function AllHotelsMapWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ cityId, searchParams, actions: searchActions }) => (
        <HotelsFilterContext.Consumer>
          {({ filterParams }) => (
            <GeolocationContext.Consumer>
              {({ lat, lng, canGetUserLocation }) => (
                <AllHotelsMap
                  {...props}
                  cityId={cityId}
                  search={searchParams}
                  filter={filterParams}
                  onSearchChange={searchActions.setSearch}
                  lat={lat}
                  lng={lng}
                  canGetUserLocation={canGetUserLocation}
                />
              )}
            </GeolocationContext.Consumer>
          )}
        </HotelsFilterContext.Consumer>
      )}
    </HotelsSearchContext.Consumer>
  );
}

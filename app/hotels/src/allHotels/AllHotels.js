// @flow

import * as React from 'react';
import { ScrollView, Keyboard, View } from 'react-native';
import {
  AppStateChange,
  StyleSheet,
  GeolocationContext,
  IconLoading,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import AllHotelsSearch from './AllHotelsSearch';
import SearchForm from './searchForm/SearchForm';
import FilterStripe from '../filter/FilterStripe';
import type {
  SearchParams,
  OnChangeSearchParams,
} from './searchForm/SearchParametersType';
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';
import type { Coordinates } from '../CoordinatesType';
import HotelsSearchContext from '../HotelsSearchContext';
import {
  updateCheckinDateIfBeforeToday,
  isDateBeforeToday,
} from '../search/SearchQueryHelpers';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  searchForCityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

type PropsWithContext = {|
  ...Props,
  +cityId: string | null,
  +search: SearchParams,
  +setSearch: OnChangeSearchParams => void,
  +setCityIdAndLocation: (cityId: string | null, location: string) => void,
  +lat: number | null,
  +lng: number | null,
  +canGetUserLocation: boolean,
|};

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

  render = () => {
    const coordinates = this.getCoordinates();
    const canRenderAllHotelsSearch = this.props.cityId || coordinates;

    return (
      <AppStateChange
        states={['active']}
        onStateChange={this.validateCheckinDate}
      >
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}
          onScroll={Keyboard.dismiss}
        >
          <SearchForm
            openLocationPicker={this.props.openLocationPicker}
            openGuestsModal={this.props.openGuestsModal}
          />
          <FilterStripe currency={this.props.currency} />
          {canRenderAllHotelsSearch ? (
            <AllHotelsSearch
              coordinates={coordinates}
              openSingleHotel={this.props.openSingleHotel}
              cityId={this.props.cityId}
              currency={this.props.currency}
            />
          ) : (
            <View style={styles.searchForCityContainer}>
              {!this.props.canGetUserLocation ? (
                <Translation id="hotels_search.all_hotels.please_search" />
              ) : (
                <IconLoading />
              )}
            </View>
          )}
        </ScrollView>
      </AppStateChange>
    );
  };
}

type Props = {|
  +currency: string,
  +coordinates: Coordinates | null,
  +openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  +openLocationPicker: (location: string | null) => void,
  +openGuestsModal: () => void,
  +checkin: ?Date,
  +checkout: ?Date,
|};

export default function AllHotelsWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({
        cityId,
        searchParams,
        actions: { setSearch, setCityIdAndLocation },
      }) => (
        <GeolocationContext.Consumer>
          {({ lat, lng, canGetUserLocation }) => (
            <AllHotels
              {...props}
              cityId={cityId}
              search={searchParams}
              setSearch={setSearch}
              setCityIdAndLocation={setCityIdAndLocation}
              lat={lat}
              lng={lng}
              canGetUserLocation={canGetUserLocation}
            />
          )}
        </GeolocationContext.Consumer>
      )}
    </HotelsSearchContext.Consumer>
  );
}

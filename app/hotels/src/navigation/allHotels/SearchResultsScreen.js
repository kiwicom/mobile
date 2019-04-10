// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  type NavigationType,
  useSetNavigationParams,
} from '@kiwicom/mobile-navigation';
import {
  LayoutDoubleColumn,
  StyleSheet,
  Icon,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import NewAllHotels from '../../allHotels/NewAllHotels';
import HotelsNavigationOptions from '../HotelsNavigationOptions';
import {
  withSearchResultsContext,
  type ResultType,
  type SearchResultState,
} from './SearchResultsContext';
import SingleHotelContainer from '../../singleHotel/SingleHotelContainer';
import type { RoomsConfiguration } from '../../singleHotel/AvailableHotelSearchInput';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';

type Props = {|
  +navigation: NavigationType,
  +onBackClicked: () => void,
  +cityName: string,
  +checkinDate: Date,
  +checkoutDate: Date,
  +roomsConfiguration: RoomsConfiguration,
  +lastNavigationMode?: 'present' | 'push',
  +setResultType: (show: ResultType) => void,
  +show: ResultType,
  +cityId?: string,
  +setCheckinDate: Date => void,
  +setCheckoutDate: Date => void,
|};

const noop = () => {};

const SearchResultsScreen = (props: Props) => {
  useSetNavigationParams(props.navigation.setParams, {
    toggleMap: props.setResultType,
    setCheckinDate: props.setCheckinDate,
    setCheckoutDate: props.setCheckoutDate,
    show: props.show,
    checkin: props.checkinDate,
    checkout: props.checkoutDate,
  });

  return (
    <LayoutDoubleColumn
      menuComponent={
        <View style={styles.container}>
          <NewAllHotels />
        </View>
      }
      containerComponent={<SingleHotelContainer goBack={noop} />}
    />
  );
};

SearchResultsScreen.navigationOptions = ({
  cityName,
  navigation,
  show,
}: Props) => {
  function goToAllHotelsMap() {
    const showNext = show === 'list' ? 'map' : 'list';
    navigation.state.params.toggleMap(showNext);
  }
  const icon =
    show === 'list' ? (
      <Icon name="map" style={styles.icon} />
    ) : (
      <Icon name="list" style={styles.icon} />
    );

  const translationKey =
    show === 'list'
      ? 'hotels_search.all_hotels_search_list.show_map'
      : 'hotels_search.all_hotels_search_list.show_list';
  const checkin = navigation.getParam<Date>('checkin');
  const checkout = navigation.getParam<Date>('checkout');
  const setCheckinDate =
    navigation.getParam<() => void>('setCheckinDate') ?? noop;
  const setCheckoutDate =
    navigation.getParam<() => void>('setCheckoutDate') ?? noop;
  return HotelsNavigationOptions({
    checkin,
    checkout,
    cityName,
    text: <Translation id={translationKey} />,
    icon,
    goToAllHotelsMap,
    setCheckinDate,
    setCheckoutDate,
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
  icon: {
    marginEnd: 2,
    fontSize: 22,
  },
});

const selectHotelsContext = ({
  checkin,
  checkout,
  actions: { setCheckinDate, setCheckoutDate },
}: HotelsContextState) => ({
  checkinDate: checkin,
  checkoutDate: checkout,
  setCheckinDate,
  setCheckoutDate,
});

export default withSearchResultsContext((state: SearchResultState) => ({
  setResultType: state.setResultType,
  show: state.show,
}))(withHotelsContext(selectHotelsContext)(SearchResultsScreen));

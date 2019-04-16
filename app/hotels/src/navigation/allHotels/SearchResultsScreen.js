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
  SearchResultsContext,
  type SearchResultState,
} from './SearchResultsContext';
import SingleHotelContainer from '../../singleHotel/SingleHotelContainer';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';

type Props = {|
  +navigation: NavigationType,
  +cityName: string,
|};

const noop = () => {};

const SearchResultsScreen = (props: Props) => {
  const { show, setResultType }: SearchResultState = React.useContext(
    SearchResultsContext,
  );
  const {
    checkin: checkinDate,
    checkout: checkoutDate,
    actions: { setCheckinDate, setCheckoutDate },
  }: HotelsContextState = React.useContext(HotelsContext);

  useSetNavigationParams(props.navigation.setParams, {
    toggleMap: setResultType,
    setCheckinDate: setCheckinDate,
    setCheckoutDate: setCheckoutDate,
    show,
    checkin: checkinDate,
    checkout: checkoutDate,
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

SearchResultsScreen.navigationOptions = ({ cityName, navigation }: Props) => {
  const show = navigation.getParam<string>('show');
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

export default SearchResultsScreen;

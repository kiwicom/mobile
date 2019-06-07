// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  type NavigationType,
  useSetNavigationParams,
} from '@kiwicom/mobile-navigation';
import { LayoutDoubleColumn, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { noop } from '@kiwicom/mobile-utils';

import NewAllHotels from '../../allHotels/NewAllHotels';
import {
  SearchResultsContext,
  type SearchResultState,
} from './SearchResultsContext';
import SingleHotelContainer from '../../singleHotel/SingleHotelContainer';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import NavigationOptions from './navigationOptions/NavigationOptions';

type Props = {|
  +navigation: NavigationType,
  +cityName: string,
|};

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

SearchResultsScreen.navigationOptions = NavigationOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
});

export default SearchResultsScreen;

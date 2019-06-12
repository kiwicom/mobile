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
  Translation,
  Toast,
} from '@kiwicom/mobile-shared';
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
    actions: { setCheckinDate, setCheckoutDate, resetIsDateForceChanged },
    hasDatesBeenForceChanged,
  }: HotelsContextState = React.useContext(HotelsContext);

  useSetNavigationParams(props.navigation.setParams, {
    toggleMap: setResultType,
    setCheckinDate: setCheckinDate,
    setCheckoutDate: setCheckoutDate,
    show,
    checkin: checkinDate,
    checkout: checkoutDate,
  });
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);

  React.useEffect(() => {
    if (hasDatesBeenForceChanged && toastRef.current != null) {
      toastRef.current.show();
    }
  }, [hasDatesBeenForceChanged]);
  return (
    <LayoutDoubleColumn
      menuComponent={
        <View style={styles.container}>
          <NewAllHotels />
          <Toast
            ref={toastRef}
            text={
              <Translation id="hotels_search.search_result_screen.date_force_changed" />
            }
            style={styles.toast}
            onHide={resetIsDateForceChanged}
            duration={5000}
          />
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
  toast: {
    start: 15,
  },
});

export default SearchResultsScreen;

// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { LayoutDoubleColumn, StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

import SearchDatepickers from './SearchDatepickers';
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
|};

type State = {|
  showCheckinDatepicker: boolean,
  showCheckoutDatepicker: boolean,
|};

const noop = () => {};

class SearchResultsScreen extends React.Component<Props, State> {
  static navigationOptions = ({ cityName, navigation, show }: Props) => {
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
    const onCheckinDateClicked =
      navigation.getParam<() => void>('onCheckinDateClicked') ?? noop;
    const onCheckoutDateClicked =
      navigation.getParam<() => void>('onCheckoutDateClicked') ?? noop;
    return HotelsNavigationOptions({
      checkin,
      checkout,
      cityName,
      text: <Translation id={translationKey} />,
      icon,
      goToAllHotelsMap,
      onCheckinDateClicked,
      onCheckoutDateClicked,
    });
  };

  state = {
    showCheckinDatepicker: false,
    showCheckoutDatepicker: false,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      toggleMap: this.toggleShowMap,
      show: this.props.show,
      checkin: this.props.checkinDate,
      checkout: this.props.checkoutDate,
      onCheckinDateClicked: this.toggleShowCheckinDatePicker,
      onCheckoutDateClicked: this.toggleShowCheckoutDatePicker,
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.show !== this.props.show ||
      prevProps.checkinDate !== this.props.checkinDate ||
      prevProps.checkoutDate !== this.props.checkoutDate
    ) {
      this.props.navigation.setParams({
        show: this.props.show,
        checkin: this.props.checkinDate,
        checkout: this.props.checkoutDate,
      });
    }
  }

  toggleShowCheckinDatePicker = () => {
    this.setState(state => ({
      showCheckinDatepicker: !state.showCheckinDatepicker,
    }));
  };

  toggleShowCheckoutDatePicker = () => {
    this.setState(state => ({
      showCheckoutDatepicker: !state.showCheckoutDatepicker,
    }));
  };

  toggleShowMap = (show: ResultType) => this.props.setResultType(show);

  render() {
    return (
      <>
        <LayoutDoubleColumn
          menuComponent={
            <View style={styles.container}>
              <NewAllHotels />
            </View>
          }
          containerComponent={<SingleHotelContainer goBack={noop} />}
        />
        <SearchDatepickers
          showCheckinDatepicker={this.state.showCheckinDatepicker}
          toggleShowCheckinDatepicker={this.toggleShowCheckinDatePicker}
          showCheckoutDatepicker={this.state.showCheckoutDatepicker}
          toggleShowCheckoutDatepicker={this.toggleShowCheckoutDatePicker}
        />
      </>
    );
  }
}

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

const selectHotelsContext = ({ checkin, checkout }: HotelsContextState) => ({
  checkinDate: checkin,
  checkoutDate: checkout,
});

export default withSearchResultsContext((state: SearchResultState) => ({
  setResultType: state.setResultType,
  show: state.show,
}))(withHotelsContext(selectHotelsContext)(SearchResultsScreen));

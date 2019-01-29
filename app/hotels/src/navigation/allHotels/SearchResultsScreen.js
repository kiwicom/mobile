// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { LayoutDoubleColumn, StyleSheet, Icon } from '@kiwicom/mobile-shared';
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

type Props = {|
  +navigation: NavigationType,
  +onBackClicked: () => void,
  +cityName: string,
  +checkin: string,
  +checkout: string,
  +roomsConfiguration: RoomsConfiguration,
  +lastNavigationMode?: 'present' | 'push',
  +setResultType: (show: ResultType) => void,
  +show: ResultType,
  +cityId?: string,
|};

const noop = () => {};

class SearchResultsScreen extends React.Component<Props> {
  static navigationOptions = ({
    checkin,
    checkout,
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

    const text =
      show === 'list'
        ? { id: 'hotels_search.all_hotels_search_list.show_map' }
        : { id: 'hotels_search.all_hotels_search_list.show_list' };
    return HotelsNavigationOptions({
      checkin,
      checkout,
      cityName,
      text,
      icon,
      goToAllHotelsMap,
    });
  };

  componentDidMount() {
    this.props.navigation.setParams({
      toggleMap: this.toggleShowMap,
      show: this.props.show,
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.show !== this.props.show) {
      this.props.navigation.setParams({
        show: this.props.show,
      });
    }
  }

  toggleShowMap = (show: ResultType) => this.props.setResultType(show);

  render() {
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

export default withSearchResultsContext((state: SearchResultState) => ({
  setResultType: state.setResultType,
  show: state.show,
}))(SearchResultsScreen);

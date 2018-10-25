// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import {
  LayoutDoubleColumn,
  StyleSheet,
  AdaptableLayout,
  GestureController,
  TextIcon,
  CloseButton,
  Device,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import NewAllHotels from '../../allHotels/NewAllHotels';
import MapHeaderButton from './MapHeaderButton';
import HotelsNavigationOptions from '../HotelsNavigationOptions';
import {
  withSearchResultsContext,
  type ResultType,
} from './SearchResultsContext';
import SingleHotelContainer from '../../singleHotel/SingleHotelContainer';
import type { RoomsConfiguration } from '../../singleHotel/AvailableHotelSearchInput';
import SingleHotelContext from '../singleHotel/SingleHotelContext';

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
        <TextIcon code="&#xe001;" style={styles.icon} />
      ) : (
        <TextIcon code="&#xe115;" style={styles.icon} />
      );
    return {
      ...HotelsNavigationOptions({ checkin, checkout, cityName }),
      headerRight: (
        <React.Fragment>
          {checkin !== null && (
            <AdaptableLayout
              renderOnNarrow={
                <MapHeaderButton
                  onPress={goToAllHotelsMap}
                  icon={icon}
                  testID="map-header-button"
                />
              }
              renderOnWide={Platform.select({
                android: (
                  <MapHeaderButton
                    onPress={goToAllHotelsMap}
                    icon={icon}
                    testID="map-header-button"
                  />
                ),
                ios: null,
              })}
            />
          )}
        </React.Fragment>
      ),
      headerTitle: Platform.select({
        ios: (
          <AdaptableLayout
            renderOnWide={
              <View style={styles.headerTitleContainer}>
                <View style={styles.headerTitleLeft}>
                  {checkin !== null && (
                    <MapHeaderButton
                      onPress={goToAllHotelsMap}
                      icon={icon}
                      testID="map-header-button"
                    />
                  )}
                </View>
                <View style={styles.headerTitleRight} />
              </View>
            }
          />
        ),
        android: null,
      }),
    };
  };

  componentDidMount = () => {
    this.props.navigation.setParams({
      toggleMap: this.toggleShowMap,
      show: this.props.show,
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.show !== this.props.show) {
      this.props.navigation.setParams({
        show: this.props.show,
      });
    }
  };

  toggleShowMap = (show: ResultType) => this.props.setResultType(show);

  onClosePress = () => {
    // This prop will only come if we launch this screen from a native app
    if (this.props.lastNavigationMode === 'present') {
      GestureController.closeModal('NewKiwiHotels');
    } else {
      this.props.onBackClicked();
    }
  };

  render = () => (
    <SingleHotelContext.Provider
      hotelId={''}
      checkin={new Date(this.props.checkin)}
      checkout={new Date(this.props.checkout)}
      roomsConfiguration={this.props.roomsConfiguration}
    >
      <LayoutDoubleColumn
        menuComponent={
          <View style={styles.container}>
            <NewAllHotels />
            <View style={styles.button}>
              <CloseButton onPress={this.onClosePress} />
            </View>
          </View>
        }
        containerComponent={<SingleHotelContainer goBack={noop} />}
      />
    </SingleHotelContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
  button: {
    position: 'absolute',
    bottom: Device.isIPhoneX ? 36 : 8,
    start: 8,
    end: 8,
  },
  icon: {
    marginEnd: 2,
    fontSize: 22,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  headerTitleLeft: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerTitleRight: {
    flex: 1,
    borderStartColor: defaultTokens.paletteInkLight,
    borderStartWidth: 0.5,
    paddingStart: 0.5,
  },
});

export default withSearchResultsContext(state => ({
  setResultType: state.setResultType,
  show: state.show,
}))(SearchResultsScreen);

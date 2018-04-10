// @flow

import * as React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { StyleSheet, AdaptableLayout } from '@kiwicom/react-native-app-shared';
import Translation from '@kiwicom/react-native-app-translations';
import {
  HeaderTitle,
  type NavigationType,
} from '@kiwicom/react-native-app-navigation';

import AllHotels from '../allHotels/AllHotels';
import AllHotelsMap from '../map/allHotels/AllHotelsMap';
import MapHeaderButton from './MapHeaderButton';
import type { Coordinates } from '../CoordinatesType';
import WithBackButtonListener from './WithBackButtonListener';

type ContainerProps = {|
  navigation: NavigationType,
  currency: string,
  coordinates: Coordinates | null,
|};

type NavigationProps = {|
  onBackClicked: () => void,
|};

type Props = ContainerProps & NavigationProps;

export default class AllHotelsNavigationScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate({
        routeName: 'AllHotelsMap',
        key: 'key-AllHotelsMap',
      });
    }

    function renderHeaderLeft() {
      return (
        <HeaderBackButton tintColor="#fff" onPress={props.onBackClicked} />
      );
    }

    function renderHeaderRight() {
      return (
        <AdaptableLayout
          renderOnNarrow={<MapHeaderButton onPress={goToAllHotelsMap} />}
        />
      );
    }

    return {
      headerLeft: renderHeaderLeft(),
      headerTitle: (
        <HeaderTitle>
          <Translation id="hotels.navigation.title.all_hotels" />
        </HeaderTitle>
      ),
      headerRight: renderHeaderRight(),
    };
  };

  onAndroidBackClicked = () => {
    this.props.onBackClicked();
    return true;
  };

  openLocationPicker = (location: string | null) => {
    this.props.navigation.navigate({
      routeName: 'LocationPicker',
      key: 'key-LocationPicker',
      params: {
        location,
      },
    });
  };

  openGuestsModal = () => {
    this.props.navigation.navigate({
      routeName: 'GuestsModal',
      key: 'key-GuestsModal',
    });
  };

  openSingleHotel = (searchParams: any) =>
    this.props.navigation.navigate({
      routeName: 'SingleHotel',
      key: 'key-SingleHotel',
      params: searchParams,
    });

  renderHotels = () => (
    <AllHotels
      currency={this.props.currency}
      openSingleHotel={this.openSingleHotel}
      coordinates={this.props.coordinates}
      openLocationPicker={this.openLocationPicker}
      openGuestsModal={this.openGuestsModal}
    />
  );

  renderHotelsWithMap = () => (
    <View style={styles.wrapper}>
      {this.renderHotels()}
      <View style={styles.map}>
        <AllHotelsMap
          currency={this.props.currency}
          onGoToSingleHotel={this.openSingleHotel}
          coordinates={this.props.coordinates}
        />
      </View>
    </View>
  );

  render = () => {
    return (
      <WithBackButtonListener onClick={this.onAndroidBackClicked}>
        <AdaptableLayout
          renderOnWide={this.renderHotelsWithMap()}
          renderOnNarrow={this.renderHotels()}
        />
      </WithBackButtonListener>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  map: {
    width: '55%',
  },
});

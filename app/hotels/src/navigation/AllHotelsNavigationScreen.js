// @flow

import * as React from 'react';
import { BackHandler, Platform } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { View } from 'react-native';
import {
  StyleSheet,
  HeaderRightButton,
  AdaptableLayout,
  DismissKeyboardView,
} from '@kiwicom/react-native-app-shared';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

import AllHotels from '../allHotels/AllHotels';
import AllHotelsMap from '../map/allHotels/AllHotelsMap';
import type { Coordinates } from '../CoordinatesType';

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
  backButtonListener = null;

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
          renderOnNarrow={<HeaderRightButton onPress={goToAllHotelsMap} />}
        />
      );
    }

    return {
      headerLeft: renderHeaderLeft(),
      headerTitle: 'Hotels',
      headerRight: renderHeaderRight(),
    };
  };

  componentDidMount = () => {
    if (Platform.OS === 'android' && this.backButtonListener === null) {
      this.backButtonListener = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          this.props.onBackClicked();
          return true;
        },
      );
    }
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
      <DismissKeyboardView>
        <AdaptableLayout
          renderOnWide={this.renderHotelsWithMap()}
          renderOnNarrow={this.renderHotels()}
        />
      </DismissKeyboardView>
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

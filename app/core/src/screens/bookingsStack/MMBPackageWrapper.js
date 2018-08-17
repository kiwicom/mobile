// @flow

import * as React from 'react';
import { AsyncStorage, View } from 'react-native';
import { ManageMyBookingPackage } from '@kiwicom/mobile-manage-my-booking';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, type DimensionType } from '@kiwicom/mobile-shared';

import Config from '../../../config/application';

type Props = {|
  +navigation: NavigationType,
  +dimensions: DimensionType,
  +onNavigationStateChange: () => void,
|};

type State = {|
  token: string | null,
  bookingId: number | null,
  simpleToken: string | null,
|};

export default class MMBPackageWrapper extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    token: '',
    bookingId: null,
    simpleToken: null,
  };

  willFocusSubscription: { remove: () => void };

  componentDidMount = () => {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.fetchToken();
      },
    );
    this.fetchToken();
  };

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  fetchToken = async () => {
    const token = await AsyncStorage.getItem('mobile:MMB-Token');
    const simpleTokenData = await AsyncStorage.getItem(
      'mobile:MMB-Simple-Token',
    );

    if (simpleTokenData) {
      const { bookingId, simpleToken } = JSON.parse(simpleTokenData);
      this.setState({ bookingId, simpleToken, token });
    } else {
      this.setState({ token, simpleToken: null, bookingId: null });
    }
  };

  render = () => {
    if (
      !this.state.token &&
      (!this.state.bookingId && !this.state.simpleToken)
    ) {
      return (
        <View style={styles.loginMessageContainer}>
          <Translation passThrough="You are not logged in, go to profile and log in" />
        </View>
      );
    }

    if (this.state.bookingId && this.state.simpleToken) {
      return (
        <ManageMyBookingPackage
          onNavigationStateChange={this.props.onNavigationStateChange}
          dimensions={this.props.dimensions}
          currency="EUR"
          bookingId={this.state.bookingId}
          simpleToken={this.state.simpleToken}
          version="rn-development"
          bookingComAffiliate={String(Config.affiliate.bookingCom)}
          dataSaverEnabled={false}
          googleMapsAPIKey={String(Config.apiKey.googleMaps)}
        />
      );
    }

    if (this.state.token) {
      return (
        <ManageMyBookingPackage
          onNavigationStateChange={this.props.onNavigationStateChange}
          dimensions={this.props.dimensions}
          currency="EUR"
          accessToken={this.state.token}
          version="rn-development"
          bookingComAffiliate={String(Config.affiliate.bookingCom)}
          dataSaverEnabled={false}
          googleMapsAPIKey={String(Config.apiKey.googleMaps)}
        />
      );
    }
    return null;
  };
}

const styles = StyleSheet.create({
  loginMessageContainer: {
    marginTop: 60,
  },
});

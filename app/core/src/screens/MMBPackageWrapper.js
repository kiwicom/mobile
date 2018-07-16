// @flow

import * as React from 'react';
import { AsyncStorage, View } from 'react-native';
import { ManageMyBookingPackage } from '@kiwicom/mobile-manage-my-booking';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, type DimensionType } from '@kiwicom/mobile-shared';

type Props = {|
  navigation: NavigationType,
  dimensions: DimensionType,
  onNavigationStateChange: () => void,
|};

export default class MMBPackageWrapper extends React.Component<
  Props,
  {| token: string | null |},
> {
  state = {
    token: '',
  };

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
    this.setState({ token });
  };

  render = () => {
    if (!this.state.token) {
      return (
        <View style={styles.loginMessageContainer}>
          <Translation passThrough="You are not logged in, go to profile and log in" />
        </View>
      );
    }

    return (
      <ManageMyBookingPackage
        onNavigationStateChange={this.props.onNavigationStateChange}
        dimensions={this.props.dimensions}
        currency="EUR"
        accessToken={this.state.token}
      />
    );
  };
}

const styles = StyleSheet.create({
  loginMessageContainer: {
    marginTop: 60,
  },
});

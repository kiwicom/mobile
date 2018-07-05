// @flow

import * as React from 'react';
import { AsyncStorage, View } from 'react-native';
import {
  StyleSheet,
  WithNativeNavigation,
  type DimensionType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import NavigationStack from '../../src/navigation/NavigationStack';
import RootComponent from './RootComponent';

type Props = {|
  dimensions: DimensionType,
  onNavigationStateChange: () => void,
  accessToken: string,
  currency: string,
|};

type State = {|
  accessToken: string,
|};

class MMBStandalonePackage extends React.Component<Props, State> {
  state = {
    accessToken: '',
  };

  componentDidMount = () => {
    this.fetchToken();
  };

  fetchToken = async () => {
    const accessToken = await AsyncStorage.getItem('mobile:MMB-Token');
    this.setState({ accessToken });
  };

  renderInnerComponent = () => {
    if (!this.state.accessToken && !this.props.accessToken) {
      return (
        <View style={styles.loginMessageContainer}>
          <Translation passThrough="You are not logged in, go to profile and log in" />
        </View>
      );
    }

    return (
      <NavigationStack
        onNavigationStateChange={this.props.onNavigationStateChange}
      />
    );
  };

  render = () => {
    return (
      <RootComponent
        dimensions={this.props.dimensions}
        accessToken={this.state.accessToken || this.props.accessToken}
      >
        {this.renderInnerComponent()}
      </RootComponent>
    );
  };
}

const styles = StyleSheet.create({
  loginMessageContainer: {
    marginTop: 60,
  },
});

export default WithNativeNavigation(MMBStandalonePackage, 'ManageMyBooking');

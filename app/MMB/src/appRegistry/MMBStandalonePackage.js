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

  renderInnerComponent = () => {
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
        accessToken={this.props.accessToken}
      >
        {this.renderInnerComponent()}
      </RootComponent>
    );
  };
}

export default WithNativeNavigation(MMBStandalonePackage, 'ManageMyBooking');

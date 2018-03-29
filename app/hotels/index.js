// @flow

import * as React from 'react';
import { AppRegistry, View, NativeModules } from 'react-native';
import { ReduxContext } from '@kiwicom/react-native-app-redux';
import { ConfigReducer } from '@kiwicom/react-native-app-config';
import {
  Device,
  type OnLayout,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import FiltersReducer from './src/filter/FiltersReducer';
import HotelsReducer from './src/HotelsReducer';
import HotelsStack from './src/navigation/NavigationStack';
import type { Coordinates } from './src/CoordinatesType';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {|
  bookingComAffiliate: string,
  language: string,
  currency: string,
  dataSaverEnabled: boolean,
  onBackClicked: () => void,
  coordinates: Coordinates | null,
|};

export default class HotelsStandalonePackage extends React.Component<Props> {
  emitDimensionChanges = (event: OnLayout) => {
    const { width, height } = event.nativeEvent.layout;
    Device.emitDimensionChanges(height, width);
  };

  onBackClicked = () => {
    if (NativeModules.RNNavigationModule) {
      NativeModules.RNNavigationModule.leaveHotels();
    } else {
      this.props.onBackClicked();
    }
  };

  render = () => {
    // This reducer is just a wrapper around 'ConfigReducer'. It basically sets
    // default reducer values based on the 'props'.
    const UpdatedConfigReducer = (
      state = {
        dataSaverEnabled: this.props.dataSaverEnabled,
      },
      action,
    ) => ConfigReducer(state, action);

    const reducers = {
      config: UpdatedConfigReducer,
      hotels: HotelsReducer,
      filters: FiltersReducer,
    };

    const screenProps = {
      ...this.props,
      onBackClicked: this.onBackClicked,
    };

    return (
      <ReduxContext reducers={reducers}>
        <View style={styles.container} onLayout={this.emitDimensionChanges}>
          <HotelsStack screenProps={screenProps} />
        </View>
      </ReduxContext>
    );
  };
}

AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);

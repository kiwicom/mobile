// @flow

import * as React from 'react';
import { AppRegistry, View } from 'react-native';
import { ReduxContext } from '@kiwicom/react-native-app-redux';
import { ConfigReducer } from '@kiwicom/react-native-app-config';
import { Device, type OnLayout } from '@kiwicom/react-native-app-shared';

import FiltersReducer from './src/filter/FiltersReducer';
import HotelsReducer from './src/HotelsReducer';
import HotelsStack from './src/navigation/NavigationStack';
import type { Coordinates } from './src/CoordinatesType';

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

    return (
      <ReduxContext reducers={reducers}>
        <View style={{ flex: 1 }} onLayout={this.emitDimensionChanges}>
          <HotelsStack screenProps={this.props} />
        </View>
      </ReduxContext>
    );
  };
}

AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);

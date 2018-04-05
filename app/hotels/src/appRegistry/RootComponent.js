// @flow

import * as React from 'react';
import { View, NativeModules } from 'react-native';
import { ReduxContext } from '@kiwicom/react-native-app-redux';
import { ConfigReducer } from '@kiwicom/react-native-app-config';
import {
  Device,
  type OnLayout,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import FiltersReducer from '../filter/FiltersReducer';
import HotelsReducer from '../HotelsReducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {|
  onBackClicked: () => void,
  dataSaverEnabled: boolean,
  render: (onBackClicked: () => void) => React.Element<any>,
|};

export default class RootComponent extends React.Component<Props> {
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

    return (
      <ReduxContext reducers={reducers}>
        <View style={styles.container} onLayout={this.emitDimensionChanges}>
          {this.props.render(this.onBackClicked)}
        </View>
      </ReduxContext>
    );
  };
}

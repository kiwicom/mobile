// @flow

import * as React from 'react';
import { View, NativeModules } from 'react-native';
import { ConfigContext } from '@kiwicom/mobile-config';
import {
  Device,
  type OnLayout,
  StyleSheet,
  GeolocationContext,
} from '@kiwicom/mobile-shared';

import HotelsSearchContext from '../HotelsSearchContext';
import HotelsFilterContext from '../HotelsFilterContext';

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

  render = () => (
    <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
      <HotelsSearchContext.Provider>
        <HotelsFilterContext.Provider>
          <GeolocationContext.Provider>
            <View style={styles.container} onLayout={this.emitDimensionChanges}>
              {this.props.render(this.onBackClicked)}
            </View>
          </GeolocationContext.Provider>
        </HotelsFilterContext.Provider>
      </HotelsSearchContext.Provider>
    </ConfigContext.Provider>
  );
}

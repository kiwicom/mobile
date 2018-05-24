// @flow

import * as React from 'react';
import { View } from 'react-native';

import Device from '../Device';
import StyleSheet from '../PlatformStyleSheet';
import type { OnLayout } from '../../index';

const AdaptableLayoutContext = React.createContext({
  isSet: false,
});

class Provider extends React.Component<
  {| children: React.Node |},
  {| isSet: boolean |},
> {
  state = {
    isSet: true,
  };

  emitDimensionChanges = (event: OnLayout) => {
    const { width, height } = event.nativeEvent.layout;
    Device.emitDimensionChanges(height, width);
  };

  render = () => (
    <View
      style={styleSheet.providerWrapper}
      onLayout={this.emitDimensionChanges}
    >
      <AdaptableLayoutContext.Provider value={this.state}>
        {this.props.children}
      </AdaptableLayoutContext.Provider>
    </View>
  );
}

class Consumer extends React.Component<
  {|
    renderOnWide?: React.Node,
    renderOnNarrow?: React.Node,
  |},
  {|
    wideLayout: boolean,
  |},
> {
  unsubscribeDimensionListener: Function = () => {};

  state = {
    wideLayout: Device.isWideLayout(),
  };

  componentDidMount = () => {
    this.unsubscribeDimensionListener = Device.subscribeToDimensionChanges(
      ({ width }) => {
        this.setState({
          wideLayout: width > Device.getWideDeviceThreshold(),
        });
      },
    );
  };

  componentWillUnmount = () => {
    this.unsubscribeDimensionListener();
  };

  render = () => {
    // may return nothing:
    // 1. renderOnWide set but we have narrow layout
    // 2. renderOnNarrow set but we have wide layout
    let children = null;

    if (this.state.wideLayout === true && this.props.renderOnWide) {
      children = this.props.renderOnWide;
    } else if (this.state.wideLayout === false && this.props.renderOnNarrow) {
      children = this.props.renderOnNarrow;
    }

    return (
      <AdaptableLayoutContext.Consumer>
        {contextValue => {
          if (contextValue.isSet === false) {
            if (process.env.NODE_ENV !== 'test') {
              throw new Error(
                'AdaptableLayout has been called in wrong context. You have to ' +
                  'use "AdaptableLayout.Provider" on the root level first ' +
                  "otherwise it won't work.",
              );
            }
          }

          return children;
        }}
      </AdaptableLayoutContext.Consumer>
    );
  };
}

export default {
  Provider,
  Consumer,
};

const styleSheet = StyleSheet.create({
  providerWrapper: {
    flex: 1,
  },
});

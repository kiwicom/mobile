// @flow

import * as React from 'react';
import { View } from 'react-native';

import Context from './AdaptableLayoutContext';
import Device from '../Device';
import StyleSheet from '../PlatformStyleSheet';
import type { OnLayout } from '../../index';

type Props = {|
  +children: React.Node,
|};

type State = {|
  isSet: boolean,
|};

export default class AdaptableLayoutProvider extends React.Component<
  Props,
  State,
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
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  providerWrapper: {
    flex: 1,
  },
});

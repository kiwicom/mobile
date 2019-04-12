// @flow

import * as React from 'react';
import { View, Dimensions } from 'react-native';

import Context from './DimensionsContext';
import StyleSheet from '../PlatformStyleSheet';
import type { OnLayout } from '../../types/Events';
import type { DimensionType } from '../../types/Objects';

type Props = {|
  +children: React.Node,
|};

type State = {|
  dimensions: DimensionType,
|};

class DimensionsProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const window = Dimensions.get('window');
    const height = window.height;
    const width = window.width;

    this.state = {
      dimensions: {
        height,
        width,
      },
    };
  }

  onLayout = (event: OnLayout) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      dimensions: { width, height },
    });
  };

  render() {
    return (
      <View style={styleSheet.providerWrapper} onLayout={this.onLayout}>
        <Context.Provider value={this.state}>
          {this.state.dimensions !== null && this.props.children}
        </Context.Provider>
      </View>
    );
  }
}

/**
 * When multiple DimensionsProviders are embedded within each other, use the outermost one.
 *
 * This is typically the case when we are running Javascript playground and each standalone
 * component has one DimensionsProvider (to be used by native apps) and one used by the Javascript
 * side.
 */
export default function DimensionsProviderWrapper(props: Props) {
  return (
    <Context.Consumer>
      {ctx => {
        return ctx.dimensions !== null ? (
          props.children
        ) : (
          <DimensionsProvider {...props} />
        );
      }}
    </Context.Consumer>
  );
}

const styleSheet = StyleSheet.create({
  providerWrapper: {
    flex: 1,
  },
});

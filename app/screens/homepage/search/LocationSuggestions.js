// @flow

import * as React from 'react';
import { Animated, Text, Dimensions } from 'react-native';

import config from '../../../config/application';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Props = {
  visible: boolean,
};

type State = {
  top: number,
};

export default class LocationSuggestions extends React.Component<
  Props,
  State,
> {
  state = {
    top: new Animated.Value(this.props.visible ? 250 : windowHeight), // default
  };

  componentWillReceiveProps = (nextProps: Props) => {
    Animated.timing(this.state.top, {
      toValue: nextProps.visible ? 250 : windowHeight, // FIXME: header height!
      duration: config.animations.duration,
    }).start();
  };

  render = () => {
    return (
      <Animated.View
        style={{
          top: this.state.top,
          height: windowHeight,
          width: windowWidth,
          backgroundColor: '#fff',
        }}
      >
        <Text>TODO: locations suggestions</Text>
      </Animated.View>
    );
  };
}

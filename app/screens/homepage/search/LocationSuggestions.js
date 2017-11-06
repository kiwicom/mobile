// @flow

import * as React from 'react';
import { Animated, Text, Dimensions } from 'react-native';

import config from '../../../config/application';
import { headerHeight } from './SearchHeader';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Props = {
  visible: boolean,
};

type State = {
  top: number,
};

export default class LocationSuggestions extends React.Component<Props, State> {
  state = {
    top: new Animated.Value(this.props.visible ? headerHeight : windowHeight), // default
  };

  componentWillReceiveProps = (nextProps: Props) => {
    Animated.timing(this.state.top, {
      toValue: nextProps.visible ? headerHeight : windowHeight,
      duration: config.animations.duration,
    }).start();
  };

  render = () => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
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

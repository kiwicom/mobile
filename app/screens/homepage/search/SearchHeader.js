// @flow

import * as React from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

import SearchForm from './SearchForm';
import config from '../../../config/application';

type Props = {
  onSend: ({
    from: string,
    to: string,
    date: Date,
  }) => void,
  onToggle: () => void,
};

type AnimatedState = {
  top: number,
  right: number,
  left: number,
  height: number,
};

type State = AnimatedState & {
  expanded: boolean,
};

const shrinkedValues = ({
  top: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
  right: 20,
  left: 20,
  height: 50,
}: AnimatedState);

const expandedValues = ({
  top: 0,
  right: 0,
  left: 0,
  height: 200,
}: AnimatedState);

export default class SearchHeader extends React.PureComponent<Props, State> {
  state = {
    expanded: false,
    top: new Animated.Value(shrinkedValues.top),
    right: new Animated.Value(shrinkedValues.right),
    left: new Animated.Value(shrinkedValues.left),
    height: new Animated.Value(shrinkedValues.height),
  };

  animate = (attributes: $Keys<AnimatedState>[]) => {
    attributes.forEach(attribute => {
      Animated.timing(this.state[attribute], {
        toValue: this.state.expanded
          ? expandedValues[attribute]
          : shrinkedValues[attribute],
        duration: config.animations.duration,
      }).start();
    });
  };

  toggleHeader = () => {
    this.setState({ expanded: !this.state.expanded }, () => {
      this.props.onToggle();
      this.animate(['top', 'right', 'left', 'height']);
    });
  };

  render = () => (
    <TouchableWithoutFeedback onPress={this.toggleHeader}>
      <Animated.View
        style={{
          position: 'absolute',
          zIndex: 1,
          top: this.state.top,
          right: this.state.right,
          left: this.state.left,
          height: this.state.height,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          padding: 10,
        }}
      >
        {this.state.expanded ? (
          <SearchForm
            onSend={(from, to, date) =>
              this.props.onSend({
                from,
                to,
                date,
              })}
          />
        ) : (
          <Text>Where do you want to travel?</Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

// @flow

import * as React from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import SearchHeaderForm from './SearchHeaderForm';
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
  fade: 0 | 1, // opacity direction
  brighten: 0 | 1, // opacity direction
};

type State = AnimatedState & {
  expanded: boolean,
};

const shrinkedValues = ({
  top: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 20,
  right: 20,
  left: 20,
  height: 65,
  fade: 1,
  brighten: 0,
}: AnimatedState);

const expandedValues = ({
  top: 0,
  right: 0,
  left: 0,
  height: 240,
  fade: 0,
  brighten: 1,
}: AnimatedState);

export const headerHeight = 240;

export default class SearchHeader extends React.Component<Props, State> {
  state = {
    expanded: false,
    top: new Animated.Value(shrinkedValues.top),
    right: new Animated.Value(shrinkedValues.right),
    left: new Animated.Value(shrinkedValues.left),
    height: new Animated.Value(shrinkedValues.height),
    fade: new Animated.Value(shrinkedValues.fade),
    brighten: new Animated.Value(shrinkedValues.brighten),
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
      this.animate(['top', 'right', 'left', 'height', 'fade', 'brighten']);
    });
  };

  render = () => (
    <TouchableWithoutFeedback onPress={this.toggleHeader}>
      <Animated.View
        style={{
          position: 'absolute',
          top: this.state.top,
          right: this.state.right,
          left: this.state.left,
          height: this.state.height,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          padding: 20,
          zIndex: 1, // must be above the location suggestions (because of shadow)
        }}
      >
        <Animated.Text
          style={{
            fontSize: 20,
            color: '#525760',
            opacity: this.state.fade,
          }}
        >
          Where do you travel?
        </Animated.Text>

        <Animated.View
          style={{
            opacity: this.state.brighten,
          }}
        >
          <SearchHeaderForm
            expanded={this.state.expanded}
            onSend={(from, to, date) =>
              this.props.onSend({
                from,
                to,
                date,
              })}
          />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

// @flow

import * as React from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import SearchHeaderForm from './SearchHeaderForm';
import config from '../../../../config/application';

type Props = {|
  onSend: ({|
    from: string,
    to: string,
    date: Date,
  |}) => void,
  onToggle: () => void,
|};

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

export const headerHeight = 250;

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

  animate = (attributes: $Keys<AnimatedState>[]) =>
    attributes.forEach(attribute => {
      // $FlowFixMe
      Animated.timing(this.state[attribute], {
        toValue: this.state.expanded
          ? expandedValues[attribute]
          : shrinkedValues[attribute],
        duration: config.animations.duration,
      }).start();
    });

  toggleHeader = () =>
    this.setState(
      prevState => ({ expanded: !prevState.expanded }),
      () => {
        this.props.onToggle();
        this.animate(['top', 'right', 'left', 'height', 'fade', 'brighten']);
      },
    );

  handleSearchFormSubmit = (from: string, to: string, date: Date) =>
    this.props.onSend({
      from,
      to,
      date,
    });

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
          elevation: 5, // Android only
          shadowOpacity: 0.3,
          padding: 20,
          zIndex: 2, // must be above the location suggestions (because of shadow)
        }}
      >
        <Animated.Text
          style={{
            fontSize: 20,
            color: '#525760',
            opacity: this.state.fade,
            display: this.state.expanded ? 'none' : 'flex',
          }}
        >
          Where do you travel?
        </Animated.Text>

        <Animated.View
          style={{
            opacity: this.state.brighten,
            display: this.state.expanded ? 'flex' : 'none',
          }}
        >
          <SearchHeaderForm
            expanded={this.state.expanded}
            onSend={this.handleSearchFormSubmit}
          />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const shrinkedValues = ({
  top: Platform.OS === 'ios' ? 60 : StatusBar.currentHeight + 40,
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
  height: headerHeight,
  fade: 0,
  brighten: 1,
}: AnimatedState);

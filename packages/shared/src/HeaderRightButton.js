// @flow

import * as React from 'react';
import { View } from 'react-native';

import StyleSheet from './PlatformStyleSheet';
import Touchable from './Touchable';

type Props = {|
  +onPress: () => void,
  +onLongPress?: (React.ElementRef<typeof Touchable>) => void,
  +children?: React.Node,
|};

type State = {|
  reference: React.ElementRef<typeof Touchable> | null,
|};

export default class HeaderRightButton extends React.PureComponent<
  Props,
  State,
> {
  state = {
    reference: null,
  };

  storeReference = (reference: React.ElementRef<typeof Touchable> | null) => {
    this.setState({ reference });
  };

  onLongPress = () => {
    if (this.state.reference !== null && this.props.onLongPress !== undefined) {
      this.props.onLongPress(this.state.reference);
    }
  };

  render = () => {
    const { onPress } = this.props;

    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityTraits="button"
        delayPressIn={0}
        onPress={onPress}
        style={styles.container}
        borderlessRipple={true}
        onLongPress={this.onLongPress}
        ref={this.storeReference}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>{this.props.children}</View>
        </View>
      </Touchable>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  innerContainer: {
    ios: {
      marginStart: 22,
      marginEnd: 10,
      paddingVertical: 12,
    },
    android: {
      margin: 16,
    },
  },
});

// @flow

import * as React from 'react';
import { View } from 'react-native';
import { type StylePropType } from '@kiwicom/mobile-shared';

import StyleSheet from './PlatformStyleSheet';
import Touchable from './Touchable';

type Props = {|
  +onPress: () => void,
  +onLongPress?: (React.ElementRef<typeof Touchable>) => void,
  +children?: React.Node,
  +left?: boolean,
  +style?: StylePropType,
|};

type State = {|
  reference: React.ElementRef<typeof Touchable> | null,
|};

export default class HeaderButton extends React.PureComponent<Props, State> {
  static Right = (props: Props) => (
    <HeaderButton {...props} style={[props.style, styles.right]} />
  );

  static Left = (props: Props) => (
    <HeaderButton {...props} style={[props.style, styles.left]} />
  );

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
    const { onPress, style } = this.props;

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
          <View style={[styles.innerContainer, style]}>
            {this.props.children}
          </View>
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
      paddingVertical: 12,
    },
    android: {
      margin: 16,
    },
  },
  right: {
    ios: {
      marginStart: 22,
      marginEnd: 10,
    },
  },
  left: {
    ios: {
      marginStart: 10,
      marginEnd: 22,
    },
  },
});

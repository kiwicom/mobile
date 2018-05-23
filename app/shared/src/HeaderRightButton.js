// @flow

import * as React from 'react';
import { View } from 'react-native';

import Color from './Color';
import StyleSheet from './PlatformStyleSheet';
import Touchable from './Touchable';
import Icon from './icons/Icon';

type Props = {|
  onPress: () => void,
  tintColor?: string,
  onLongPress?: (React.ElementRef<typeof Touchable>) => void,
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

  static defaultProps = {
    tintColor: Color.brand,
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
    const { onPress, tintColor } = this.props;

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
          <Icon style={styles.icon} name="map" size={24} color={tintColor} />
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
  icon: {
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

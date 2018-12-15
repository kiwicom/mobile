// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import Text from '../Text';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  +label: React.Element<typeof Translation>,
  +handlePress: () => void,
  +type: 'revealed' | 'truncated',
  +onExpandText: ?() => void,
  +onHideText: ?() => void,
  +style?: StylePropType,
|};

class ReadMoreLink extends React.Component<Props> {
  handlePress = () => {
    const { type, onExpandText, onHideText } = this.props;
    this.props.handlePress();

    if (type === 'truncated' && onExpandText != null) {
      onExpandText();
    }
    if (type === 'revealed' && onHideText != null) {
      onHideText();
    }
  };

  render() {
    const { style, label } = this.props;

    return (
      <View style={styles.linkView}>
        <Touchable onPress={this.handlePress} noRipple={true}>
          <Text style={[styles.linkText, style]}>{label}</Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linkView: {
    flexDirection: 'row',
  },
  linkText: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: '500',
  },
});

export default ReadMoreLink;

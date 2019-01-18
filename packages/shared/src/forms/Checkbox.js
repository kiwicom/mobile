// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';
import Icon from '../icons/Icon';

type Props = {|
  +onPress: () => void,
  +children: React.Node,
  +isChecked?: boolean,
  +style?: StylePropType,
|};

export default function Checkbox(props: Props) {
  const icon = (
    <Icon
      name={Platform.OS === 'ios' ? 'check-circle' : 'circle'}
      style={styles.iconStyle}
      color={defaultTokens.paletteProductNormal}
      fontSize={Platform.select({ ios: 26, android: 24 })}
    />
  );

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.wrapper, props.style]}>
        <View style={styles.label}>{props.children}</View>
        <View style={styles.checkWrapper}>
          {props.isChecked ? icon : <View style={styles.notChecked} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
  },
  label: {
    flex: 3,
    justifyContent: 'center',
    height: 26,
  },
  checkWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconStyle: {
    android: {
      borderWidth: 1,
      borderColor: defaultTokens.paletteProductNormal,
      borderRadius: 100,
    },
  },
  notChecked: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: defaultTokens.paletteInkLighter,
  },
});

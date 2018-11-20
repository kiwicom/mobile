// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';
import TextIcon from '../icons/TextIcon';

type Props = {|
  +onPress: () => void,
  +children: React.Node,
  +isChecked?: boolean,
  +style?: StylePropType,
|};

export default function Checkbox(props: Props) {
  const icon = (
    <TextIcon
      code={Platform.OS === 'ios' ? 'S' : '\ue013'}
      style={styles.iconStyle}
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
    color: defaultTokens.paletteProductNormal,
    ios: {
      width: 26,
      height: 26,
      fontSize: 28,
    },
    android: {
      width: 24,
      height: 24,
      borderWidth: 1,
      borderColor: defaultTokens.paletteProductNormal,
      borderRadius: 100,
      fontSize: 24,
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

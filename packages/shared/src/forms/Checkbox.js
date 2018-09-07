// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';
import StyleSheet from '../PlatformStyleSheet';
import Icon from '../icons/Icon';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  +onPress: () => void,
  +children: React.Node,
  +isChecked?: boolean,
  +style?: StylePropType,
|};

export default function Checkbox(props: Props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.wrapper, props.style]}>
        <View style={styles.label}>{props.children}</View>
        {props.isChecked && (
          <View style={styles.check}>
            <Icon
              name="check"
              size={Platform.select({
                android: 25, // solves checkbox row jumping on Android devices
                ios: 26,
              })}
              color={defaultTokens.paletteProductNormal}
            />
          </View>
        )}
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
  check: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

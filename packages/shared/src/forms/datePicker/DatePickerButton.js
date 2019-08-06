// @flow

import * as React from 'react';
import { DateFormatter, type DateFormatterFunctions } from '@kiwicom/mobile-localization';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Touchable from '../../Touchable';
import StyleSheet from '../../PlatformStyleSheet';
import Text from '../../Text';
import Translation from '../../Translation';

type Props = {|
  +onPress: () => void,
  +disabled: boolean,
  +date: ?Date,
  +formatFunction: ?DateFormatterFunctions,
  +iconComponent?: React.Node,
  +customButton?: React.Node | null,
|};

export default function DatePickerButton(props: Props) {
  if (props.customButton !== undefined) {
    return (
      <Touchable onPress={props.onPress} disabled={props.disabled}>
        {props.customButton}
      </Touchable>
    );
  }
  return (
    <Touchable
      style={[styles.dateTouchBody, props.disabled ? styles.disabled : null]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <View style={styles.date}>
        {props.iconComponent}
        {props.date !== null && (
          <Text style={styles.dateText}>
            <Translation
              passThrough={DateFormatter(props.date)[props.formatFunction || 'formatToDate']()}
            />
          </Text>
        )}
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  dateTouchBody: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    android: {
      height: 48,
      borderRadius: 2,
      elevation: 1,
    },
    ios: {
      borderRadius: 6,
      height: 47,
    },
    justifyContent: 'center',
  },
  date: {
    flexDirection: 'row',
    marginStart: 10,
  },
  dateText: {
    color: defaultTokens.colorTextAttention,
    android: {
      fontSize: 16,
    },
    ios: {
      paddingTop: 2,
      fontSize: 14,
    },
    marginStart: 5,
  },
  disabled: {
    backgroundColor: defaultTokens.paletteCloudLight,
  },
});

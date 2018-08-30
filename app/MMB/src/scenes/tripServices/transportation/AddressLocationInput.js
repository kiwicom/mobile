// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextIcon, TextInput, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +defaultValue?: string,
  +autoFocus?: boolean,
  +onChangeText?: (text: string) => void,
  +keyboardType?: 'email-address',
  +secureTextEntry?: boolean,
|};

export default function AddressLocationInput(props: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.iconWrapper, styles.inputWrapperStyle]}>
        <TextIcon code="B" style={styles.icon} />
        <Text style={styles.text}>
          <Translation id="mmb.trip_services.transportation.address_picker.input.placeholder" />
        </Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput {...props} inputWrapperStyle={styles.inputWrapperStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    start: 0,
    end: -65,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    paddingStart: 52,
  },
  inputWrapperStyle: {
    android: {
      elevation: 1,
      height: 38,
    },
    ios: {
      height: 37,
    },
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    start: 0,
    backgroundColor: defaultTokens.paletteCloudNormal,
    borderTopStartRadius: 6,
    borderBottomStartRadius: 6,
  },
  icon: {
    fontSize: 14,
    padding: 10,
    color: defaultTokens.paletteInkLight,
  },
  text: {
    color: defaultTokens.paletteInkLight,
  },
});

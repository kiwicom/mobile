// @flow strict

import * as React from 'react';
import idx from 'idx';
import { View, Platform } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, TextIcon, Touchable } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +passengerFullName: string,
  +onPress: () => void,
  +disabled?: boolean,
  +passengerSubtitle?: React.Node,
  +menuRightContent?: React.Node,
|};

const PassengerMenuItem = (props: Props) => {
  const disabled = idx(props, _ => _.disabled) || false;
  const passengerSubtitle = idx(props, _ => _.passengerSubtitle) || null;
  const menuRightContent = idx(props, _ => _.menuRightContent) || null;
  return (
    <Touchable onPress={props.onPress} disabled={disabled}>
      <View style={styles.container}>
        <View>
          <Translation passThrough={props.passengerFullName} />
          {passengerSubtitle || null}
        </View>
        <View style={styles.rightContent}>
          {menuRightContent}
          {Platform.select({
            android: null,
            ios: !disabled && <TextIcon code="&#xe01F;" style={styles.icon} />,
          })}
        </View>
      </View>
    </Touchable>
  );
};

export default PassengerMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 26,
    color: defaultTokens.paletteProductNormal,
  },
});

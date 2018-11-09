// @flow strict

import * as React from 'react';
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
  const disabled = props?.disabled ?? false;
  const passengerSubtitle = props.passengerSubtitle ?? null;
  const menuRightContent = props?.menuRightContent ?? null;
  return (
    <Touchable onPress={props.onPress} disabled={disabled}>
      <View style={styles.container}>
        <View>
          <Translation passThrough={props.passengerFullName} />
          {passengerSubtitle}
        </View>
        <View style={styles.rightContent}>
          {menuRightContent}
          {Platform.select({
            android: null,
            ios: disabled === false && (
              <TextIcon code="&#xe01F;" style={styles.icon} />
            ),
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

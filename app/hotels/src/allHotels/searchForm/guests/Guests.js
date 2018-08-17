// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Touchable, StyleSheet, Icon, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomConfigurationType } from '../SearchParametersType';

type Props = {|
  +guests: RoomConfigurationType,
  +openGuestsModal: () => void,
|};

export const ButtonTitle = ({
  adultsCount,
  childrenCount,
}: {
  adultsCount: number,
  childrenCount: number,
}) => {
  return (
    <Text>
      <Translation id="hotels_search.guests.adults" />
      <Translation passThrough={` ${adultsCount}`} />
      <Text style={childrenCount > 0 ? null : buttonStyles.childrenStyle}>
        <Translation passThrough=" ⋅ " />
        <Translation id="hotels_search.guests.children" />
        <Translation passThrough={` ${childrenCount}`} />
      </Text>
    </Text>
  );
};

export default function Guests({ guests, openGuestsModal }: Props) {
  return (
    <Touchable onPress={openGuestsModal} style={buttonStyles.button}>
      <View style={buttonStyles.buttonWrapper}>
        <Icon name="people" size={20} style={buttonStyles.icon} />
        <ButtonTitle
          adultsCount={guests.adultsCount}
          childrenCount={guests.children.length}
        />
      </View>
    </Touchable>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    android: {
      borderRadius: 2,
      elevation: 1,
    },
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: defaultTokens.paletteCloudNormal,
    android: {
      height: 48,
      borderRadius: 2,
    },
    ios: {
      borderRadius: 6,
      height: 47,
    },
  },
  icon: {
    marginEnd: 8,
  },
  childrenStyle: {
    color: defaultTokens.colorTextSecondary,
  },
});

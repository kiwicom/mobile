// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Touchable,
  Color,
  StyleSheet,
  Icon,
  Text,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import type { RoomConfigurationType } from '../SearchParametersType';

type Props = {|
  guests: RoomConfigurationType,
  openGuestsModal: () => void,
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
    <Touchable onPress={openGuestsModal}>
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
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Color.inputBackground,
    borderRadius: 6,
    android: {
      elevation: 1,
      height: 48,
    },
    ios: {
      height: 47,
    },
  },
  icon: {
    marginRight: 8,
  },
  childrenStyle: {
    color: Color.textLight,
  },
});

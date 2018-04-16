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
  const childrenStyle = {
    color: Color.grey.$400,
  };
  return (
    <Text>
      <Translation id="hotels_search.guests.adults" />
      <Translation passThrough={` ${adultsCount}`} />
      <Text style={childrenStyle}>
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
        <Icon
          name="people"
          size={20}
          color={Color.grey.$600}
          style={buttonStyles.icon}
        />
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
    elevation: 1, // Android only
    backgroundColor: '#fff',
    android: {
      borderRadius: 3,
      height: 48,
    },
    ios: {
      borderRadius: 0,
      height: 47,
    },
  },
  icon: {
    marginRight: 8,
  },
});

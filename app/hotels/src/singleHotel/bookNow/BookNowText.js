// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  ButtonText,
  type StylePropType,
} from '@kiwicom/react-native-app-shared';

const styles = StyleSheet.create({
  priceWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonInnerWrapper: {
    paddingVertical: 14,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
});

type Props = {|
  price: React.Node,
  numberOfRooms: number,
  personCount: number,
  buttonPriceStyle: StylePropType,
|};

export default function BookNowText(props: Props) {
  const roomsIsPlural = props.numberOfRooms > 1;
  const personsIsPlural = props.personCount > 1;
  const personsAndRoomsText = `${props.personCount} person${
    personsIsPlural ? 's' : ''
  } · ${props.numberOfRooms} room${roomsIsPlural ? 's' : ''} · `;
  return (
    <View style={styles.buttonInnerWrapper}>
      <ButtonText style={styles.buttonTitle} text="Book Now" />
      <View style={styles.priceWrapper}>
        <ButtonText style={props.buttonPriceStyle} text={personsAndRoomsText} />
        {props.price}
      </View>
    </View>
  );
}

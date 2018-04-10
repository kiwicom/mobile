// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  ButtonText,
  type StylePropType,
} from '@kiwicom/react-native-app-shared';
import Translation from '@kiwicom/react-native-app-translations';

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
  return (
    <View style={styles.buttonInnerWrapper}>
      <ButtonText
        style={styles.buttonTitle}
        text={<Translation id="single_hotel.book_now" />}
      />
      <View style={styles.priceWrapper}>
        <ButtonText
          style={props.buttonPriceStyle}
          text={
            <Translation
              id="single_hotel.book_now.description"
              values={{
                personCount: props.personCount,
                numberOfRooms: props.numberOfRooms,
              }}
            />
          }
        />
        {props.price}
      </View>
    </View>
  );
}

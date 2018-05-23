// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  ButtonTitle,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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
      <ButtonTitle
        style={styles.buttonTitle}
        text={<Translation id="single_hotel.book_now" />}
      />
      <View style={styles.priceWrapper}>
        <ButtonTitle
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

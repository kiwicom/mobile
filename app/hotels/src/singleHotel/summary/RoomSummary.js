// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Price } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';

import SummaryRow from './SummaryRow';
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from '../HotelDetailScreenContext';

type Props = {|
  +getPersonCount: () => number,
  +numberOfRooms: number,
  +price: $PropertyType<HotelDetailScreenState, 'price'>,
|};

function RoomSummary(props: Props) {
  if (props.numberOfRooms === 0 || props.price == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SummaryRow
          text={<Translation id="single_hotel.room_summary.total" />}
          price={
            <Price
              amount={props.price.amount}
              currency={props.price.currency}
              style={styles.total}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: 0,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
  },
  content: {
    paddingHorizontal: 17,
    paddingTop: 8,
    paddingBottom: 12,
  },
  total: {
    fontWeight: '800',
  },
});

const select = ({
  numberOfRooms,
  getPersonCount,
  price,
}: HotelDetailScreenState) => ({
  numberOfRooms,
  getPersonCount,
  price,
});

export default withHotelDetailScreenContext(select)(RoomSummary);

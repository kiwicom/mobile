// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet, Price } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';

import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from './HotelDetailScreenContext';
import type { HotelDetailScreen_availableHotel } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import countBookingPrice from './bookNow/countBookingPrice';

type Props = {|
  +getPersonCount: () => number,
  +numberOfRooms: number,
  +availableRooms: ?$PropertyType<
    HotelDetailScreen_availableHotel,
    'availableRooms',
  >,
  +selected: $PropertyType<HotelDetailScreenState, 'selected'>,
|};

function RoomSummary(props: Props) {
  const price = countBookingPrice(props.availableRooms, props.selected);

  if (props.numberOfRooms === 0 || price == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.summary}>
          <Translation id="single_hotel.room_summary.summary" />
        </Text>
        <View style={styles.row}>
          <Translation
            id="single_hotel.book_now.description"
            values={{
              personCount: props.getPersonCount(),
              numberOfRooms: props.numberOfRooms,
            }}
          />
          <Price price={price} style={styles.currency} />
        </View>
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
  summary: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
    marginEnd: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currency: {
    fontWeight: '800',
  },
});

const select = ({
  numberOfRooms,
  selected,
  getPersonCount,
}: HotelDetailScreenState) => ({
  numberOfRooms,
  selected,
  getPersonCount,
});

export default withHotelDetailScreenContext(select)(RoomSummary);

// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color, Price } from '@kiwicom/react-native-app-shared';
import idx from 'idx';

import countBookingPrice from './countBookingPrice';
import convertRooms from './convertRooms';
import type { BookNow_availableRooms } from './__generated__/BookNow_availableRooms.graphql';
import type { BookNow_hotel } from './__generated__/BookNow_hotel.graphql';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 14,
    paddingBottom: 12,
    flex: 1,
    backgroundColor: Color.brand,
  },
  cta: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});

type ContainerProps = {|
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
  selected: {
    [string]: number,
  },
  availableRooms: any,
  hotel: any,
|};

type Props = {
  ...ContainerProps,
  availableRooms: ?BookNow_availableRooms,
  hotel: ?BookNow_hotel,
};

export class BookNow extends React.Component<Props> {
  handleGoToPayment = () => {
    const hotelId = idx(this.props.hotel, _ => _.originalId);
    if (hotelId) {
      this.props.onGoToPayment({
        hotelId: Number(hotelId),
        rooms: convertRooms(this.props.selected),
      });
    }
  };

  render() {
    const price = countBookingPrice(
      this.props.availableRooms,
      this.props.selected,
    );
    return (
      price && (
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleGoToPayment}
        >
          <Text style={styles.cta}>Book Now</Text>
          <Price
            style={styles.price}
            amount={price.amount}
            currency={price.currency}
          />
        </TouchableOpacity>
      )
    );
  }
}

export default (createFragmentContainer(
  BookNow,
  graphql`
    fragment BookNow_availableRooms on HotelRoomAvailability
      @relay(plural: true) {
      originalId
      incrementalPrice {
        amount
        currency
      }
    }

    fragment BookNow_hotel on Hotel {
      originalId
    }
  `,
): React.ComponentType<ContainerProps>);

// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Color, Touchable, Price } from '@kiwicom/mobile-shared';
import idx from 'idx';

import BookNowText from './BookNowText';
import countBookingPrice from './countBookingPrice';
import convertRooms from './convertRooms';
import type { BookNow_availableRooms } from './__generated__/BookNow_availableRooms.graphql';
import type { BookNow_hotel } from './__generated__/BookNow_hotel.graphql';

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    start: 0,
    end: 0,
    flex: 1,
    backgroundColor: Color.brand,
  },
  buttonPrice: {
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
  numberOfRooms: number,
  personCount: number,
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
        <View style={styles.buttonWrapper}>
          <Touchable onPress={this.handleGoToPayment}>
            <BookNowText
              price={
                <Price
                  style={styles.buttonPrice}
                  amount={price.amount}
                  currency={price.currency}
                />
              }
              buttonPriceStyle={styles.buttonPrice}
              numberOfRooms={this.props.numberOfRooms}
              personCount={this.props.personCount}
            />
          </Touchable>
        </View>
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

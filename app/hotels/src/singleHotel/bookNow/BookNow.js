// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Touchable, Price } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo } from '@kiwicom/mobile-localization';

import BookNowText from './BookNowText';
import countBookingPrice from './countBookingPrice';
import convertRooms from './convertRooms';
import type { BookNow_availableRooms } from './__generated__/BookNow_availableRooms.graphql';
import type { BookNow_hotel } from './__generated__/BookNow_hotel.graphql';
import SingleHotelContext from '../../navigation/singleHotel/SingleHotelContext';
import HotelsContext from '../../HotelsContext';

type PropsWithContext = {
  ...Props,
  +checkin: Date,
  +checkout: Date,
  +bookingComAffiliate: string,
  +currency: string,
};

export class BookNow extends React.Component<PropsWithContext> {
  handleGoToPayment = () => {
    const hotelId = idx(this.props.hotel, _ => _.originalId);
    if (hotelId) {
      this.props.navigation.navigate('Payment', {
        hotelId: Number(hotelId),
        rooms: convertRooms(this.props.selected),
        checkin: this.props.checkin,
        checkout: this.props.checkout,
        affiliateId: this.props.bookingComAffiliate,
        language: DeviceInfo.getLanguage(),
        currency: this.props.currency,
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

type Props = {|
  +selected: {
    [string]: number,
  },
  +availableRooms: any,
  +hotel: any,
  +numberOfRooms: number,
  +personCount: number,
  +availableRooms: ?BookNow_availableRooms,
  +hotel: ?BookNow_hotel,
  +navigation: NavigationType,
|};

export const BookNowWithContext = (props: Props) => {
  return (
    <HotelsContext.Consumer>
      {({ currency }) => (
        <SingleHotelContext.Consumer>
          {state => <BookNow {...props} {...state} currency={currency} />}
        </SingleHotelContext.Consumer>
      )}
    </HotelsContext.Consumer>
  );
};

export default createFragmentContainer(
  withNavigation(BookNowWithContext),
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
);

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    start: 0,
    end: 0,
    flex: 1,
    backgroundColor: defaultTokens.paletteProductNormal,
  },
  buttonPrice: {
    fontSize: 12,
    color: defaultTokens.paletteWhite,
    textAlign: 'center',
  },
});

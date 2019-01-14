// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  Button,
  ButtonTitle,
  Logger,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo, Translation, Alert } from '@kiwicom/mobile-localization';

import convertRooms from './convertRooms';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from '../HotelDetailScreenContext';

type Props = {
  +selected: {
    [string]: number,
  },
  +navigation: NavigationType,
  +currency: string,
  +hotelId: ?string,
  +getGuestCount: () => number,
  +maxPersons: number,
  +price: {|
    +amount: number,
    +currency: string,
  |},
};

export class BookNow extends React.Component<Props> {
  handleGoToPayment = () => {
    const hotelId = this.props.hotelId;
    if (hotelId != null) {
      const rooms = convertRooms(this.props.selected);
      Logger.hotelsBookNowPressed({
        hotelID: hotelId,
        rooms: rooms.reduce((prev, curr) => prev + curr.count, 0),
        guests: this.props.getGuestCount(),
        price: this.props.price,
      });
      this.props.navigation.navigate('Payment', {
        hotelId,
        rooms,
        language: DeviceInfo.getLanguage(),
      });
    }
  };

  onPress = () => {
    const numberOfGuests = this.props.getGuestCount();
    if (numberOfGuests > this.props.maxPersons) {
      Alert.translatedAlert(
        {
          id: 'single_hotel.book_now.alert_title',
        },
        {
          id: 'single_hotel.book_now.alert_body',
          values: { numberOfGuests },
        },
        [
          {
            text: { id: 'shared.button.cancel' },
            style: 'destructive',
          },
          {
            text: {
              id: 'single_hotel.book_now.alert_ok',
            },
            onPress: this.handleGoToPayment,
          },
        ],
      );
    } else {
      this.handleGoToPayment();
    }
  };

  render() {
    return (
      <Button onPress={this.onPress} testID="bookNowButton">
        <ButtonTitle
          text={<Translation id="single_hotel.book_now" />}
          style={styles.text}
        />
      </Button>
    );
  }
}

const select = ({ currency, hotelId, getGuestCount }: HotelsContextState) => ({
  currency,
  hotelId,
  getGuestCount,
});
const selectHotelDetailScreen = ({
  selected,
  maxPersons,
  price,
}: HotelDetailScreenState) => ({
  selected,
  maxPersons,
  price,
});

export default withHotelDetailScreenContext(selectHotelDetailScreen)(
  withHotelsContext(select)(withNavigation(BookNow)),
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.paletteWhite,
  },
});

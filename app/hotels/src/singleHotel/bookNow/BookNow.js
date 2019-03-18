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
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { BookNow_rooms as RoomsType } from './__generated__/BookNow_rooms.graphql';
import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';

type Props = {
  +navigation: NavigationType,
  +currency: string,
  +hotelId: ?string,
  +getGuestCount: () => number,
  +amount: ?string,
  +rooms: ?RoomsType,
  +maxPersons: number,
};

export class BookNow extends React.Component<Props> {
  handleGoToPayment = () => {
    const hotelId = this.props.hotelId;
    if (hotelId != null) {
      const availableRooms = this.props.rooms?.availableRooms ?? [];
      const rooms = availableRooms
        .filter(room => room?.selectedCount)
        .map(room => ({
          id: room?.id,
          count: room?.selectedCount,
        }));
      Logger.hotelsBookNowPressed({
        hotelID: hotelId,
        rooms: rooms.reduce((prev, curr) => prev + curr.count, 0),
        guests: this.props.getGuestCount(),
        price: {
          amount: parseFloat(this.props.amount ?? 0),
          currency: this.props.currency,
        },
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

export default createFragmentContainer(
  withHotelsContext(select)(withNavigation(BookNow)),
  {
    rooms: graphql`
      fragment BookNow_rooms on HotelAvailabilityInterface {
        availableRooms {
          id
          selectedCount
        }
      }
    `,
  },
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.paletteWhite,
  },
});

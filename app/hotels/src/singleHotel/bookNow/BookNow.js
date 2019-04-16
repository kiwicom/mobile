// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  Button,
  ButtonTitle,
  Logger,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo, Alert } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import type { BookNow_rooms as RoomsType } from './__generated__/BookNow_rooms.graphql';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';

type Props = {
  +navigation: NavigationType,
  +amount: ?string,
  +rooms: ?RoomsType,
  +maxPersons: number,
};

export function BookNow(props: Props) {
  const {
    currency,
    hotelId,
    getGuestCount,
  }: HotelsContextState = React.useContext(HotelsContext);

  function handleGoToPayment() {
    if (hotelId != null) {
      const availableRooms = props.rooms?.availableRooms ?? [];
      const rooms = availableRooms
        .filter(room => room?.selectedCount)
        .map(room => ({
          id: room?.id,
          count: room?.selectedCount,
        }));

      Logger.hotelsBookNowPressed({
        hotelID: hotelId,
        rooms: rooms.reduce((prev, curr) => prev + curr.count, 0),
        guests: getGuestCount(),
        price: {
          amount: parseFloat(props.amount ?? 0),
          currency: currency,
        },
      });
      props.navigation.navigate('Payment', {
        hotelId,
        rooms,
        language: DeviceInfo.getLanguage(),
      });
    }
  }

  function onPress() {
    const numberOfGuests = getGuestCount();

    if (numberOfGuests > props.maxPersons) {
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
            onPress: handleGoToPayment,
          },
        ],
      );
    } else {
      handleGoToPayment();
    }
  }

  return (
    <Button onPress={onPress} testID="bookNowButton">
      <ButtonTitle
        text={<Translation id="single_hotel.book_now" />}
        style={styles.text}
      />
    </Button>
  );
}

export default createFragmentContainer(withNavigation(BookNow), {
  rooms: graphql`
    fragment BookNow_rooms on HotelAvailabilityInterface {
      availableRooms {
        id
        selectedCount
      }
    }
  `,
});

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.paletteWhite,
  },
});

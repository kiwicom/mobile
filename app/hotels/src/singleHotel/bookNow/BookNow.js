// @flow strict

import * as React from 'react';
import { StyleSheet, Button, ButtonTitle } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo, Translation } from '@kiwicom/mobile-localization';

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
};

export class BookNow extends React.Component<Props> {
  handleGoToPayment = () => {
    const hotelId = this.props.hotelId;
    if (hotelId != null) {
      this.props.navigation.navigate('Payment', {
        hotelId,
        rooms: convertRooms(this.props.selected),
        language: DeviceInfo.getLanguage(),
      });
    }
  };

  render() {
    return (
      <Button onPress={this.handleGoToPayment} testID="bookNowButton">
        <ButtonTitle
          text={<Translation id="single_hotel.book_now" />}
          style={styles.text}
        />
      </Button>
    );
  }
}

const select = ({ currency, hotelId }: HotelsContextState) => ({
  currency,
  hotelId,
});
const selectHotelDetailScreen = ({ selected }: HotelDetailScreenState) => ({
  selected,
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

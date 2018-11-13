// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Button, ButtonTitle } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo, Translation } from '@kiwicom/mobile-localization';

import convertRooms from './convertRooms';
import type { BookNow_hotel } from './__generated__/BookNow_hotel.graphql';
import { withHotelsContext } from '../../HotelsContext';

type Props = {
  +selected: {
    [string]: number,
  },
  +hotel: ?BookNow_hotel,
  +navigation: NavigationType,
  +currency: string,
};

export class BookNow extends React.Component<Props> {
  handleGoToPayment = () => {
    const hotelId = this.props.hotel?.id;
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

const select = ({ currency }) => ({ currency });

export default createFragmentContainer(
  withHotelsContext(select)(withNavigation(BookNow)),
  graphql`
    fragment BookNow_hotel on HotelInterface {
      id
    }
  `,
);

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
    color: defaultTokens.paletteWhite,
  },
});

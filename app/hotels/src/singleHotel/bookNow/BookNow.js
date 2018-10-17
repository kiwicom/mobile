// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Button, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { DeviceInfo, Translation } from '@kiwicom/mobile-localization';

import convertRooms from './convertRooms';
import type { BookNow_hotel } from './__generated__/BookNow_hotel.graphql';
import SingleHotelContext from '../../navigation/singleHotel/SingleHotelContext';
import HotelsContext from '../../HotelsContext';

type PropsWithContext = {
  ...Props,
  +checkin: Date,
  +checkout: Date,
  +currency: string,
};

export class BookNow extends React.Component<PropsWithContext> {
  handleGoToPayment = () => {
    const hotelId = idx(this.props.hotel, _ => _.originalId);
    if (hotelId) {
      this.props.navigation.navigate('Payment', {
        hotelId: Number(hotelId),
        rooms: convertRooms(this.props.selected),
        language: DeviceInfo.getLanguage(),
      });
    }
  };

  render() {
    return (
      <Button onPress={this.handleGoToPayment} testID="bookNowButton">
        <Text style={styles.text}>
          <Translation id="single_hotel.book_now" />
        </Text>
      </Button>
    );
  }
}

type Props = {|
  +selected: {
    [string]: number,
  },
  +availableRooms: any,
  +hotel: any,
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
    fragment BookNow_hotel on Hotel {
      originalId
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

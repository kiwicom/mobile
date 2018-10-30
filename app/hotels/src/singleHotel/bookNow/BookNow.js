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
import SingleHotelContext, {
  type State as SingleHotelState,
} from '../../navigation/singleHotel/SingleHotelContext';
import HotelsContext, {
  type State as HotelsContextState,
} from '../../HotelsContext';

type PropsWithContext = {
  ...Props,
  +checkin: Date,
  +checkout: Date,
  +currency: string,
};

export class BookNow extends React.Component<PropsWithContext> {
  handleGoToPayment = () => {
    const hotelId = idx(this.props.hotel, _ => _.id);
    if (hotelId) {
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

export class BookNowWithContext extends React.Component<Props> {
  renderHotelsContext = ({ currency }: HotelsContextState) => (
    <SingleHotelContext.Consumer>
      {this.renderSingleHotelContext(currency)}
    </SingleHotelContext.Consumer>
  );

  renderSingleHotelContext = (
    currency: $PropertyType<HotelsContextState, 'currency'>,
  ) => (state: SingleHotelState) => (
    <BookNow {...this.props} {...state} currency={currency} />
  );

  render() {
    return (
      <HotelsContext.Consumer>
        {this.renderHotelsContext}
      </HotelsContext.Consumer>
    );
  }
}

export default createFragmentContainer(
  withNavigation(BookNowWithContext),
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

// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-shared';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { HeaderBackButton } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import {
  withHotelsContext,
  type HotelsContextState,
  type ApiProvider,
} from '../../HotelsContext';
import BookingPaymentScreen from './BookingPaymentScreen';
import Stay22PaymentScreen from './Stay22PaymentScreen';

export type Props = {|
  +apiProvider: ApiProvider,
  +rooms: Array<{|
    +id: string,
    +count: number, // how many rooms with this ID?
  |}>,
|};

type RoomConfig = {|
  +roomId: string,
  +count: number,
|};

export class PaymentScreen extends React.Component<Props> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationType,
  }) => {
    function goBack() {
      navigation.goBack(null);
    }
    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="hotels.navigation.title.payment" />
        </HeaderTitle>
      ),
      headerLeft: (
        <HeaderBackButton
          onPress={goBack}
          tintColor={defaultTokens.paletteProductNormal}
        />
      ),
    };
  };

  getRoomConfig = () =>
    this.props.rooms.map<RoomConfig>(room => ({
      roomId: room.id,
      count: room.count,
    }));

  render() {
    const roomConfig = this.getRoomConfig();
    if (this.props.apiProvider === 'booking') {
      return <BookingPaymentScreen roomConfig={roomConfig} />;
    }
    return <Stay22PaymentScreen roomConfig={roomConfig} />;
  }
}

export default withHotelsContext((state: HotelsContextState) => ({
  apiProvider: state.apiProvider,
}))(PaymentScreen);

// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-shared';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { HeaderBackButton } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import {
  HotelsContext,
  type HotelsContextState,
  type ApiProvider,
} from '../../HotelsContext';
import BookingPaymentScreen from './BookingPaymentScreen';
import Stay22PaymentScreen from './Stay22PaymentScreen';

export type Props = {|
  +apiProvider: ApiProvider,
  +rooms: $ReadOnlyArray<{|
    +id: string,
    +count: number, // how many rooms with this ID?
  |}>,
|};

type RoomConfig = {|
  +roomId: string,
  +count: number,
|};

export function PaymentScreen(props: Props) {
  const { apiProvider }: HotelsContextState = React.useContext(HotelsContext);
  const roomConfig = props.rooms.map<RoomConfig>(room => ({
    roomId: room.id,
    count: room.count,
  }));

  if (apiProvider === 'booking') {
    return <BookingPaymentScreen roomConfig={roomConfig} />;
  }
  return <Stay22PaymentScreen roomConfig={roomConfig} />;
}

PaymentScreen.navigationOptions = ({
  navigation,
}: {|
  navigation: NavigationType,
|}) => {
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

export default PaymentScreen;

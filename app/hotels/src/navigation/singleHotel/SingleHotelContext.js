// @flow

import * as React from 'react';

import type { RoomConfigurationType } from '../../HotelsContext';

export type ApiProvider = 'booking' | 'stay22';

const defaultState = {
  hotelId: '',
  checkin: new Date(),
  checkout: new Date(),
  roomsConfiguration: [],
  setHotelId: () => {},
  apiProvider: 'booking',
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +hotelId: string,
  +checkin: ?Date,
  +checkout: ?Date,
  +roomsConfiguration: ?RoomConfigurationType,
  +apiProvider: ?ApiProvider,
|};

export type State = {|
  hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
  +apiProvider: ApiProvider,
  +setHotelId: (hotelId: string) => void,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hotelId: props.hotelId,
      checkin: props.checkin ?? new Date(), // If we hit the fallback on any of this, there is some error from how native passes props. This should be caught and handled in result screen
      checkout: props.checkout ?? new Date(),
      roomsConfiguration: props.roomsConfiguration ?? [],
      apiProvider: props.apiProvider ?? 'booking',
      setHotelId: this.setHotelId,
    };
  }

  setHotelId = (hotelId: string) => {
    this.setState({ hotelId });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

// @flow

import * as React from 'react';

type BookingDetail = {|
  +isPastBooking: boolean,
  +bookingId: string,
  +arrivalCityId: string,
  +arrivalTime: Date,
  +departureTime: Date,
|};

const defaultState = {
  isPastBooking: false,
  bookingId: '',
  arrivalCityId: '',
  arrivalTime: new Date(),
  departureTime: new Date(),
  eTicketPath: null,
  actions: {
    setBookingDetail: () => {},
    setETicketPath: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
|};

type State = {|
  ...BookingDetail,
  +eTicketPath: null | string,
  +actions: {|
    +setBookingDetail: (booking: BookingDetail) => void,
    +setETicketPath: (path: string) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      eTicketPath: null,
      actions: {
        setBookingDetail: this.setBookingDetail,
        setETicketPath: this.setETicketPath,
      },
    };
  }

  setETicketPath = (eTicketPath: string | null) => {
    this.setState({ eTicketPath });
  };

  setBookingDetail = (booking: BookingDetail) => {
    this.setState(booking);
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

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
  isMissingDocumentId: false,
  actions: {
    setBookingDetail: () => {},
    setIsMissingDocumentId: () => {},
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
  +isMissingDocumentId: boolean,
  +actions: {|
    +setBookingDetail: (booking: BookingDetail) => void,
    +setIsMissingDocumentId: (isMissingDocumentId: boolean) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        setBookingDetail: this.setBookingDetail,
        setIsMissingDocumentId: this.setIsMissingDocumentId,
      },
    };
  }

  setBookingDetail = (booking: BookingDetail) => {
    this.setState(booking);
  };

  setIsMissingDocumentId = (isMissingDocumentId: boolean) => {
    this.setState({ isMissingDocumentId });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

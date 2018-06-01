// @flow

import * as React from 'react';

type BookingDetail = {|
  +isPastBooking: boolean,
  +bookingId: string,
  +arrivalCityId: string,
  +arrivalTime: Date,
|};
const defaultState = {
  isPastBooking: false,
  bookingId: '',
  arrivalCityId: '',
  arrivalTime: new Date(),
  actions: {
    setBookingDetail: () => {},
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
  +actions: {|
    +setBookingDetail: (booking: BookingDetail) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        setBookingDetail: this.setBookingDetail,
      },
    };
  }

  setBookingDetail = ({
    isPastBooking,
    bookingId,
    arrivalCityId,
    arrivalTime,
  }: BookingDetail) => {
    this.setState({ isPastBooking, bookingId, arrivalCityId, arrivalTime });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

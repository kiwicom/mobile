// @flow

import * as React from 'react';

type BookingDetail = {|
  +isPastBooking: boolean,
  +bookingId: string,
|};
const defaultState = {
  isPastBooking: false,
  bookingId: '',
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
      isPastBooking: false,
      bookingId: '',
      actions: {
        setBookingDetail: this.setBookingDetail,
      },
    };
  }

  setBookingDetail = ({ isPastBooking, bookingId }: BookingDetail) => {
    this.setState({ isPastBooking, bookingId });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

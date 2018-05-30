// @flow

import * as React from 'react';

const defaultState = {
  isPastBooking: false,
  bookingId: '',
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +isPastBooking: boolean,
  +bookingId: string,
|};

type State = {|
  +isPastBooking: boolean,
  +bookingId: string,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPastBooking: props.isPastBooking,
      bookingId: props.bookingId,
    };
  }

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

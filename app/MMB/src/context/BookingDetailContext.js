// @flow

import * as React from 'react';

const defaultState = {
  isPastBooking: false,
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +isPastBooking: boolean,
|};

type State = {|
  +isPastBooking: boolean,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPastBooking: props.isPastBooking,
    };
  }

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

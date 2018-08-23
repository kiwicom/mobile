// @flow strict

import * as React from 'react';

const defaultState = {
  bookingComAffiliate: '',
  dataSaverEnabled: false,
  version: '',
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +bookingComAffiliate: string,
  +dataSaverEnabled: boolean,
  +version: string,
|};

type State = {|
  +bookingComAffiliate: string,
  +dataSaverEnabled: boolean,
  +version: string,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      bookingComAffiliate: props.bookingComAffiliate,
      dataSaverEnabled: props.dataSaverEnabled,
      version: props.version,
    };
  }
  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

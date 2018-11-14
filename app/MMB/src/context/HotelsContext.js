// @flow strict

import * as React from 'react';

const defaultState = {
  dataSaverEnabled: false,
  onNavigationStateChange: () => {},
  version: '',
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  ...defaultState,
});

type Props = {|
  +children: React.Node,
  +dataSaverEnabled: boolean,
  +version: string,
  +onNavigationStateChange: () => void,
|};

type State = {|
  +dataSaverEnabled: boolean,
  +version: string,
  +onNavigationStateChange: () => void,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      dataSaverEnabled: props.dataSaverEnabled,
      version: props.version,
      onNavigationStateChange: props.onNavigationStateChange,
    };
  }

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export default { Consumer, Provider };

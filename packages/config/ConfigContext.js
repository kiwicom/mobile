// @flow strict

import * as React from 'react';

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  dataSaverEnabled: false,
  actions: {
    toggleDataSaver: () => {},
  },
});

type Props = {|
  children: React.Node,
  dataSaverEnabled?: boolean,
|};

type State = {|
  dataSaverEnabled: boolean,
  actions: {|
    toggleDataSaver: () => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  toggleDataSaver: () => void;

  constructor(props: Props) {
    super(props);

    this.toggleDataSaver = () => {
      this.setState(prevState => ({
        dataSaverEnabled: !prevState.dataSaverEnabled,
      }));
    };

    this.state = {
      // enabled data saver disables images downloading to save data transfers
      dataSaverEnabled: props.dataSaverEnabled || false,
      actions: {
        toggleDataSaver: this.toggleDataSaver,
      },
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

const ConfigContext = { Consumer, Provider };

export default ConfigContext;

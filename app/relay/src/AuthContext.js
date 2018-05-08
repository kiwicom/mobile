// @flow

import * as React from 'react';

const defaultState = {
  accessToken: null,
  actions: {
    setAccessToken: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  ...defaultState,
});

type Props = {|
  children: React.Node,
  accessToken?: string | null,
|};

type State = {|
  accessToken: string | null,
  actions: {|
    setAccessToken: (accessToken: string | null) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      accessToken: props.accessToken || null,
      actions: {
        setAccessToken: this.setAccessToken,
      },
    };
  }

  setAccessToken = (accessToken: string | null) => {
    this.setState({ accessToken });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

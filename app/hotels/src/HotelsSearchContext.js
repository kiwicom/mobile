// @flow

import * as React from 'react';

import type { CurrentSearchStats } from './filter/CurrentSearchStatsType';

const InitialContextState = {
  currentSearchStats: {
    priceMax: 10000,
    priceMin: 0,
  },
  actions: {
    setCurrentSearchStats: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext(
  InitialContextState,
);

type Props = {|
  +children: React.Node,
|};

type State = {|
  currentSearchStats: CurrentSearchStats,
  actions: {|
    setCurrentSearchStats: ({|
      priceMax: number,
      priceMin: number,
    |}) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...InitialContextState,
      actions: {
        setCurrentSearchStats: this.setCurrentSearchStats,
      },
    };
  }

  setCurrentSearchStats = (currentSearchStats: CurrentSearchStats) => {
    this.setState({
      currentSearchStats,
    });
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };

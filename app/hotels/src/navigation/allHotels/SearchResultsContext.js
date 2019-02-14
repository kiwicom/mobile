// @flow

import * as React from 'react';
import { withContext } from '@kiwicom/mobile-shared';

export type ResultType = 'list' | 'map';

const defaultValue = {
  show: 'list',
  setResultType: () => {},
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
  ...defaultValue,
});

type Props = {|
  +children: React.Node,
|};

type State = {
  show: ResultType,
  +setResultType: (show: ResultType) => void,
};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      show: 'list',
      setResultType: this.setResultType,
    };
  }

  setResultType = (show: ResultType) => {
    this.setState({ show });
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export function withSearchResultsContext(select: (state: State) => Object) {
  return withContext<State>(select, Consumer);
}

export type SearchResultState = State;

const SearchResultsContext = { Consumer, Provider };

export default SearchResultsContext;

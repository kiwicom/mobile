// @flow

import * as React from 'react';

export type ResultType = 'list' | 'map';

const defaultValue = {
  show: 'list',
  setResultType: () => {},
};

export const SearchResultsContext = React.createContext<State>({
  ...defaultValue,
});

type Props = {|
  +children: React.Node,
  +show?: ResultType,
|};

type State = {
  show: ResultType,
  +setResultType: (show: ResultType) => void,
};

function Provider(props: Props) {
  const [show, setResultType] = React.useState(props.show ?? 'list');
  const state = {
    show,
    setResultType,
  };
  return (
    <SearchResultsContext.Provider value={state}>
      {props.children}
    </SearchResultsContext.Provider>
  );
}

export type SearchResultState = State;

export default { Provider };

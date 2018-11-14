// @flow

import * as React from 'react';

const defaultState = {
  highlightText: false,
};

type State = {|
  +highlightText: boolean,
|};

const { Consumer, Provider } = React.createContext<State>(defaultState);

export default { Consumer, Provider };

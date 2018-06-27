// @flow

import * as React from 'react';

const defaultState = {
  highlightText: false,
};

const { Consumer, Provider } = React.createContext({
  ...defaultState,
});

export default { Consumer, Provider };

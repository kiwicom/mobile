// @flow

import * as React from 'react';

type State = {|
  +displayTopLine: boolean,
  +displayBottomLine: boolean,
|};

export default React.createContext<State>({
  displayTopLine: true,
  displayBottomLine: true,
});

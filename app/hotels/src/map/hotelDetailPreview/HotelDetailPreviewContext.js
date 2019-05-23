// @flow strict

import * as React from 'react';

const defaultContextValue = {
  containerWidth: 0,
};

export type State = {|
  +containerWidth: number,
|};

const Context = React.createContext<State>(defaultContextValue);

const { Provider, Consumer } = Context;

export { Provider as HotelPreviewProvider, Consumer as HotelDetailConsumer };

export default Context;

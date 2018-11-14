// @flow strict

import * as React from 'react';

const defaultContextValue = {
  containerWidth: 0,
};

export type State = {|
  +containerWidth: number,
|};

const { Provider, Consumer } = React.createContext<State>(defaultContextValue);

export { Provider as HotelPreviewProvider, Consumer as HotelDetailConsumer };

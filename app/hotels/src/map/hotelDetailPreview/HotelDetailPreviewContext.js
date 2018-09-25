// @flow strict

import * as React from 'react';

const defaultContextValue = {
  containerWidth: 0,
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

export { Provider as HotelPreviewProvider, Consumer as HotelDetailConsumer };

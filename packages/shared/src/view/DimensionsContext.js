// @flow

import * as React from 'React';

import type { DimensionType } from '../../index';

type ContextType = {|
  +dimensions: ?DimensionType,
|};

export default React.createContext<ContextType>({
  dimensions: null,
});

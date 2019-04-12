// @flow

import * as React from 'react';
import { Dimensions } from 'react-native';

import type { DimensionType } from '../../index';

type ContextType = {|
  +dimensions: DimensionType,
|};

const window = Dimensions.get('window');
const height = window.height;
const width = window.width;
export default React.createContext<ContextType>({
  dimensions: { width, height },
});

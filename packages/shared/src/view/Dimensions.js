// @flow

import Provider from './DimensionsProvider';
import Consumer, {
  withDimensions as _withDimensions,
} from './DimensionsConsumer';

const Dimensions = {
  Provider,
  Consumer,
};

export const withDimensions = _withDimensions;

export default Dimensions;

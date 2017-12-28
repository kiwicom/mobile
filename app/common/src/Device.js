// @flow

import { Dimensions } from 'react-native';

function renewDimensions() {
  return Dimensions.get('screen');
}

export default {
  isPortrait() {
    const { height, width } = renewDimensions();
    return height >= width;
  },
  isLandscape() {
    const { height, width } = renewDimensions();
    return width >= height;
  },
  getLandscapeThreshold() {
    const { height, width } = renewDimensions();
    return Math.min(height, width);
  },
};

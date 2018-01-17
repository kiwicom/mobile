// @flow

import { Dimensions } from 'react-native';

function renewDimensions() {
  try {
    return Dimensions.get('screen');
  } catch (error) {
    // screen is not available in the 'test' environment
    return { width: 0, height: 0 };
  }
}

// Tablets have often dimensions ratio 3:2-4:3, phones have often ratio 16:9
const WIDE_DEVICE_THRESHOLD = 1.6; // 16:10 is max acceptable for screen rotation

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
  isTablet() {
    const { width, height } = renewDimensions();
    const min = Math.min(width, height);
    const max = Math.max(width, height);
    return max / min <= WIDE_DEVICE_THRESHOLD;
  },
};

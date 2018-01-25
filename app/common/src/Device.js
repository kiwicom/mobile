// @flow

import { Dimensions } from 'react-native';

function renewDimensions() {
  // Tests would throw error for not set 'screen'. Catch the error and return default values.
  // See https://github.com/facebook/react-native/blob/0cd69e8a02d254577fac9ccd3ff8a1727a024cc8/Libraries/Utilities/Dimensions.js#L93
  try {
    return Dimensions.get('screen');
  } catch (e) {
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

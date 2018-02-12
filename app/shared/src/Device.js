// @flow

import { Dimensions, Platform } from 'react-native';

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
  isTablet() {
    const { width, height } = renewDimensions();
    const min = Math.min(width, height);
    const max = Math.max(width, height);
    return max / min <= WIDE_DEVICE_THRESHOLD;
  },
  getLandscapeThreshold() {
    const { height, width } = renewDimensions();
    return Math.min(height, width);
  },
  getToolbarHeight() {
    // note: toolbar is not statusbar
    return Platform.select({
      android: 56,
      ios: 64,
    });
  },
};

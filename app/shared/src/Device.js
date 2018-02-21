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
    if (Platform.OS === 'ios' && Platform.isPad) {
      return true;
    }

    const { width, height } = renewDimensions();
    const min = Math.min(width, height);
    const max = Math.max(width, height);

    // everything below 16:10 is considered to be a tablet (~3:2, ~4:3)
    // everything above 16:10 is considered to be a phone (~16:9)
    return max / min <= 1.6;
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

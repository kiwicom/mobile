// @flow

import { Dimensions, Platform } from 'react-native';

type ScreenDimensions = {
  width: number,
  height: number,
};

export default {
  dimensions: {
    width: 0,
    height: 0,
  },
  renewDimensions() {
    try {
      const { width, height } = this.dimensions;
      if (width && height) {
        return { width, height };
      }
      return Dimensions.get('screen');
    } catch (error) {
      // screen is not available in the 'test' environment
      return { width: 0, height: 0 };
    }
  },
  // React native is unable to read correct dimensions when mulit tasking iOS
  // Allow root view to set current dimensions and use those instead
  setDimensions(dimensions: ScreenDimensions) {
    this.dimensions = dimensions;
  },
  isPortrait() {
    const { height, width } = this.renewDimensions();
    return height >= width;
  },
  isLandscape() {
    const { height, width } = this.renewDimensions();
    return width >= height;
  },
  isTablet() {
    const { width, height } = this.renewDimensions();
    const min = Math.min(width, height);
    const max = Math.max(width, height);

    // everything below 16:10 is considered to be a tablet (~3:2, ~4:3)
    // everything above 16:10 is considered to be a phone (~16:9)
    return max / min <= 1.6;
  },
  getDimensions() {
    return this.renewDimensions();
  },
  getLandscapeThreshold() {
    const { height, width } = this.renewDimensions();
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

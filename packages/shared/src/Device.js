// @flow strict

import { Platform, Dimensions } from 'react-native';

import { type DimensionType } from '../types/Objects';

// Borrowed this code from https://github.com/react-community/react-native-safe-area-view
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

const isIPhoneX = (() => {
  if (Platform.OS === 'web') {
    return false;
  }

  return (
    (Platform.OS === 'ios' &&
      ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
    ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
      (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
  );
})();

const Device = {
  /**
   * .---.
   * |   |
   * |   |
   * `---`
   */
  isPortrait({ height, width }: DimensionType) {
    return height >= width;
  },

  /**
   * .------.
   * |      |
   * `------`
   */
  isLandscape({ height, width }: DimensionType) {
    return width >= height;
  },

  /**
   * Wide layout is usually for tablets. However, this may be false even
   * on tablet for example during iOS multitasking mode.
   */
  isWideLayout({ width }: DimensionType) {
    return width > this.DEVICE_THRESHOLD;
  },

  isNarrowLayout(dimensions: DimensionType) {
    return !this.isWideLayout(dimensions);
  },

  /**
   * Wide device is every device above this value.
   */
  DEVICE_THRESHOLD: 668, // according to the graphic design

  /**
   * Height of the application toobar. Please note that toolbar is the
   * place where top navigation resides. Don't confuse it with statusbar.
   */
  TOOLBAR_HEIGHT: Platform.select({
    android: 56,
    ios: 64,
  }),

  isIPhoneX,
};

export default Device;

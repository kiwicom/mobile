// @flow strict

import { Platform } from 'react-native';
import { type DimensionType } from '@kiwicom/mobile-shared';

export default {
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
};

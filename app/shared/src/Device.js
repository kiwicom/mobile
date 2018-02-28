// @flow

import { Dimensions, Platform } from 'react-native'; // eslint-disable-line no-restricted-imports

type DimensionsType = {|
  width: number,
  height: number,
|};

let dimensions: DimensionsType = {
  width: 0,
  height: 0,
};

function renewDimensions(): DimensionsType {
  if (dimensions.width === 0 && dimensions.height === 0) {
    return Dimensions.get('screen');
  }
  return dimensions;
}

const dimensionChangeListeners = [];

/**
 * Node: there are no `getWidth` or `getHeight`. These dimensions are changing
 * during the application lifecycle so you have to use `AdaptableLayout`
 * component or subscribe to these changes.
 */
export default {
  /**
   * This is just a workaround for RN issue with wrong screen dimensions while
   * multitasking in iOS devices. It should be called ONLY from the root element.
   *
   * @see: https://github.com/facebook/react-native/issues/16152
   */
  emitDimensionChanges(height: number, width: number) {
    // store new dimensions to the memory so they persist
    dimensions = {
      height,
      width,
    };

    // invoke listeners with new dimensions
    dimensionChangeListeners.forEach(event => {
      event({ height, width });
    });
  },

  /**
   * Dimensions may change (landscape <-> portrait, multitasking). Subscribe to
   * this event if you want to be notified about these changes.
   */
  subscribeToDimensionChanges(
    handler: (dimensions: DimensionsType) => void,
  ): () => void {
    dimensionChangeListeners.push(handler);

    return function unsubscribe() {
      const index = dimensionChangeListeners.indexOf(handler);
      dimensionChangeListeners.splice(index, 1);
    };
  },

  /**
   * .---.
   * |   |
   * |   |
   * `---`
   */
  isPortrait() {
    const { height, width } = renewDimensions();
    return height >= width;
  },

  /**
   * .------.
   * |      |
   * `------`
   */
  isLandscape() {
    const { height, width } = renewDimensions();
    return width >= height;
  },

  /**
   * Wide layout is usually for tablets. However, this may be false even
   * on tablet for example during iOS multitasking mode.
   *
   * WARNING: this won't update with device change. Use subscriber instead.
   */
  isWideLayout() {
    const { width } = renewDimensions();
    return width > this.getWideDeviceThreshold();
  },

  /**
   * WARNING: this won't update with device change. Use subscriber instead.
   */
  isNarrowLayout() {
    return !this.isWideLayout();
  },

  /**
   * Wide device is every device above this value.
   */
  getWideDeviceThreshold() {
    return 668; // according to the graphic design
  },

  /**
   * Height of the application toobar. Please note that toolbar is the
   * place where top navigation resides. Don't confuse it with statusbar.
   */
  getToolbarHeight() {
    return Platform.select({
      android: 56,
      ios: 64,
    });
  },
};

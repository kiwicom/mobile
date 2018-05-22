// @flow

import { NativeModules } from 'react-native';

describe('GestureController', () => {
  it('should call NativeModules.RNKiwiGestureController.enableGestures', () => {
    const GestureController = require('../GestureController').default;

    GestureController.enableGestures('KiwiHotels');
    expect(
      NativeModules.RNKiwiGestureController.enableGestures,
    ).toHaveBeenCalledWith('KiwiHotels');
  });

  it('should call noop when there is no native module present', () => {
    jest.resetModules();

    const OriginalGestureController = NativeModules.RNKiwiGestureController;

    delete NativeModules.RNKiwiGestureController;

    const GestureController = require('../GestureController').default;

    expect(() => GestureController.enableGestures('KiwiHotels')).not.toThrow();

    NativeModules.RNKiwiGestureController = OriginalGestureController;
  });
});

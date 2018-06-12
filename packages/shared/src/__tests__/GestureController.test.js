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
});

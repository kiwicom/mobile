// @flow strict

type State = {
  key: string,
  isTransitioning: boolean,
  index: number,
  routes: mixed[],
};

import { NativeModules } from 'react-native';

export default function GestureController(
  previousState: State,
  currentState: State,
  moduleName: string,
) {
  if (NativeModules.RNKiwiGestureController !== undefined) {
    if (currentState.index === 0) {
      // enable gestures
      NativeModules.RNKiwiGestureController.addGestures(moduleName);
    } else if (currentState.index > 0) {
      // disable gestures
      NativeModules.RNKiwiGestureController.removeGestures(moduleName);
    }
  }
  return null;
}

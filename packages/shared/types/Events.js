// @flow

import type { ScrollEvent, LayoutEvent } from 'react-native/Libraries/Types/CoreEventTypes';

export type OnLayout = LayoutEvent;

/**
 * <TextInput onFocus={} />
 *
 * @see https://facebook.github.io/react-native/docs/textinput.html#onfocus (not documented)
 */
export type OnFocus = {|
  nativeEvent: {|
    text: string,
  |},
|};

/**
 * Dimensions.addEventListener('change', handler);
 *
 * @see https://facebook.github.io/react-native/docs/dimensions.html#addeventlistener
 */
type Dimensions = {|
  scale: number,
  fontScale: number,
  height: number,
  width: number,
|};

export type OnDimensionsChange = {|
  screen: Dimensions,
  window: Dimensions,
|};

export type GestureState = {
  _accountsForMovesUpTo: number,
  dx: number,
  dy: number,
  moveX: number,
  moveY: number,
  numberActiveTouches: number,
  stateID: number,
  vx: number,
  vy: number,
  x0: number,
  y0: number,
  ...
};

export type PressEvent = {
  +nativeEvent: $ReadOnly<{|
    changedTouches: $ReadOnlyArray<$PropertyType<PressEvent, 'nativeEvent'>>,
    force: number,
    identifier: number,
    locationX: number,
    locationY: number,
    pageX: number,
    pageY: number,
    target: ?number,
    timestamp: number,
    touches: $ReadOnlyArray<$PropertyType<PressEvent, 'nativeEvent'>>,
  |}>,
  ...
};

export type WebViewStateChangeEvent = {|
  +url: string,
  +loading: boolean,
|};

export type OnScroll = ScrollEvent;

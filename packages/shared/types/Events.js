// @flow

/**
 * <View onLayout={...} />
 * <FlatList onLayout={...} /> (FlatList is just wrapper for View)
 *
 * @see https://facebook.github.io/react-native/docs/view.html#onlayout
 */
export type OnLayout = {|
  nativeEvent: {|
    layout: {|
      x: number,
      y: number,
      width: number,
      height: number,
    |},
  |},
|};

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
};

export type PanResponderEvent = {
  nativeEvent: {
    changedTouches: [],
    force: number,
    identifier: number,
    locationX: number,
    locationY: number,
    pageX: number,
    pageY: number,
    target: number,
    timestamp: number,
    touches: [],
  },
};

export type WebViewStateChangeEvent = {|
  +url: string,
  +loading: boolean,
|};

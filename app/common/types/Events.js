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

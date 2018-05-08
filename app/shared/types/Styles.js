// @flow strict

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */
import type { StyleProp as NativeStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

export type StylePropType = NativeStyleProp;

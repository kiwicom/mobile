// @flow strict

/**
 * Styles are only reexported here to avoid importing internal RN libraries
 * everywhere (types are not exported directly).
 */

import {
  type ____DangerouslyImpreciseStyleProp_Internal,
  type DangerouslyImpreciseStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type StyleObjectType = {
  +[key: string]: $Shape<DangerouslyImpreciseStyle>,
};

export type PlatformStyleObjectType = {
  +[key: string]: $Shape<
    DangerouslyImpreciseStyle & {
      android: DangerouslyImpreciseStyle,
      ios: DangerouslyImpreciseStyle,
    },
  >,
};

export type StylePropType = ____DangerouslyImpreciseStyleProp_Internal;

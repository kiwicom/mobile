// @flow

import * as React from 'react';

import Translation from './Translation';
import Text from './Text';
import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

type Props = {|
  // number of stars
  +rating?: ?number,
  +style?: StylePropType,
|};

export default function Stars({ rating, style }: Props) {
  return (
    <Text style={[styles.stars, style]}>
      <Translation passThrough={'★'.repeat(rating || 0)} />
    </Text>
  );
}

const styles = StyleSheet.create({
  stars: {
    letterSpacing: 2,
  },
});

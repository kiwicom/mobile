// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import Text from './Text';
import StyleSheet from './PlatformStyleSheet';

type Props = {|
  // number of stars
  +rating?: ?number,
|};

export default function Stars({ rating }: Props) {
  return (
    <Text style={styles.stars}>
      <Translation passThrough={'★'.repeat(rating || 0)} />
    </Text>
  );
}

const styles = StyleSheet.create({
  stars: {
    letterSpacing: 2,
  },
});

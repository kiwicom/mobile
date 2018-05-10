// @flow

import * as React from 'react';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';

type Props = {|
  type: 'RETURN' | 'ONE_WAY' | 'MULTICITY',
|};

export default function TravelTypeIcon(props: Props) {
  switch (props.type) {
    case 'RETURN':
      return <TextIcon code="s" style={styles.icon} />;
    case 'ONE_WAY':
      return <TextIcon code="&#xe0A9;" style={styles.icon} />;
    case 'MULTICITY':
      return <TextIcon code={'>'} style={styles.icon} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  icon: {
    color: Color.white,
  },
});

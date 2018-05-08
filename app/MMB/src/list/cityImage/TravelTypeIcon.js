// @flow

import * as React from 'react';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';

type Props = {|
  type: string,
|};

export default function TravelTypeIcon(props: Props) {
  switch (props.type) {
    case 'RETURN':
      return <TextIcon style={styles.icon}>s</TextIcon>;
    case 'ONE_WAY':
      return <TextIcon style={styles.icon}>&#xe0A9;</TextIcon>;
    case 'MULTICITY':
      return <TextIcon style={styles.icon}>{'>'}</TextIcon>;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  icon: {
    color: Color.white,
  },
});

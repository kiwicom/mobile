// @flow

import * as React from 'react';
import {
  TextIcon,
  StyleSheet,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  type: 'RETURN' | 'ONE_WAY' | 'MULTICITY',
  style?: StylePropType,
|};

export default function TravelTypeIcon(props: Props) {
  switch (props.type) {
    case 'RETURN':
      return (
        <TextIcon code="s" style={[styles.icon, props.style]} orbit={true} />
      );
    case 'ONE_WAY':
      return (
        <TextIcon code="C" style={[styles.icon, props.style]} orbit={true} />
      );
    case 'MULTICITY':
      return (
        <TextIcon code={']'} style={[styles.icon, props.style]} orbit={true} />
      );
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  icon: {
    color: defaultTokens.colorIconSecondary,
  },
});

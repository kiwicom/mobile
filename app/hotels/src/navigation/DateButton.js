// @flow strict

import * as React from 'react';
import {
  AdaptableBadge,
  StyleSheet,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +children: React.Element<typeof Translation>,
|};

export default function DateButton(props: Props) {
  return (
    <AdaptableBadge
      style={styles.badge}
      textStyle={styles.badgeText}
      translation={props.children}
    />
  );
}

const styles = StyleSheet.create({
  badgeText: {
    fontSize: 12,
    color: defaultTokens.colorTextPrimary,
  },
  badge: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginBottom: 12,
  },
});

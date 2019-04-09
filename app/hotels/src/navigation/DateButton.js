// @flow strict

import * as React from 'react';
import { AdaptableBadge, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

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

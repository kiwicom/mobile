// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import type { TranslationType } from '@kiwicom/mobile-localization';
import {
  AdaptableLayout,
  StyleSheet,
  Color,
  Text,
} from '@kiwicom/mobile-shared';

type Props = {|
  +title: TranslationType,
  +content: React.Node,
|};

export default function FlightListLayout(props: Props) {
  return (
    <React.Fragment>
      <Text style={styles.subtitle}>{props.title}</Text>
      <AdaptableLayout
        renderOnNarrow={props.content}
        renderOnWide={<View style={styles.tabletWrapper}>{props.content}</View>}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 10,
    marginBottom: 12,
    color: Color.textLight,
  },
  tabletWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

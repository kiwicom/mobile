// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';

type Props = {|
  +title: TranslationType,
  +text: TranslationType | $ReadOnlyArray<TranslationType>,
|};

const ExploreText = (props: Props) => {
  return (
    <View style={styles.padding}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subText}>{props.text}</Text>
    </View>
  );
};

export default ExploreText;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  subText: {
    color: Color.textLight,
    fontSize: 12,
    marginTop: 7,
  },
  padding: {
    paddingHorizontal: 20,
  },
});

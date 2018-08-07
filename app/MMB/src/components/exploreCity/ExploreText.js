// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';

import ExploreButton from './ExploreButton';

type Props = {|
  +title: TranslationType,
  +text: TranslationType,
  +city: ?string,
|};

const ExploreText = (props: Props) => {
  return (
    <React.Fragment>
      <View style={styles.padding}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subText}>{props.text}</Text>
      </View>
      <View style={[styles.padding, styles.buttonContainer]}>
        <ExploreButton cityName={props.city} />
      </View>
    </React.Fragment>
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
  buttonContainer: {
    marginBottom: 25,
  },
});

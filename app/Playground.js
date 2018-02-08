// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import PlaygroundRenderer from './PlaygroundRenderer';
// Import component tests you want to show in the Playground here:
// eslint-disable-next-line
import _ from './hotels/src/gallery/__tests__/PhotosStripeHeader.test';

const PlaygroundSection = props => (
  <View style={styles.section}>{props.children}</View>
);

export default function Playground() {
  return (
    <View style={styles.playground}>
      {PlaygroundRenderer.components.map((component, index) => (
        <PlaygroundSection key={index}>{component}</PlaygroundSection>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  playground: {
    marginTop: 40,
    flex: 1,
  },
  section: {
    marginVertical: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eee',
    flex: 1,
  },
});

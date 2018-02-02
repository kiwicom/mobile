// @flow

import * as React from 'react';
import { View } from 'react-native';

import PlaygroundRenderer from './PlaygroundRenderer';
// Import component tests you want to show in the Playground here:
import AdaptableBadge from './shared/src/badge/__tests__/AdaptableBadge.test'; // eslint-disable-line

const PlaygroundSection = props => (
  <View
    style={{
      marginVertical: 5,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    }}
  >
    {props.children}
  </View>
);

export default function Playground() {
  return (
    <View style={{ marginTop: 40 }}>
      {PlaygroundRenderer.components.map((component, index) => (
        <PlaygroundSection key={index}>{component}</PlaygroundSection>
      ))}
    </View>
  );
}

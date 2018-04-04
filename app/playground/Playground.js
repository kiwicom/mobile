// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/react-native-app-shared';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import PlaygroundRenderer from './PlaygroundRenderer';
// Import component tests you want to show in the Playground here:
// eslint-disable-next-line
import _ from '../shared/src/forms/__tests__/DatePicker.test.js';

const PlaygroundSection = props => (
  <View style={styles.section}>
    <Text style={styles.sectionText}>
      <DummyTranslation id={`SAMPLE #${props.index + 1}`} />
    </Text>
    {props.children}
  </View>
);

export default function Playground() {
  return (
    <View style={styles.playground}>
      {PlaygroundRenderer.components.map((component, index) => (
        <PlaygroundSection key={index} index={index}>
          {component}
        </PlaygroundSection>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  playground: {
    marginTop: 40,
  },
  section: {
    marginVertical: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#eee',
  },
  sectionText: {
    paddingBottom: 10,
    color: '#888',
    fontSize: 10,
  },
});

// @flow

import * as React from 'react';
import { Text } from 'react-native';

import PlaygroundRenderer from '../../../../PlaygroundRenderer';
import SimpleCard from '../SimpleCard';

function onPressVoidCallback() {}

it('renders as expected', () => {
  PlaygroundRenderer.render(
    <SimpleCard>
      <Text>CHILDREN</Text>
    </SimpleCard>,
  );
});

it('renders as expected with onPress callback', () => {
  PlaygroundRenderer.render(
    <SimpleCard onPress={onPressVoidCallback}>
      <Text>CHILDREN</Text>
    </SimpleCard>,
  );
});

it('renders airy density', () => {
  PlaygroundRenderer.render(
    <SimpleCard density="airy">
      <Text>CHILDREN</Text>
    </SimpleCard>,
  );
});

it('renders without separator', () => {
  PlaygroundRenderer.render(
    <SimpleCard separator={false}>
      <Text>CHILDREN</Text>
    </SimpleCard>,
  );
});

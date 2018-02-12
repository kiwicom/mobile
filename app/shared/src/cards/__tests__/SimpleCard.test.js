// @flow

import * as React from 'react';
import { Text, View } from 'react-native';

import PlaygroundRenderer from '../../../../PlaygroundRenderer';
import SimpleCard from '../SimpleCard';

function onPressVoidCallback() {}

it('renders as expected', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard key="A">
        <Text>Default card A</Text>
      </SimpleCard>
      <SimpleCard key="B">
        <Text>Default card B</Text>
      </SimpleCard>
    </View>,
  );
});

it('renders as expected with onPress callback', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard key="A" onPress={onPressVoidCallback}>
        <Text>Clickable card</Text>
      </SimpleCard>
      <SimpleCard key="B" onPress={onPressVoidCallback}>
        <Text>Clickable card</Text>
      </SimpleCard>
    </View>,
  );
});

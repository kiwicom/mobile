// @flow

import * as React from 'react';
import { View } from 'react-native';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';
import Translation from '@kiwicom/react-native-app-translations';

import SimpleCard from '../SimpleCard';

function onPressVoidCallback() {}

it('renders as expected', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard key="A">
        <Translation passThrough="Default card A" />
      </SimpleCard>
      <SimpleCard key="B">
        <Translation passThrough="Default card B" />
      </SimpleCard>
    </View>,
  );
});

it('renders as expected with onPress callback', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard key="A" onPress={onPressVoidCallback}>
        <Translation passThrough="Clickable card" />
      </SimpleCard>
      <SimpleCard key="B" onPress={onPressVoidCallback}>
        <Translation passThrough="Clickable card" />
      </SimpleCard>
    </View>,
  );
});

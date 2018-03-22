// @flow

import * as React from 'react';
import { View } from 'react-native';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import SimpleCard from '../SimpleCard';

function onPressVoidCallback() {}

it('renders as expected', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard key="A">
        <DummyTranslation id="Default card A" />
      </SimpleCard>
      <SimpleCard key="B">
        <DummyTranslation id="Default card B" />
      </SimpleCard>
    </View>,
  );
});

it('renders as expected with onPress callback', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard key="A" onPress={onPressVoidCallback}>
        <DummyTranslation id="Clickable card" />
      </SimpleCard>
      <SimpleCard key="B" onPress={onPressVoidCallback}>
        <DummyTranslation id="Clickable card" />
      </SimpleCard>
    </View>,
  );
});

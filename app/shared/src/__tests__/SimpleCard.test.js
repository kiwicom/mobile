// @flow

import * as React from 'react';
import { View } from 'react-native';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import SimpleCard from '../SimpleCard';

const DEEP_RENDER = false;
const TITLE = 'SimpleCard';

function onPressVoidCallback() {}

it('renders as expected', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard>
        <Translation passThrough="Default card A" />
      </SimpleCard>
      <SimpleCard>
        <Translation passThrough="Default card B" />
      </SimpleCard>
    </View>,
    DEEP_RENDER,
    TITLE,
  );
});

it('renders as expected with onPress callback', () => {
  PlaygroundRenderer.render(
    <View>
      <SimpleCard onPress={onPressVoidCallback}>
        <Translation passThrough="Clickable card" />
      </SimpleCard>
      <SimpleCard onPress={onPressVoidCallback}>
        <Translation passThrough="Clickable card" />
      </SimpleCard>
    </View>,
    DEEP_RENDER,
    TITLE,
  );
});

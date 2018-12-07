// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { View } from 'react-native';

import DropMarker from '../dropMarker/DropMarker';

it('renders', () => {
  PlaygroundRenderer.render(
    <View style={{ height: 100, width: 100 }}>
      <View style={{ position: 'absolute', top: '50%', left: '50%' }}>
        <DropMarker />
      </View>
    </View>,
    false,
    'DropMarker',
  );
});

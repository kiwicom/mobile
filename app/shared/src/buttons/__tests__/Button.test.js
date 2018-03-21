// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import Button from '../Button';

const VoidAction = () => console.warn('It Works!');

it('renders button with custom title', () => {
  PlaygroundRenderer.render(
    <Button
      title={<DummyTranslation id="My Button!" />}
      onPress={VoidAction}
    />,
  );
});

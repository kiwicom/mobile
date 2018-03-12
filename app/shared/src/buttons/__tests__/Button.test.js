// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import Button from '../Button';

const VoidAction = () => console.warn('It Works!');

it('renders button with custom title', () => {
  PlaygroundRenderer.render(<Button title="My Button!" onPress={VoidAction} />);
});

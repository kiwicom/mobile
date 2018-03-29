// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import StarsFilter from '../StarsFilter';

describe('StarsFilter', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <StarsFilter stars={[]} isActive={false} onChange={jest.fn()} />,
    );
  });
});

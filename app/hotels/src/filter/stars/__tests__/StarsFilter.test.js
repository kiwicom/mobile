// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import StarsFilter from '../StarsFilter';

describe('StarsFilter', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <StarsFilter stars={[]} isActive={false} onChange={jest.fn()} />,
    );
  });
});

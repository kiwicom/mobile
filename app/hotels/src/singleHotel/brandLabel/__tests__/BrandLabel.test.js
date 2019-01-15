// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import BrandLabel from '../BrandLabel';

it('renders as expected', () => {
  PlaygroundRenderer.render(<BrandLabel />);
});

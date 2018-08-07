// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import FullPageLoading from '../FullPageLoading';

it('renders', () => {
  PlaygroundRenderer.render(<FullPageLoading />);
});

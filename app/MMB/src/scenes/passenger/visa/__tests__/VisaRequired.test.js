// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import VisaRequired from '../VisaRequired';

describe('VisaRequired', () => {
  it('renders with one country in the array', () => {
    PlaygroundRenderer.render(<VisaRequired countries={['Peru']} />);
  });

  it('renders with several countries in the array', () => {
    PlaygroundRenderer.render(
      <VisaRequired countries={['Norway', 'Spain', 'Catalunya']} />,
    );
  });

  it('renders with empty array', () => {
    PlaygroundRenderer.render(<VisaRequired countries={[]} />);
  });
});

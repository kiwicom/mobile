// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from '../TitledMenuGroup';
import MenuItem from '../MenuItem';

describe('TitledMenuGroup', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <TitledMenuGroup title={<Translation passThrough="GroupTitle!" />}>
        <MenuItem
          title={<Translation passThrough="Title!" />}
          description={<Translation passThrough="Description!" />}
        />
        <MenuItem
          title={<Translation passThrough="Title!" />}
          description={<Translation passThrough="Description!" />}
        />
      </TitledMenuGroup>,
      false,
      'PassengerTitledMenuGroup',
    );
  });
});

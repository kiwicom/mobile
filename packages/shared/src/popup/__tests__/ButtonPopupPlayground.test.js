// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import ButtonPopup from '../ButtonPopup';

const noop = () => {};

describe('ButtonPopup playground', () => {
  it('renders in playground', () => {
    PlaygroundRenderer.render(
      <ButtonPopup
        buttonTitle={<Translation passThrough="Save" />}
        buttonCloseTitle={<Translation passThrough="Close" />}
        isVisible={true}
        onSave={noop}
        onClose={noop}
      >
        <Translation passThrough="Child" />
      </ButtonPopup>,
    );
  });
});

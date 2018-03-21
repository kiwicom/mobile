// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import StarsPopup from '../StarsPopup';

describe('StarsPopup', () => {
  it('should render popup', () => {
    function noop() {}
    PlaygroundRenderer.render(
      <StarsPopup stars={[5]} isVisible={true} onSave={noop} onClose={noop} />,
    );
  });
});

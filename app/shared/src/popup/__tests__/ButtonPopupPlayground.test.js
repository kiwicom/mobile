// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import Text from '../../Text';
import ButtonPopup from '../ButtonPopup';

const noop = () => {};

describe('ButtonPopup playground', () => {
  it('renders in playground', () => {
    PlaygroundRenderer.render(
      <ButtonPopup
        buttonTitle="Save"
        isVisible={true}
        onSave={noop}
        onClose={noop}
      >
        <Text>Child</Text>
      </ButtonPopup>,
    );
  });
});

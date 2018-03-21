// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/react-native-app-playground';

import DatePicker from '../DatePicker';

describe('DatePicker', () => {
  it('renders', () => {
    // $FlowExpectedError: Ok to test without creating an icon component
    PlaygroundRenderer.render(<DatePicker />);
  });
});

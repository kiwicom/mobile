// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import StarsPopup from '../StarsPopup';

describe('StarsPopup', () => {
  it('should render popup', async () => {
    const renderer = new ShallowRenderer();
    expect(
      renderer.render(
        <StarsPopup isVisible={true} onSave={jest.fn()} onClose={jest.fn()} />,
      ),
    ).toMatchSnapshot();
  });
});

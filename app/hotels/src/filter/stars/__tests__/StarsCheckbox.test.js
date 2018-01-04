// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import StarsCheckbox from '../StarsCheckbox';

const renderer = new ShallowRenderer();

describe('StarsCheckbox', () => {
  it('render unchecked with 1 star', () => {
    const starsCheckbox = <StarsCheckbox stars={1} onPress={jest.fn()} />;
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });

  it('render unchecked with 3 stars', () => {
    const starsCheckbox = <StarsCheckbox stars={3} onPress={jest.fn()} />;
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });

  it('render checked', () => {
    const starsCheckbox = (
      <StarsCheckbox stars={5} isChecked={true} onPress={jest.fn()} />
    );
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });

  it('render text instead of stars', () => {
    const starsCheckbox = (
      <StarsCheckbox text="Some text" onPress={jest.fn()} />
    );
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });
});

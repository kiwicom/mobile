// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import StarsCheckbox from '../StarsCheckbox';

const renderer = new ShallowRenderer();

describe('StarsCheckbox', () => {
  it('render unchecked with 1 star and 1 hotel', () => {
    const starsCheckbox = (
      <StarsCheckbox stars={1} hotels={1} onPress={jest.fn()} />
    );
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });

  it('render unchecked with stars and hotels', () => {
    const starsCheckbox = (
      <StarsCheckbox stars={3} hotels={10} onPress={jest.fn()} />
    );
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });

  it('render checked', () => {
    const starsCheckbox = (
      <StarsCheckbox
        stars={5}
        hotels={123}
        isChecked={true}
        onPress={jest.fn()}
      />
    );
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });

  it('render text instead of stars', () => {
    const starsCheckbox = (
      <StarsCheckbox text="Some text" hotels={123} onPress={jest.fn()} />
    );
    expect(renderer.render(starsCheckbox)).toMatchSnapshot();
  });
});

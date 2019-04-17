// @flow strict

import React from 'react';
import renderer from 'react-test-renderer';

import NoAncillaryMessage from '../NoAncillaryMessage';

describe('NoAncillaryMessage', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<NoAncillaryMessage />);
    expect(component).toMatchSnapshot();
  });
});

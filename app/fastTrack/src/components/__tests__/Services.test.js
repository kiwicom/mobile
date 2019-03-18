// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Services from '../Services';

describe('Services', () => {
  test('Should render correctly', () => {
    const component = renderer.create(<Services />);
    expect(component).toMatchSnapshot();
  });
});

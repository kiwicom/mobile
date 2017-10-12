// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Homepage from '../homepage/Homepage';

const navigation = {
  navigate: () => {},
};

it('renders without crashing', () => {
  const rendered = renderer.create(<Homepage navigation={navigation} />).toJSON();
  expect(rendered).toBeTruthy();
});

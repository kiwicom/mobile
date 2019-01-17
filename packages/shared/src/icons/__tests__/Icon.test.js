// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';

it('renders', () => {
  expect(renderer.create(<Icon name="map" />)).toMatchSnapshot();
});

it('renders for small and large', () => {
  expect(renderer.create(<Icon name="map" size="small" />)).toMatchSnapshot();
  expect(renderer.create(<Icon name="map" size="large" />)).toMatchSnapshot();
});

it('genereates correct styles for custom fontSize', () => {
  expect(renderer.create(<Icon name="map" fontSize={12} />)).toMatchSnapshot();
});

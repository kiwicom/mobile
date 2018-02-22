// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Text from '../Text';

const renderer = new ShallowRenderer();

it('renders with the default properties for iOS', () => {
  expect(renderer.render(<Text>IOS</Text>)).toMatchSnapshot();
});

it('renders with additional style properties', () => {
  expect(
    renderer.render(<Text style={{ fontWeight: 'bold' }}>IOS</Text>),
  ).toMatchSnapshot();
});

it('supports nested styles', () => {
  expect(
    renderer.render(
      <Text style={{ fontWeight: 'bold' }}>
        I am bold <Text style={{ color: 'red' }}>and red</Text>
      </Text>,
    ),
  ).toMatchSnapshot();
});

it('supports multiple nested strings', () => {
  expect(
    renderer.render(
      <Text
        style={{
          // this style is going to be inherited so every child text
          // should have this style property as well
          color: 'red',
        }}
      >
        <Text>First part and </Text>
        <Text>second part</Text>
      </Text>,
    ),
  ).toMatchSnapshot();
});

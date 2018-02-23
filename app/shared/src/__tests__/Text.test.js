// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Text from '../Text';
// import Stars from '../../../shared/src/rating/Stars';

it('renders with the default properties for iOS', () => {
  expect(Renderer.create(<Text>IOS</Text>)).toMatchSnapshot();
});

it('renders with additional style properties', () => {
  expect(
    Renderer.create(<Text style={{ fontWeight: 'bold' }}>IOS</Text>),
  ).toMatchSnapshot();
});

it('supports nested styles', () => {
  expect(
    Renderer.create(
      <Text style={{ fontWeight: 'bold' }}>
        I am bold <Text style={{ color: 'red' }}>and red</Text>
      </Text>,
    ),
  ).toMatchSnapshot();
});

it('supports multiple nested strings', () => {
  expect(
    Renderer.create(
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

it('works with nullable child', () => {
  // this happens when for example API returns null and we are trying
  // to render it inside of string
  expect(
    Renderer.create(
      <Text>
        {'text'} {null} {'text'} {undefined} {'text'}
      </Text>,
    ),
  ).toMatchSnapshot();
});

it('works applies the styles recursively', () => {
  const Fence = ({ children }) => children;
  expect(
    Renderer.create(
      <Text style={{ fontWeight: 'bold' }}>
        <Fence>
          <Text style={{ color: 'red' }}>bold and red</Text>
        </Fence>
      </Text>,
    ),
  ).toMatchSnapshot();
});

it('works even with the distant Text nodes', () => {
  const Fence = () => <Text>should be bold as well</Text>;

  expect(
    Renderer.create(
      <Text style={{ fontWeight: 'bold' }}>
        <Fence />
      </Text>,
    ),
  ).toMatchSnapshot();
});

// @flow

import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import AgeControl from '../AgeControl';

const VoidAction = () => {};

const testProps = (testAge, expectedAge) =>
  expect(
    TestRenderer.create(
      <AgeControl label="My Label" age={testAge} onChange={VoidAction} />,
    ).root.findByProps({
      testID: 'ageControlValue',
    }).props.passThrough,
  ).toBe(expectedAge);

it('renders null age correctly', () => {
  testProps(null, 0);
});

it('renders integer age correctly', () => {
  testProps(0, 0);
  testProps(42, 42);
});

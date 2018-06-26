// @flow

import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Translation } from '@kiwicom/mobile-localization';

import AgeControl from '../AgeControl';

const VoidAction = () => {};

it('renders null age correctly', () => {
  expect(
    TestRenderer.create(
      <AgeControl
        label={<Translation passThrough="My Label" />}
        age={null}
        onChange={VoidAction}
      />,
    ).root.findByProps({
      testID: 'ageControlValue',
    }).props.id,
  ).toBe('hotels_search.guests.age_control.select');
});

it('renders integer age correctly', () => {
  expect(
    TestRenderer.create(
      <AgeControl
        label={<Translation passThrough="My Label" />}
        age={0}
        onChange={VoidAction}
      />,
    ).root.findByProps({
      testID: 'ageControlValue',
    }).props.id,
  ).toBe('hotels_search.guests.age_control.less_than_one');

  expect(
    TestRenderer.create(
      <AgeControl
        label={<Translation passThrough="My Label" />}
        age={42}
        onChange={VoidAction}
      />,
    ).root.findByProps({
      testID: 'ageControlValue',
    }).props.passThrough,
  ).toBe(42);
});

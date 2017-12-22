// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Date from './Date';

it('returns NULL without datetime parameter', () => {
  expect(renderer.create(<Date dateTime={undefined} />)).toMatchSnapshot();
});

it('formats date', () => {
  expect(
    renderer.create(<Date dateTime="2017-11-17T08:00:00" />),
  ).toMatchSnapshot();
});

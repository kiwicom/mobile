// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import FastTrackBanner from '../FastTrackBanner';

describe('FastTrackBanner', () => {
  test('Should render correctly', () => {
    const component = renderer.create(
      <FastTrackBanner bookingId={123} requester={{}} />,
    );

    expect(component).toMatchSnapshot();
  });
});

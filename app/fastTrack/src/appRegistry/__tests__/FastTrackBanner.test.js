// @flow

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import FastTrackBanner from '../FastTrackBanner';

describe('FastTrackBanner', () => {
  test('Should render correctly', () => {
    const renderer = new ShallowRenderer();

    renderer.render(<FastTrackBanner bookingId={123} kwAuthToken="x.y.z" />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

// @flow strict

import React from 'react';
import renderer from 'react-test-renderer';

import FastTrackBanner from '../FastTrackBanner';

let requesterMock;

describe('FastTrackBanner', () => {
  beforeAll(() => {
    requesterMock = async () => {
      return new Promise(resolve => resolve({}));
    };
  });

  test('Should render correctly', () => {
    const component = renderer.create(
      <FastTrackBanner bookingId={123} requester={requesterMock} />,
    );

    expect(component).toMatchSnapshot();
  });
});

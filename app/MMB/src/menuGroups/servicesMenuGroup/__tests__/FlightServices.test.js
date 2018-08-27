// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { FlightServices } from '../FlightServices';

const $fragmentRefs: any = null;
const $refType: any = null;
const props = {
  isPastBooking: false,
  __typename: 'BookingOneWay',
  $fragmentRefs,
  $refType,
};

jest.mock('../FlightServicesOneWay.js', () => {
  return function BookingOneWay() {
    return 'BookingOneWay';
  };
});

describe('ServicesMenuGroup', () => {
  it('renders with future trip', () => {
    const wrapper = renderer.create(
      <FlightServices onPress={jest.fn()} isActive={false} data={props} />,
    );

    expect(wrapper).toMatchInlineSnapshot(`"BookingOneWay"`);
  });

  it('renders with past trip', () => {
    const wrapper = renderer.create(
      <FlightServices
        onPress={jest.fn()}
        isActive={false}
        data={{
          ...props,
          isPastBooking: true,
        }}
      />,
    );

    expect(wrapper).toMatchInlineSnapshot(`null`);
  });
});

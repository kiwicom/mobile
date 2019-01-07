// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { FlightServicesMenuItem } from '../FlightServicesMenuItem';

const $refType: any = null;

describe('FlightServicesMenuItem', () => {
  it('renders null if no leg contain a flight', () => {
    const data = [
      {
        legs: [{ type: 'BUS' }],
        $refType,
      },
      {
        legs: [{ type: 'BUS' }, { type: 'BUS' }],
        $refType,
      },
    ];
    const wrapper = renderer.create(
      <FlightServicesMenuItem
        onPress={jest.fn()}
        isActive={false}
        data={data}
      />,
    );
    expect(wrapper).toMatchInlineSnapshot('null');
  });

  it('renders MenuItem if any leg contains a flight', () => {
    const data = [
      {
        legs: [{ type: 'BUS' }],
        $refType,
      },
      {
        legs: [{ type: 'BUS' }, { type: 'AIRCRAFT' }],
        $refType,
      },
    ];
    const wrapper = renderer.create(
      <FlightServicesMenuItem
        onPress={jest.fn()}
        isActive={false}
        data={data}
      />,
    );
    expect(
      wrapper.root.findByProps({ testID: 'flightServices' }),
    ).toBeDefined();
  });
});

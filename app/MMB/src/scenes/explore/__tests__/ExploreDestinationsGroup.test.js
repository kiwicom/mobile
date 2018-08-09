// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { MenuItem } from '@kiwicom/mobile-navigation';

import { ExploreDestinationsGroup } from '../ExploreDestinationsGroup';

const ref: any = null;
const data = [
  {
    departure: {
      airport: {
        id: '1',
        type: 'airport',
        code: 'LPA',
        city: { name: 'Las Palmas' },
        country: { name: 'Spain' },
      },
    },
    arrival: {
      airport: {
        id: '2',
        type: 'airport',
        code: 'DUB',
        city: { name: 'Dublin' },
        country: { name: 'Ireland' },
      },
    },
    id: 'leg_1',
    $refType: ref,
  },
  {
    departure: {
      airport: {
        id: '3',
        type: 'airport',
        code: 'DUB',
        city: { name: 'Dublin' },
        country: { name: 'Ireland' },
      },
    },
    arrival: {
      airport: {
        id: '4',
        type: 'airport',
        code: 'PRG',
        city: { name: 'Prague' },
        country: { name: 'Czechia' },
      },
    },
    id: 'leg_2',
    $refType: ref,
  },
  {
    departure: {
      airport: {
        id: '5',
        type: 'airport',
        code: 'PRG',
        city: { name: 'Prague' },
        country: { name: 'Czechia' },
      },
    },
    arrival: {
      airport: {
        id: '6',
        type: 'station',
        code: 'WRO',
        city: { name: 'Wroclaw' },
        country: { name: 'Poland' },
      },
    },
    id: 'leg_3',
    $refType: ref,
  },
];

const dataWithoutAirports = [
  {
    departure: {
      airport: {
        id: '1',
        type: 'station',
        code: 'DUB',
        city: { name: 'Prague' },
        country: { name: 'Czechia' },
      },
    },
    arrival: {
      airport: {
        id: '2',
        type: 'station',
        code: 'WRO',
        city: { name: 'Wroclaw' },
        country: { name: 'Poland' },
      },
    },
    id: 'leg_1',
    $refType: ref,
  },
];

describe('Collect all destinations', () => {
  it('should render 4 destinations', () => {
    const wrapper = renderer.create(<ExploreDestinationsGroup data={data} />);

    const destinations = wrapper.root.findAllByType(MenuItem);

    expect(destinations).toHaveLength(4);
  });

  it('should render 4 destinations in order: Spain, Ireland, Czechia, Poland', () => {
    const wrapper = renderer.create(<ExploreDestinationsGroup data={data} />);

    const destinations = wrapper.root
      .findAllByType(MenuItem)
      .map(i => i.props.description)
      .map(x => x.props.passThrough);

    expect(destinations).toEqual(['Spain', 'Ireland', 'Czechia', 'Poland']);
  });

  it('should render 2 destination when airports have type station', () => {
    const wrapper = renderer.create(
      <ExploreDestinationsGroup data={dataWithoutAirports} />,
    );

    const airports = wrapper.root
      .findAllByType(MenuItem)
      .map(i => i.props.description)
      .map(x => x.props.passThrough);

    expect(airports).toEqual(['Czechia', 'Poland']);
  });
});

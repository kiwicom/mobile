// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { MenuItem } from '@kiwicom/mobile-navigation';

import { ExploreAirportGroup } from '../ExploreAirportGroup';

const ref: any = null;
const data = [
  {
    departure: {
      airport: {
        id: '1',
        type: 'airport',
        city: { name: 'Las Palmas', code: 'LPA' },
      },
    },
    arrival: {
      airport: {
        id: '2',
        type: 'airport',
        city: { name: 'Dublin', code: 'DUB' },
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
        city: { name: 'Dublin', code: 'DUB' },
      },
    },
    arrival: {
      airport: {
        id: '4',
        type: 'airport',
        city: { name: 'Prague', code: 'PRG' },
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
        city: { name: 'Prague', code: 'DUB' },
      },
    },
    arrival: {
      airport: {
        id: '6',
        type: 'station',
        city: { name: 'Wroclaw', code: '' },
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
        city: { name: 'Prague', code: 'DUB' },
      },
    },
    arrival: {
      airport: {
        id: '2',
        type: 'station',
        city: { name: 'Wroclaw', code: 'WRO' },
      },
    },
    id: 'leg_1',
    $refType: ref,
  },
];

describe('Collect all airports', () => {
  it('should render 3 airports', () => {
    const wrapper = renderer.create(<ExploreAirportGroup data={data} />);

    const airports = wrapper.root.findAllByType(MenuItem);

    expect(airports).toHaveLength(3);
  });

  it('should render 3 airports in order: LPA, DUB, PRG', () => {
    const wrapper = renderer.create(<ExploreAirportGroup data={data} />);

    const airports = wrapper.root
      .findAllByType(MenuItem)
      .map(i => i.props.description)
      .map(x => x.props.passThrough);

    expect(airports).toEqual(['LPA', 'DUB', 'PRG']);
  });

  it('should render empty array when airports have type station', () => {
    const wrapper = renderer.create(
      <ExploreAirportGroup data={dataWithoutAirports} />,
    );

    const airports = wrapper.root
      .findAllByType(MenuItem)
      .map(i => i.props.description)
      .map(x => x.props.passThrough);

    expect(airports).toEqual([]);
  });
});

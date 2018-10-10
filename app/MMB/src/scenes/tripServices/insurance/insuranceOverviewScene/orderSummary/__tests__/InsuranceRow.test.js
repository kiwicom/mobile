// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Translation } from '@kiwicom/mobile-localization';
import { Price } from '@kiwicom/mobile-shared';

import { InsuranceRow } from '../InsuranceRow';

const insurancePrices = [
  {
    insuranceType: 'NONE',
    price: null,
  },
  {
    insuranceType: 'TRAVEL_BASIC',
    price: {
      amount: 12.32,
      currency: 'EUR',
    },
  },
  {
    insuranceType: 'TRAVEL_PLUS',
    price: {
      amount: 30.64,
      currency: 'EUR',
    },
  },
];

describe('InsuranceRow', () => {
  it('displays correct amount and quantity for travel plus', () => {
    const changes = [
      {
        databaseId: 123,
        from: 'NONE',
        to: 'TRAVEL_PLUS',
      },
      {
        databaseId: 1234,
        from: 'TRAVEL_BASIC',
        to: 'TRAVEL_PLUS',
      },
    ];

    const travelPlus = renderer.create(
      <InsuranceRow
        changes={changes}
        insurancePrices={insurancePrices}
        insuranceType="TRAVEL_PLUS"
      />,
    );
    const price = travelPlus.root.findByType(Price);
    expect(price.props.price.amount).toBe(48.96);
    expect(price.props.price.currency).toBe('EUR');

    const translations = travelPlus.root.findAllByType(Translation);
    expect(translations[0].props.values.quantity).toBe(2);
  });

  it('displays correct amount and quantity for travel basic', () => {
    const changes = [
      {
        databaseId: 123,
        from: 'TRAVEL_PLUS',
        to: 'TRAVEL_BASIC',
      },
      {
        databaseId: 1234,
        from: 'NONE',
        to: 'TRAVEL_PLUS',
      },
    ];

    const travelBasic = renderer.create(
      <InsuranceRow
        changes={changes}
        insurancePrices={insurancePrices}
        insuranceType="TRAVEL_BASIC"
      />,
    );
    const price = travelBasic.root.findByType(Price);
    expect(price.props.price.amount).toBe(-18.32);
    expect(price.props.price.currency).toBe('EUR');

    const translations = travelBasic.root.findAllByType(Translation);
    expect(translations[0].props.values.quantity).toBe(1);
  });

  it('displays correct amount and quantity for no insurance', () => {
    const changes = [
      {
        databaseId: 123,
        from: 'TRAVEL_PLUS',
        to: 'NONE',
      },
      {
        databaseId: 1234,
        from: 'NONE',
        to: 'TRAVEL_PLUS',
      },
      {
        databaseId: 12345,
        from: 'TRAVEL_PLUS',
        to: 'NONE',
      },
    ];

    const none = renderer.create(
      <InsuranceRow
        changes={changes}
        insurancePrices={insurancePrices}
        insuranceType="NONE"
      />,
    );
    const price = none.root.findByType(Price);
    expect(price.props.price.amount).toBe(-61.28);
    expect(price.props.price.currency).toBe('EUR');

    const translations = none.root.findAllByType(Translation);
    expect(translations[0].props.values.quantity).toBe(2);
  });

  it('renders null if no changes for selected type or to type is different from selected type', () => {
    const changesNone = [
      {
        databaseId: 123,
        from: 'NONE',
        to: 'NONE',
      },
      {
        databaseId: 1234,
        from: 'NONE',
        to: 'TRAVEL_BASIC',
      },
      {
        databaseId: 12345,
        from: 'NONE',
        to: 'TRAVEL_PLUS',
      },
    ];
    const changesTravelBasic = [
      {
        databaseId: 123,
        from: 'TRAVEL_BASIC',
        to: 'TRAVEL_BASIC',
      },
      {
        databaseId: 1234,
        from: 'TRAVEL_BASIC',
        to: 'NONE',
      },
      {
        databaseId: 12345,
        from: 'NONE',
        to: 'TRAVEL_PLUS',
      },
    ];
    const changesTravelPlus = [
      {
        databaseId: 123,
        from: 'TRAVEL_PLUS',
        to: 'TRAVEL_PLUS',
      },
      {
        databaseId: 1234,
        from: 'TRAVEL_BASIC',
        to: 'NONE',
      },
      {
        databaseId: 12345,
        from: 'TRAVEL_PLUS',
        to: 'TRAVEL_BASIC',
      },
    ];

    const none = renderer.create(
      <InsuranceRow
        changes={changesNone}
        insurancePrices={insurancePrices}
        insuranceType="NONE"
      />,
    );
    const travelBasic = renderer.create(
      <InsuranceRow
        changes={changesTravelBasic}
        insurancePrices={insurancePrices}
        insuranceType="TRAVEL_BASIC"
      />,
    );
    const travelPlus = renderer.create(
      <InsuranceRow
        changes={changesTravelPlus}
        insurancePrices={insurancePrices}
        insuranceType="TRAVEL_PLUS"
      />,
    );
    const instanceNone = none.getInstance();
    expect(instanceNone).toBe(null);
    const instanceTravelBasic = travelBasic.getInstance();
    expect(instanceTravelBasic).toBe(null);
    const instanceTravelPlus = travelPlus.getInstance();
    expect(instanceTravelPlus).toBe(null);
  });
});

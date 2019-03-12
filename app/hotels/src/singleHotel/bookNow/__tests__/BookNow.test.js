// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Alert } from '@kiwicom/mobile-localization';

import { BookNow } from '../BookNow';

const renderer = new ShallowRenderer();

const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
  goBack: jest.fn(),
  state: {
    params: {},
  },
  addListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
  getParam: jest.fn(),
};

it('renders without crashing', () => {
  const props = {
    onGoToPayment() {},
    selected: {
      a: 1,
    },
    availableRooms: [
      {
        originalId: 'a',
        incrementalPrice: [
          {
            amount: 100,
            currency: 'EUR',
          },
        ],
      },
    ],
    hotelId: 'abc',
    personCount: 2,
    numberOfRooms: 1,
    checkin: new Date(0),
    checkout: new Date(1),
    currency: 'EUR',
    navigation,
    getGuestCount: jest.fn(),
    maxPersons: 2,
    price: {
      amount: 2,
      currency: 'EUR',
    },
    amount: 0,
    rooms: null,
  };
  expect(renderer.render(<BookNow {...props} />)).toMatchSnapshot();
});

it('renders without crashing with missing data', () => {
  const props = {
    onGoToPayment() {},
    selected: {},
    availableRooms: undefined,
    hotelId: undefined,
    personCount: 2,
    numberOfRooms: 1,
    checkin: new Date(0),
    checkout: new Date(1),
    currency: 'EUR',
    navigation,
    getGuestCount: jest.fn(),
    maxPersons: 2,
    price: {
      amount: 2,
      currency: 'EUR',
    },
    amount: 0,
    rooms: null,
  };

  expect(renderer.render(<BookNow {...props} />)).toMatchSnapshot();
});

it('calls handleGoToPayment when numberOfGuests = maxPersons', () => {
  // $FlowExpectedError: Passing just props needed to run test
  const Component = new BookNow({
    getGuestCount: () => 5,
    maxPersons: 5,
  });

  const handleGoToPayment = jest.fn();
  Component.handleGoToPayment = handleGoToPayment;
  Component.onPress();

  expect(handleGoToPayment).toHaveBeenCalledWith();
});

it('should show an alert if numberOfGuests > maxPersons', () => {
  // $FlowExpectedError: Passing just props needed to run test
  const Component = new BookNow({
    getGuestCount: () => 6,
    maxPersons: 5,
  });

  const spy = jest.spyOn(Alert, 'translatedAlert');
  const handleGoToPayment = jest.fn();
  Component.handleGoToPayment = handleGoToPayment;
  Component.onPress();

  expect(handleGoToPayment).not.toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(
    { id: 'single_hotel.book_now.alert_title' },
    { id: 'single_hotel.book_now.alert_body', values: { numberOfGuests: 6 } },
    [
      { style: 'destructive', text: { id: 'shared.button.cancel' } },
      {
        onPress: handleGoToPayment,
        text: { id: 'single_hotel.book_now.alert_ok' },
      },
    ],
  );
});

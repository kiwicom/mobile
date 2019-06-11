// @flow

import MockDate from 'mockdate';
import { DateUtils } from '@kiwicom/mobile-localization';

import dateFactory from '../dateFactory';

MockDate.set(new Date(2018, 0, 1));

let newState;
const state = {
  checkin: new Date(2018, 1, 1),
  checkout: new Date(2018, 1, 5),
};
let output = {};

const setState = cb => {
  // $FlowExpectedError: Ok for testing
  newState = cb(state);
};

beforeEach(() => {
  output = dateFactory({ state, setState });
});

afterEach(() => {
  output = {};
});

it('sets checkin date', () => {
  const newCheckin = new Date(2018, 1, 2);
  output.setCheckin(newCheckin);

  expect(newState).toEqual({
    checkin: newCheckin,
    checkout: state.checkout,
  });
});

it('should set checkout date = checkin + 30 days when diff in days > 30', () => {
  const newCheckin = DateUtils(state.checkout).addDays(-35);
  output.setCheckin(newCheckin);

  expect(newState).toEqual({
    checkin: newCheckin,
    checkout: DateUtils(newCheckin).addDays(30),
  });
});

it('should set checkout date = checkin + 1 if diff in days <= 0', () => {
  const newCheckin = DateUtils(state.checkout).addDays(1);
  output.setCheckin(newCheckin);

  expect(newState).toEqual({
    checkin: newCheckin,
    checkout: DateUtils(newCheckin).addDays(1),
  });
});

it('sets checkout date', () => {
  const newCheckout = new Date(2018, 1, 6);
  output.setCheckout(newCheckout);

  expect(newState).toEqual({
    checkin: state.checkin,
    checkout: newCheckout,
  });
});

it('sets checkin date to checkout - 30 if diff is more than 30 days', () => {
  const newCheckout = DateUtils(state.checkin).addDays(35);
  output.setCheckout(newCheckout);

  expect(newState).toEqual({
    checkin: DateUtils(newCheckout).addDays(-30),
    checkout: newCheckout,
  });
});

it('sets checkin to checkout - 1 if diff in days is <= 0', () => {
  const newCheckout = DateUtils(state.checkin).addDays(-1);
  output.setCheckout(newCheckout);

  expect(newState).toEqual({
    checkin: DateUtils(newCheckout).addDays(-1),
    checkout: newCheckout,
  });
});

// @flow

import Logger from '../Logger';

let logs;
beforeEach(() => {
  logs = [];
  jest.spyOn(console, 'log').mockImplementation((...args) => logs.push(args));
});

it('works', () => {
  expect(
    Logger.LogEvent(Logger.Event.Purchased, Logger.Category.Ancillary, {
      type: 'Hotels',
      step: 'searchForm',
      hasActiveBooking: false,
      implementation: 'react',
    }),
  ).toBeUndefined();
  expect(logs).toMatchSnapshot();
});

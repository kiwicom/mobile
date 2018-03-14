// @flow

import formatBeddingInfo from '../formatBeddingInfo';

it('formats bedding information', () => {
  expect(
    formatBeddingInfo({
      type: 'Single Room',
      maxPersons: 1,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 1,
        },
      ],
    }),
  ).toMatchSnapshot();
});

it('pluralizes persons', () => {
  expect(
    formatBeddingInfo({
      type: 'Double Room',
      maxPersons: 2,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 2,
        },
      ],
    }),
  ).toMatchSnapshot();
});

it('provides all bedding options', () => {
  expect(
    formatBeddingInfo({
      type: 'Double or Twin Room',
      maxPersons: 2,
      bedding: [
        {
          type: 'Single Bed(s)',
          amount: 2,
        },
        {
          type: 'Twin Bed(s)',
          amount: 1,
        },
      ],
    }),
  ).toMatchSnapshot();
});

it("doesn't crash on empty input", () => {
  expect(formatBeddingInfo(null)).toEqual('');
  expect(
    formatBeddingInfo({
      type: 'Some Room',
      maxPersons: 2,
      bedding: null,
    }),
  ).toMatchSnapshot();
});

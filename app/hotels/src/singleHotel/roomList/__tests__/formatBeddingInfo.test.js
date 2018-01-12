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
  ).toEqual('Single Room · 1 Person · 1 Single Bed(s)');
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
  ).toEqual('Double Room · 2 Persons · 2 Single Bed(s)');
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
  ).toEqual(
    'Double or Twin Room · 2 Persons · 2 Single Bed(s) or 1 Twin Bed(s)',
  );
});

it("doesn't crash on empty input", () => {
  expect(formatBeddingInfo(null)).toEqual('');
  expect(
    formatBeddingInfo({
      type: 'Some Room',
      maxPersons: 2,
      bedding: null,
    }),
  ).toEqual('Some Room · 2 Persons');
});

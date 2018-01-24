// @flow

import formatDateForApi from '../formatDateForApi';

it('Formats Date object into a ISO date string', () => {
  expect(formatDateForApi(new Date('2018-01-24T12:00:00.000Z'))).toBe(
    '2018-01-24',
  );
});

it('Returns null for an empty value', () => {
  expect(formatDateForApi(null)).toBe(null);
});

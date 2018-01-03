// @flow

import convertRooms from '../convertRooms';

it('converts the key-value format to the array of rooms', () => {
  const selected = {
    aaa: 5,
    bbb: 1,
  };

  expect(convertRooms(selected)).toEqual([
    {
      id: 'aaa',
      count: 5,
    },
    {
      id: 'bbb',
      count: 1,
    },
  ]);
});

it('removes empty selections', () => {
  const selected = {
    aaa: 0,
    bbb: 1,
  };

  expect(convertRooms(selected)).toEqual([
    {
      id: 'bbb',
      count: 1,
    },
  ]);
});

it('returns an empty array for an empty object', () => {
  const selected = {};

  expect(convertRooms(selected)).toEqual([]);
});

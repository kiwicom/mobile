// @flow

import { AsyncStorage } from 'react-native';
import MockDate from 'mockdate';

import CacheManager from '../CacheManager';

MockDate.set(new Date(2017, 1, 1));

const first = {
  queryID: '123',
  variables: { a: '', b: 2 },
  fetchTime: new Date(2018, 0, 1),
  payload: { lol: 'lol' },
};

beforeEach(() => {
  jest.mock('AsyncStorage', () => ({
    multiGet: jest.fn(() => [
      [
        `@CACHE_MANAGER:${JSON.stringify({
          queryID: '123',
          variables: { a: '', b: 2 },
        })}`,
        JSON.stringify({
          fetchTime: new Date(2018, 0, 1),
          payload: { lol: 'lol' },
        }),
      ],
      [
        `@CACHE_MANAGER:${JSON.stringify({
          queryID: '1234',
          variables: { a: 'a', b: 22 },
        })}`,
        JSON.stringify({
          fetchTime: new Date(2016, 0, 1),
          payload: { lol: 'lollern' },
        }),
      ],
    ]),
    multiSet: jest.fn(),
    multiRemove: jest.fn(),
    getAllKeys: jest.fn(() =>
      Promise.resolve([
        `@CACHE_MANAGER:${JSON.stringify({
          queryID: '123',
          variables: { a: '', b: 2 },
        })}`,
        `@CACHE_MANAGER:${JSON.stringify({
          queryID: '1234',
          variables: { a: 'a', b: 22 },
        })}`,
      ]),
    ),
  }));
});

describe('CacheManager', () => {
  it('initialises', () => {
    expect(CacheManager.cache).toBeDefined();
  });

  it('restores cache', async () => {
    const spy = jest.spyOn(CacheManager.cache, 'set');

    await CacheManager.restoreCache();
    expect(spy).toHaveBeenCalledWith(
      first.queryID,
      first.variables,
      first.payload,
    );

    expect(AsyncStorage.multiRemove).toHaveBeenCalledWith([
      `@CACHE_MANAGER:${JSON.stringify({
        queryID: '1234',
        variables: { a: 'a', b: 22 },
      })}`,
    ]);
  });
});

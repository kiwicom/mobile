// @flow

/* eslint-disable no-underscore-dangle */

import { AsyncStorage } from 'react-native';
import { QueryResponseCache } from 'relay-runtime';

const CACHE_KEY = '@CACHE_MANAGER:';
const CACHE_DURATION: number = 1000 * 60 * 60 * 24 * 7; // one week
const CACHE_SIZE = 50;

type RelayCacheManager = {|
  +_responses: Map<
    string,
    {|
      +payload: Object,
      +fetchTime: Date,
    |},
  >,
  +get: (queryId: string, variables: Object) => void,
  +set: (queryId: string, variables: Object, payload: any) => void,
|};

/**
 * This is a wrapper around relay cache manager, storing to async storage
 * and reading data on startup
 */
export default new class CacheManager {
  cache: RelayCacheManager;

  constructor() {
    this.cache = new QueryResponseCache({
      size: CACHE_SIZE,
      ttl: CACHE_DURATION,
    });
    this.restoreCache();
  }

  get = (queryId: string, variables: Object) =>
    this.cache.get(queryId, variables);

  set = (queryId: string, variables: Object, payload: any) => {
    this.cache.set(queryId, variables, payload);
    this.persistCache();
  };

  // Do this async so we don't block the UI
  persistCache = async () => {
    const keyValuePairs = [];
    this.cache._responses.forEach((value, key) => {
      keyValuePairs.push([`${CACHE_KEY}${key}`, JSON.stringify(value)]);
    });
    AsyncStorage.multiSet(keyValuePairs);
  };

  restoreCache = async () => {
    let cacheSize = 0;
    const keys = await AsyncStorage.getAllKeys();
    const cachedData = await AsyncStorage.multiGet(
      keys.filter(key => key.startsWith(CACHE_KEY)),
    );
    const keysToDelete = [];
    cachedData.forEach(([key, data]) => {
      const parsedData = JSON.parse(data);

      if (parsedData == null) {
        keysToDelete.push(key);
        return;
      }

      const { queryID, variables } = JSON.parse(
        key.substring(CACHE_KEY.length),
      );

      if (this.isCurrent(parsedData.fetchTime) && cacheSize < CACHE_SIZE) {
        this.cache.set(queryID, variables, parsedData.payload);
        cacheSize++;
      } else {
        keysToDelete.push(key);
      }
    });
    AsyncStorage.multiRemove(keysToDelete);
  };

  isCurrent(fetchTime: Date) {
    return (
      new Date(fetchTime).getTime() + new Date(CACHE_DURATION).getTime() >=
      Date.now()
    );
  }
}();

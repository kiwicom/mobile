// @flow

import { AsyncStorage } from 'react-native';
import JSONStableStringify from 'json-stable-stringify';

export default class RelayQueryResponseCache {
  set = async (query: string, variables: Object, payload: Object) => {
    return await AsyncStorage.setItem(
      this._getCacheKey(query, variables),
      JSON.stringify(payload),
    );
  };

  get = async (query: string, variables: Object) => {
    return JSON.parse(
      await AsyncStorage.getItem(this._getCacheKey(query, variables)),
    );
  };

  remove = async (query: string, variables: Object) => {
    // await AsyncStorage.clear();
    return await AsyncStorage.removeItem(this._getCacheKey(query, variables));
  };

  _getCacheKey = (query: string, variables: Object): string => {
    return JSONStableStringify({ query, variables });
  };
}

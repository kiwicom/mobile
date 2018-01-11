// @flow

import { createStore, type Reducer } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export function createCombinedReducer(asyncReducers?: { [string]: Reducer }) {
  return persistCombineReducers(
    {
      key: 'root',
      storage,
    },
    {
      __empty: () => null, // there must be at least one (fake) reducer
      ...asyncReducers,
    },
  );
}

const Store = createStore(createCombinedReducer());
Store.asyncReducers = {};

export default Store;

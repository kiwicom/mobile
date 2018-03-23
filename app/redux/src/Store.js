// @flow

import { createStore, combineReducers, type Reducer } from 'redux';

export function createCombinedReducer(asyncReducers?: { [string]: Reducer }) {
  return combineReducers({
    __empty: () => null, // there must be at least one (fake) reducer
    ...asyncReducers,
  });
}

const Store = createStore(createCombinedReducer());
Store.asyncReducers = {};

export default Store;

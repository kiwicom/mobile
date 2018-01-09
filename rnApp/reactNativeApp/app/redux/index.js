// @flow

import { createStore, type Store, type Reducer } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

function createCombinedReducer(asyncReducers) {
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

export function injectAsyncReducer(
  store: Store & {| asyncReducers: Reducer[] |},
  name: string,
  asyncReducer: Reducer,
) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createCombinedReducer(store.asyncReducers));
}

const store = createStore(createCombinedReducer());
const persistor = persistStore(store);

store.asyncReducers = {};

export { persistor, store };

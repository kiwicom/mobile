// @flow

import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import SearchReducer from './reducers/SearchReducer';
import UserReducer from './reducers/UserReducer';

const config = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(config, {
  search: SearchReducer,
  user: UserReducer,
});

export const configureStore = () => {
  let store = createStore(reducer);
  let persistor = persistStore(store);

  return { persistor, store };
};

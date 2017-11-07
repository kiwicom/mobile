// @flow

import { createStore, combineReducers } from 'redux';

import SearchReducer from './reducers/SearchReducer';
import UserReducer from './reducers/UserReducer';

const reducer = combineReducers({
  search: SearchReducer,
  user: UserReducer,
});

export default createStore(reducer);

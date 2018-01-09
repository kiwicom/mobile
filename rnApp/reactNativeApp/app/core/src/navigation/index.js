// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import {
  persistor,
  store,
  injectAsyncReducer,
} from '@kiwicom/react-native-app-redux';

import BookingsStack from './BookingsStack';
import HomepageStack from './HomepageStack';
import HotelsStack from './HotelsStack';
import { Color } from '../../../common';
import SearchReducer from '../services/redux/SearchReducer';
import UserReducer from '../services/redux/UserReducer';

injectAsyncReducer(store, 'search', SearchReducer);
injectAsyncReducer(store, 'user', UserReducer);

const Navigation = StackNavigator(
  {
    ...HomepageStack,
    ...BookingsStack,
    ...HotelsStack,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.brand,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff', // back arrow
    },
    cardStyle: {
      backgroundColor: '#eee',
    },
  },
);

export default class Application extends React.Component<{||}> {
  render = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import { configureStore } from '../services/redux/Store';
import BookingsStack from './BookingsStack';
import HomepageStack from './HomepageStack';
import HotelsStack from './HotelsStack';
import { Color } from '../../../common';

const { persistor, store } = configureStore();
const Navigation = StackNavigator(
  {
    ...HomepageStack,
    ...BookingsStack,
    ...HotelsStack,
  },
  {
    initialRoute: 'Home',
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

export default class Application extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

// @flow

import * as React from 'react';
import { View, Text } from 'react-native';

import SearchForm from './search/SearchForm';

type Props = {
  navigation: {
    navigate: (screen: string, parameters: Object) => void,
  },
};

export default class Homepage extends React.PureComponent<void, Props, void> {
  static navigationOptions = {
    title: 'Welcome, User',
  };

  render = () => {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View>
          <SearchForm
            onSend={(from, to) =>
              navigate('SearchResults', {
                from,
                to,
                date: '2017-11-11',
              })}
          />
        </View>
        <View style={{ flex: 4, backgroundColor: 'powderblue' }}>
          <Text>You will see your bookings here (after login)...</Text>
        </View>
      </View>
    );
  };
}

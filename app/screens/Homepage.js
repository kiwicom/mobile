// @flow

import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import SearchForm from './search/SearchForm';

type Props = {
  navigation: {
    navigate: (screen: string, parameters: Object) => void,
  },
};

type State = {
  bookings: null | string
}

export default class Homepage extends React.PureComponent<Props, State> {
  static navigationOptions = {
    title: 'Welcome traveler!',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      bookings: null,
    };
  }

  componentDidMount = async () => {
    try {
      // await AsyncStorage.removeItem('@BookingsStore:key');
      const value = await AsyncStorage.getItem('@BookingsStore:key');
      if (value !== null) {
        this.setState({ bookings: value });
      } else {
        await AsyncStorage.setItem('@BookingsStore:key', 'STORED OFFLINE');
      }
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
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
          <Text>
            You will see your bookings here after login ({this.state.bookings})...
          </Text>
        </View>
      </View>
    );
  };
}

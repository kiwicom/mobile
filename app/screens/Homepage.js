// @flow

import * as React from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import SearchForm from './search/SearchForm';
import Styles from '../src/Styles';

type Props = {
  navigation: {
    navigate: (screen: string, parameters: Object) => void,
  },
};

type State = {
  bookings: null | string,
};

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

    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: '235429053328-f9mmpf635ts242dr2rpbo2oa5858ncm5.apps.googleusercontent.com',
        // offlineAccess: false,
      });

      const user = await GoogleSignin.currentUserAsync();
      console.warn(JSON.stringify(user));
      // this.setState({ user });
    } catch (err) {
      console.error('Google signin error', err.code, err.message);
    }
  };

  _signIn() {
    GoogleSignin.signIn()
      .then(user => {
        console.warn(JSON.stringify(user));
        // this.setState({user: user});
      })
      .catch(err => {
        console.error('WRONG SIGNIN', err);
      })
      .done();
  }

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

          <TouchableOpacity onPress={this._signIn}>
            <View style={Styles.googleButton}>
              <Text style={Styles.googleButtonText}>Google Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

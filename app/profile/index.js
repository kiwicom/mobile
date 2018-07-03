// @flow

import * as React from 'react';
import { AsyncStorage, View, AppRegistry } from 'react-native';
import {
  SimpleCard,
  LayoutSingleColumn,
  DismissKeyboardView,
  StyleSheet,
  WithNativeNavigation,
} from '@kiwicom/mobile-shared';

import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';

type State = {|
  isLoggedIn: boolean,
|};

export default class LoginScreen extends React.Component<{||}, State> {
  state = {
    isLoggedIn: false,
  };

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('mobile:MMB-Token');

    if (token != null) {
      this.setState({ isLoggedIn: true });
    }
  };

  onLogin = (token: string) => {
    AsyncStorage.setItem('mobile:MMB-Token', token);
    this.setState({ isLoggedIn: true });
  };

  onLogout = () => {
    // TODO: clean the Relay offline cache (?)
    AsyncStorage.removeItem('mobile:MMB-Token');
    this.setState({ isLoggedIn: false });
  };

  render = () => {
    return (
      <View style={styles.container}>
        <DismissKeyboardView>
          <LayoutSingleColumn>
            <SimpleCard>
              {this.state.isLoggedIn ? (
                <Logout onLogout={this.onLogout} />
              ) : (
                <Login onLogin={this.onLogin} />
              )}
            </SimpleCard>
          </LayoutSingleColumn>
        </DismissKeyboardView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Login', () =>
  WithNativeNavigation(LoginScreen, 'Login'),
);

// @flow

import * as React from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { SimpleCard } from '@kiwicom/mobile-shared';

import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';

export default class LoginScreen extends React.Component<{||}> {
  onLogin = (token: string) => {
    AsyncStorage.setItem('mobile:MMB-Token', token);
    Alert.alert('Successfully logged in');
  };

  onLogout = () => {
    // TODO: clean the Relay offline cache (?)
    AsyncStorage.removeItem('mobile:MMB-Token');
    Alert.alert('Token removed from local storage');
  };

  render = () => {
    return (
      <SimpleCard>
        <Login onLogin={this.onLogin} />
        <Logout onLogout={this.onLogout} />
      </SimpleCard>
    );
  };
}

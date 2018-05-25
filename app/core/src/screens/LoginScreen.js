// @flow

import * as React from 'react';
import { View, AsyncStorage, Alert } from 'react-native';
import { Touchable, Color, Text, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import Login from '../components/authentication/Login';

type Props = {||};

export default class LoginScreen extends React.Component<Props> {
  onLogin = (token: string) => {
    AsyncStorage.setItem('mobile:MMB-Token', token);
    Alert.alert('Successfully logged in');
  };

  logout = () => {
    AsyncStorage.removeItem('mobile:MMB-Token');
    Alert.alert('Token removed from local storage');
  };

  render = () => {
    return (
      <View style={styles.container}>
        <Login onLogin={this.onLogin} />
        <Touchable onPress={this.logout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>
            <Translation passThrough="Logout" />
          </Text>
        </Touchable>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: 'space-between',
  },
  logoutText: {
    color: Color.white,
  },
  logoutButton: {
    width: '100%',
    backgroundColor: Color.red.normal,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

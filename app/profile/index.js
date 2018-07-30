// @flow

import * as React from 'react';
import { AsyncStorage, View } from 'react-native';
import {
  SimpleCard,
  LayoutSingleColumn,
  DismissKeyboardView,
  StyleSheet,
} from '@kiwicom/mobile-shared';

import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import SaveCustomToken from './components/SaveCustomToken';
import SaveSimpleToken from './components/SaveSimpleToken';

type State = {|
  isLoggedIn: boolean,
|};

export default class LoginScreen extends React.Component<{||}, State> {
  state = {
    isLoggedIn: false,
  };

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('mobile:MMB-Token');
    const simpleTokenData = await AsyncStorage.getItem(
      'mobile:MMB-Simple-Token',
    );
    if (token != null || simpleTokenData != null) {
      this.setState({ isLoggedIn: true });
    }
  };

  onLogin = (token: string) => {
    AsyncStorage.setItem('mobile:MMB-Token', token);
    this.setState({ isLoggedIn: true });
  };

  onSimpleLogin = (simpleToken: string, bookingId: string) => {
    AsyncStorage.setItem(
      'mobile:MMB-Simple-Token',
      JSON.stringify({
        simpleToken,
        bookingId,
      }),
    );
    this.setState({ isLoggedIn: true });
  };

  onLogout = () => {
    // TODO: clean the Relay offline cache (?)
    AsyncStorage.removeItem('mobile:MMB-Token');
    AsyncStorage.removeItem('mobile:MMB-Simple-Token');
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
            {!this.state.isLoggedIn && (
              <React.Fragment>
                <SimpleCard style={styles.customToken}>
                  <SaveCustomToken onPress={this.onLogin} />
                </SimpleCard>
                <SimpleCard style={styles.customToken}>
                  <SaveSimpleToken onSave={this.onSimpleLogin} />
                </SimpleCard>
              </React.Fragment>
            )}
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
  customToken: {
    marginTop: 20,
  },
});

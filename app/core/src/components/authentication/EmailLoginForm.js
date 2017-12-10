// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from '@kiwicom/react-native-app-common';

import LoginMutation, { type Callback } from './mutation/Login';
import { createAccessToken, type AccessToken } from '../../types/AccessToken';

type Props = {|
  onSuccess: (accessToken: AccessToken) => void,
|};

type State = {|
  username: string,
  password: string,
  loading: boolean,
|};

export default class SimpleLoginForm extends React.Component<Props, State> {
  state = {
    username: 'kiwicomtester@gmail.com', // FIXME: remove
    password: '',
    loading: false,
  };

  _handleEmailChange = text =>
    this.setState({
      username: text,
    });

  _handlePasswordChange = text =>
    this.setState({
      password: text,
    });

  _handleFormSubmit = () =>
    this._tryLogIn(
      this.state.username,
      this.state.password,
      (response, errors) => {
        if (errors) {
          // TODO: onFailure event with errors
        } else {
          this.props.onSuccess(createAccessToken(response && response.token));
        }
      },
    );

  _tryLogIn = (username: string, password: string, callback: Callback) => {
    this.setState({ loading: true });
    LoginMutation({ email: username, password }, (response, errors) => {
      this.setState({ loading: false });
      callback(response, errors);
    });
  };

  render = () => (
    <View>
      <TextInput
        onChangeText={this._handleEmailChange}
        keyboardType="email-address"
        placeholder="Email"
        value={this.state.username}
      />
      <TextInput
        onChangeText={this._handlePasswordChange}
        placeholder="Password"
        secureTextEntry={true}
      />
      {this.state.loading ? (
        <Button title="Logging in..." />
      ) : (
        <Button onPress={this._handleFormSubmit} title="Login!" />
      )}
    </View>
  );
}

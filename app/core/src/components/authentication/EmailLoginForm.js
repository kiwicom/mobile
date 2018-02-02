// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from '@kiwicom/react-native-app-shared';

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

export default class EmailLoginForm extends React.Component<Props, State> {
  state = {
    username: 'kiwicomtester@gmail.com', // FIXME: remove
    password: '',
    loading: false,
  };

  handleEmailChange = (text: string) =>
    this.setState({
      username: text,
    });

  handlePasswordChange = (text: string) =>
    this.setState({
      password: text,
    });

  handleFormSubmit = () =>
    this.tryLogIn(
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

  tryLogIn = (username: string, password: string, callback: Callback) => {
    this.setState({ loading: true });
    LoginMutation({ email: username, password }, (response, errors) => {
      this.setState({ loading: false });
      callback(response, errors);
    });
  };

  render = () => (
    <View>
      <TextInput
        onChangeText={this.handleEmailChange}
        keyboardType="email-address"
        placeholder="Email"
        value={this.state.username}
      />
      <TextInput
        onChangeText={this.handlePasswordChange}
        placeholder="Password"
        secureTextEntry={true}
      />
      {this.state.loading ? (
        <Button title="Logging in..." />
      ) : (
        <Button onPress={this.handleFormSubmit} title="Login!" />
      )}
    </View>
  );
}

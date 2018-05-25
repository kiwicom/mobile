// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TextInput, TextButton } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

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
    username: 'reactnative@kiwi.com', // FIXME: remove
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
        placeholder={<Translation id="core.authentication.email" />}
        value={this.state.username}
      />
      <TextInput
        onChangeText={this.handlePasswordChange}
        placeholder={<Translation id="core.authentication.password" />}
        secureTextEntry={true}
      />
      {this.state.loading ? (
        <TextButton title={<Translation id="core.authentication.login" />} />
      ) : (
        <TextButton
          onPress={this.handleFormSubmit}
          title={<Translation id="core.authentication.logging_in" />}
        />
      )}
    </View>
  );
}

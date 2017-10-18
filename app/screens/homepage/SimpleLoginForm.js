// @flow

import * as React from 'react';
import { Button, TextInput, View } from 'react-native';

import LoginMutation, { type Callback } from './mutation/Login';

type Props = {
  onSend: Callback,
};

type State = {
  username: string,
  password: string,
  loading: boolean,
};

export default class SimpleLoginForm extends React.PureComponent<Props, State> {
  state = {
    username: 'kiwicomtester@gmail.com', // FIXME: remove
    password: '',
    loading: false,
  };

  _tryLogIn = (username: string, password: string, callback: Callback) => {
    this.setState({ loading: true });
    LoginMutation({ email: username, password }, (response, errors) => {
      callback(response, errors);
      this.setState({ loading: false });
    });
  };

  render = () => (
    <View>
      <TextInput
        onChangeText={text =>
          this.setState({
            username: text,
          })}
        keyboardType="email-address"
        placeholder="Email"
        value={this.state.username}
      />
      <TextInput
        onChangeText={text =>
          this.setState({
            password: text,
          })}
        placeholder="Password"
        secureTextEntry={true}
      />
      {this.state.loading ? (
        <Button onPress={() => {}} title="Logging in..." />
      ) : (
        <Button
          onPress={() => {
            this._tryLogIn(
              this.state.username,
              this.state.password,
              (response, errors) => {
                this.props.onSend(response, errors);
              },
            );
          }}
          title="Login!"
        />
      )}
    </View>
  );
}

// @flow

import * as React from 'react';
import { Button, TextInput, View } from 'react-native';

type Props = {
  onSend: (username: string, password: string) => void,
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
            this.setState({
              loading: true,
            });
            this.props.onSend(this.state.username, this.state.password);
          }}
          title="Login!"
        />
      )}
    </View>
  );
}

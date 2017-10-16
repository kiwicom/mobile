// @flow

import * as React from 'react';
import { Button, TextInput, View } from 'react-native';

type Props = {
  onSend: (username: string, password: string) => void,
};

type State = {
  username: string,
  password: string,
};

export default class SimpleLoginForm extends React.PureComponent<Props, State> {
  state = {
    username: 'kiwicomtester@gmail.com', // FIXME: remove
    password: '',
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
      <Button
        onPress={() =>
          this.props.onSend(this.state.username, this.state.password)}
        title="Login!"
      />
    </View>
  );
}

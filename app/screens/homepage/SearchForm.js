// @flow

import * as React from 'react';
import { Button, TextInput, View, Text } from 'react-native';

type Props = {
  onSend: (from: string, to: string) => void,
};

type State = {
  from: string,
  to: string,
};

export default class SearchForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      from: 'Prague',
      to: 'NYC',
    };
  }

  render = () => (
    <View>
      <Text>From:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={text => this.setState({ from: text })}
        value={this.state.from}
      />
      <Text>To:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => this.setState({ to: text })}
        value={this.state.to}
      />
      <Button
        onPress={() => this.props.onSend(this.state.from, this.state.to)}
        title="Find connections!"
      />
    </View>
  );
}

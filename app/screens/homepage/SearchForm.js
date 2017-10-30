// @flow

import * as React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { button } from '../../styles/colors';
import { textInput } from '../../styles/forms';

type Props = {
  onSend: (from: string, to: string, date: Date) => void,
};

type State = {
  destination: {
    from: string,
    to: string,
  },
  date: {
    from: Date,
  },
};

export default class SearchForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.state = {
      destination: {
        from: 'Prague',
        to: 'NYC',
      },
      date: {
        from: tomorrow,
      },
    };
  }

  render = () => (
    <View>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>From:</Text>
          <TextInput
            style={[textInput, { borderRightWidth: 0 }]}
            onChangeText={text =>
              this.setState({
                destination: { ...this.state.destination, from: text },
              })}
            value={this.state.destination.from}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>To:</Text>
          <TextInput
            style={textInput}
            onChangeText={text =>
              this.setState({
                destination: { ...this.state.destination, to: text },
              })}
            value={this.state.destination.to}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>When:</Text>
          <DatePicker
            style={{ width: 200 }}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={date => {
              this.setState({ date: { from: date } });
            }}
            date={this.state.date.from}
          />
        </View>
      </View>
      <Button
        onPress={() =>
          this.props.onSend(
            this.state.destination.from,
            this.state.destination.to,
            this.state.date.from,
          )}
        title="Find connections!"
        color={button}
      />
    </View>
  );
}

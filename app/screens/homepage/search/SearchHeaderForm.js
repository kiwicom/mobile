// @flow

import * as React from 'react';
import { View } from 'react-native';

import TextInput from '../../../components/forms/TextInput';
import DatePicker from '../../../components/forms/DatePicker';
import Button from '../../../components/visual/buttons/Button';

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

export default class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.state = {
      destination: {
        from: 'Prague', // TODO: this should be prefilled based on current location
        to: '',
      },
      date: {
        from: tomorrow,
      },
    };
  }

  render = () => (
    <View>
      <TextInput
        onChangeText={text =>
          this.setState({
            destination: { ...this.state.destination, from: text },
          })}
        value={this.state.destination.from}
        placeholder="Where do you travel from?"
      />

      <TextInput
        onChangeText={text =>
          this.setState({
            destination: { ...this.state.destination, to: text },
          })}
        style={{
          flex: 1,
          color: 'black',
          backgroundColor: 'transparent',
          fontSize: 15,
        }}
        value={this.state.destination.to}
        placeholder="Where do you travel?"
      />

      <DatePicker
        onDateChange={date => {
          this.setState({ date: { from: date } });
        }}
        date={this.state.date.from}
      />

      {this.props.expanded && (
        <Button
          onPress={() =>
            this.props.onSend(
              this.state.destination.from,
              this.state.destination.to,
              this.state.date.from,
            )}
          title="Find connections!"
        />
      )}
    </View>
  );
}

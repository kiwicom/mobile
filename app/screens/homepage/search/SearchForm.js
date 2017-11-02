// @flow

import * as React from 'react';
import { Button } from 'react-native';

import { button } from '../../../styles/colors';
import TextInput from '../../../components/forms/TextInput';
import DatePicker from '../../../components/forms/DatePicker';

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
        from: 'Prague', // TODO: this should be prefilled based on current location
        to: 'NYC', // FIXME
      },
      date: {
        from: tomorrow,
      },
    };
  }

  render = () => [
    <TextInput
      key={1}
      onChangeText={text =>
        this.setState({
          destination: { ...this.state.destination, from: text },
        })}
      value={this.state.destination.from}
      placeholder="Where from?"
    />,

    <TextInput
      key={2}
      onChangeText={text =>
        this.setState({
          destination: { ...this.state.destination, to: text },
        })}
      value={this.state.destination.to}
      placeholder="Where to?"
    />,

    <DatePicker
      key={3}
      onDateChange={date => {
        this.setState({ date: { from: date } });
      }}
      date={this.state.date.from}
    />,

    <Button
      key={4}
      onPress={() =>
        this.props.onSend(
          this.state.destination.from,
          this.state.destination.to,
          this.state.date.from,
        )}
      title="Find connections!"
      color={button}
    />,
  ];
}

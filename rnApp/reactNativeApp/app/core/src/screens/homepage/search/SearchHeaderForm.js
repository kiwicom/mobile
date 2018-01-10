// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  TextInput,
  DatePicker,
  Button,
  type OnFocus as InputOnFocusEvent,
} from '@kiwicom/react-native-app-common';

type Props = {|
  onSend: (from: string, to: string, date: Date) => void,
  /**
   * Field indicates what 'TextInput' are we manipulating.
   */
  onLocationChange: (newLocation: string, field: 'from' | 'to') => void,
  fields: {|
    from: string,
    to: string,
  |},
|};

type State = {|
  date: {|
    from: Date,
  |},
|};

const SearchForm = class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.state = {
      date: {
        from: tomorrow,
      },
    };
  }

  changeLocation = (location: 'from' | 'to', newLocation) =>
    this.setState(() => {
      this.props.onLocationChange(newLocation, location);
    });

  handleOriginFocusChange = ({ nativeEvent }: InputOnFocusEvent) =>
    this.handleOriginTextChange(nativeEvent.text);

  handleOriginTextChange = (newOrigin: string) =>
    this.changeLocation('from', newOrigin);

  handleDestinationFocusChange = ({ nativeEvent }: InputOnFocusEvent) =>
    this.handleDestinationTextChange(nativeEvent.text);

  handleDestinationTextChange = (newDestination: string) =>
    this.changeLocation('to', newDestination);

  handleDatepickerChange = date =>
    this.setState({
      date: { from: date },
    });

  handleSubmitButton = () =>
    this.props.onSend(
      this.props.fields.from,
      this.props.fields.to,
      this.state.date.from,
    );

  render = () => (
    <View>
      <View>
        <Text style={{ fontSize: 30 }}>&times;</Text>
      </View>

      <TextInput
        onFocus={this.handleOriginFocusChange}
        onChangeText={this.handleOriginTextChange}
        value={this.props.fields.from}
        placeholder="Where do you travel from?"
      />

      <TextInput
        onFocus={this.handleDestinationFocusChange}
        onChangeText={this.handleDestinationTextChange}
        style={{
          flex: 1,
          color: 'black',
          backgroundColor: 'transparent',
          fontSize: 15,
        }}
        value={this.props.fields.to}
        placeholder="Where do you travel?"
      />

      <DatePicker
        onDateChange={this.handleDatepickerChange}
        date={this.state.date.from}
      />

      {this.props.expanded && (
        <Button onPress={this.handleSubmitButton} title="Find connections!" />
      )}
    </View>
  );
};

export default connect(
  state => ({
    fields: {
      from: state.search.fields.from || 'Brno',
      to: state.search.fields.to || '',
    },
  }),
  dispatch => ({
    onLocationChange: (newLocation, field) => {
      dispatch({
        type: 'updateFieldValue',
        identifier: field,
        value: newLocation,
      });
    },
  }),
)(SearchForm);

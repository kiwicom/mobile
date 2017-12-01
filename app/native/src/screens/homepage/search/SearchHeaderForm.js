// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, DatePicker, Button } from '@kiwicom/native-common';

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

type InputOnFocusEvent = { nativeEvent: { text: string } };

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

  _changeLocation = (location: 'from' | 'to', newLocation) =>
    this.setState(() => {
      this.props.onLocationChange(newLocation, location);
    });

  _handleOriginFocusChange = ({ nativeEvent }: InputOnFocusEvent) =>
    this._handleOriginTextChange(nativeEvent.text);

  _handleOriginTextChange = (newOrigin: string) =>
    this._changeLocation('from', newOrigin);

  _handleDestinationFocusChange = ({ nativeEvent }: InputOnFocusEvent) =>
    this._handleDestinationTextChange(nativeEvent.text);

  _handleDestinationTextChange = (newDestination: string) =>
    this._changeLocation('to', newDestination);

  _handleDatepickerChange = date =>
    this.setState({
      date: { from: date },
    });

  _handleSubmitButton = () =>
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
        onFocus={this._handleOriginFocusChange}
        onChangeText={this._handleOriginTextChange}
        value={this.props.fields.from}
        placeholder="Where do you travel from?"
      />

      <TextInput
        onFocus={this._handleDestinationFocusChange}
        onChangeText={this._handleDestinationTextChange}
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
        onDateChange={this._handleDatepickerChange}
        date={this.state.date.from}
      />

      {this.props.expanded && (
        <Button onPress={this._handleSubmitButton} title="Find connections!" />
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

// @flow

import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import TextInput from '../../../components/forms/TextInput';
import DatePicker from '../../../components/forms/DatePicker';
import Button from '../../../components/visual/buttons/Button';

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

  _changeLocation = (location: 'from' | 'to', newLocation) => {
    this.setState(() => {
      this.props.onLocationChange(newLocation, location);
    });
  };

  _changeOriginLocation = (newOrigin: string) => {
    this._changeLocation('from', newOrigin);
  };

  _changeDestinationLocation = (newDestination: string) => {
    this._changeLocation('to', newDestination);
  };

  render = () => (
    <View>
      <TextInput
        onFocus={event => this._changeOriginLocation(event.nativeEvent.text)}
        onChangeText={text => this._changeOriginLocation(text)}
        value={this.props.fields.from}
        placeholder="Where do you travel from?"
      />

      <TextInput
        onFocus={event =>
          this._changeDestinationLocation(event.nativeEvent.text)
        }
        onChangeText={text => this._changeDestinationLocation(text)}
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
        onDateChange={date => {
          this.setState({ date: { from: date } });
        }}
        date={this.state.date.from}
      />

      {this.props.expanded && (
        <Button
          onPress={() =>
            this.props.onSend(
              this.props.fields.from,
              this.props.fields.to,
              this.state.date.from,
            )
          }
          title="Find connections!"
        />
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

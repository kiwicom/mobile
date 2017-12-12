// @flow

import * as React from 'react';
import {
  TextInput,
  DatePicker,
  Color,
  Button,
} from '@kiwicom/react-native-app-common';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';

import type { Search } from './types';

const DATE_FORMAT = 'DD/MM/YYYY';

const styles = StyleSheet.create({
  form: {
    padding: 10,
    backgroundColor: Color.brand,
  },
  destination: {
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    height: 40,
  },
  datePicker: {
    flex: 1,
    marginRight: 10,
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    width: 115,
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 0,
  },
  buttonText: {
    color: Color.grey._900,
  },
});

type Props = {|
  onChange: (search: Search) => void,
|};

type State = {|
  destination: string | null,
  latitude: number | null,
  longitude: number | null,
  checkin: string | null,
  checkout: string | null,
  roomsConfiguration: {|
    adultsCount: number,
  |},
|};

export default class SearchForm extends React.Component<Props, State> {
  state = {
    destination: 'Prague',
    latitude: 50.0755,
    longitude: 14.4378,
    checkin: moment()
      .add(1, 'week')
      .startOf('isoWeek')
      .format(DATE_FORMAT),
    checkout: moment()
      .add(1, 'week')
      .endOf('isoWeek')
      .format(DATE_FORMAT),
    roomsConfiguration: {
      adultsCount: 1,
    },
  };

  /**
   * Submit form with the initial search parameters.
   */
  componentDidMount = () => this._handleOnChange();

  _handleOnChange = () =>
    this.props.onChange({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      checkin: moment(this.state.checkin, DATE_FORMAT).toDate(),
      checkout: moment(this.state.checkout, DATE_FORMAT).toDate(),
      roomsConfiguration: this.state.roomsConfiguration,
    });

  _handleDestinationChange = destination => {
    this.setState({ destination }, () => this._handleOnChange());
  };

  _handleCheckinChange = date => this._handleDateChange(date, 'checkin');

  _handleCheckoutChange = date => this._handleDateChange(date, 'checkout');

  _handleDateChange = (date, type: 'checkin' | 'checkout') => {
    this.setState({ [type]: date }, () => this._handleOnChange());
  };

  _handleGuestsPress = () => {
    // TODO Open popup with guests configuration
    this._handleOnChange();
  };

  render = () => {
    const guests = '1 Guest'; // FIXME: this cannot be static
    return (
      <View style={styles.form}>
        <View style={styles.destination}>
          <TextInput
            value={this.state.destination}
            onChangeText={this._handleDestinationChange}
            placeholder="Where do you go?"
          />
        </View>
        <View style={styles.row}>
          <DatePicker
            placeholder="Start date"
            format={DATE_FORMAT}
            date={this.state.checkin}
            onDateChange={this._handleCheckinChange}
            style={styles.datePicker}
          />
          <DatePicker
            placeholder="End date"
            format={DATE_FORMAT}
            date={this.state.checkout}
            onDateChange={this._handleCheckoutChange}
            style={styles.datePicker}
          />
          <Button
            onPress={this._handleGuestsPress}
            title={guests}
            styles={buttonStyles}
          />
        </View>
      </View>
    );
  };
}

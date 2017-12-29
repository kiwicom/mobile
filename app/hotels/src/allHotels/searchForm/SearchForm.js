// @flow

import * as React from 'react';
import { TextInput, DatePicker, Color } from '@kiwicom/react-native-app-common';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';

import Guests from './Guests';
import type {
  RoomConfigurationType,
  SearchParametersType,
} from './SearchParametersType';

const DATE_FORMAT = 'DD/MM/YYYY';

const styles = StyleSheet.create({
  form: {
    padding: 10,
    backgroundColor: Color.brandSecondary,
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

type Props = {|
  onChange: (search: SearchParametersType) => void,
|};

type State = {|
  destination: string | null,
  latitude: number | null,
  longitude: number | null,
  checkin: string | null,
  checkout: string | null,
  roomsConfiguration: RoomConfigurationType,
|};

export default class SearchForm extends React.Component<Props, State> {
  // TODO do not format to string and then recreate moment object again for GraphQl in AllHotels
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
      children: [],
    },
  };

  /**
   * Submit form with the initial search parameters.
   */
  componentDidMount = () => this.handleOnChange();

  handleOnChange = () =>
    this.props.onChange({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      checkin: moment(this.state.checkin, DATE_FORMAT).toDate(),
      checkout: moment(this.state.checkout, DATE_FORMAT).toDate(),
      roomsConfiguration: this.state.roomsConfiguration,
    });

  handleDestinationChange = (destination: string) =>
    this.setState({ destination }, () => this.handleOnChange());

  handleCheckinChange = (date: string) =>
    this.handleDateChange(date, 'checkin');

  handleCheckoutChange = (date: string) =>
    this.handleDateChange(date, 'checkout');

  handleDateChange = (date: string, type: 'checkin' | 'checkout') =>
    this.setState({ [type]: date }, () => this.handleOnChange());

  handleGuestsSave = (roomsConfiguration: RoomConfigurationType) => {
    this.setState({ roomsConfiguration }, () => this.handleOnChange());
  };

  render = () => {
    return (
      <View style={styles.form}>
        <View style={styles.destination}>
          <TextInput
            value={this.state.destination}
            onChangeText={this.handleDestinationChange}
            placeholder="Where do you go?"
            iconName="location-city"
          />
        </View>
        <View style={styles.row}>
          <DatePicker
            placeholder="Start date"
            format={DATE_FORMAT}
            date={this.state.checkin}
            onDateChange={this.handleCheckinChange}
            style={styles.datePicker}
          />
          <DatePicker
            placeholder="End date"
            format={DATE_FORMAT}
            date={this.state.checkout}
            onDateChange={this.handleCheckoutChange}
            style={styles.datePicker}
          />
          <Guests
            guests={this.state.roomsConfiguration}
            onSave={this.handleGuestsSave}
          />
        </View>
      </View>
    );
  };
}

// @flow

import * as React from 'react';
import { TextInput, DatePicker, Color } from '@kiwicom/react-native-app-common';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';

import Guests from './guests/Guests';
import type {
  RoomConfigurationType,
  SearchParams,
  OnChangeSearchParams,
} from './SearchParametersType';

const DISPLAY_DATE_FORMAT = 'DD/MM/YYYY';
const DATA_DATE_FORMAT = 'YYYY-MM-DD';

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

type Props = {
  location: string,
  search: SearchParams,
  onChange: (search: OnChangeSearchParams) => void,
  onLocationChange: (location: string) => void,
};

class SearchForm extends React.Component<Props> {
  handleDestinationChange = (location: string) => {
    this.props.onLocationChange(location);
  };

  handleCheckinChange = (date: string) =>
    this.handleDateChange(date, 'checkin');

  handleCheckoutChange = (date: string) =>
    this.handleDateChange(date, 'checkout');

  handleDateChange = (datestring: string, type: 'checkin' | 'checkout') => {
    const date = moment(datestring, DISPLAY_DATE_FORMAT).format(
      DATA_DATE_FORMAT,
    );

    this.props.onChange({ [type]: date });
  };

  handleGuestsChange = (roomsConfiguration: RoomConfigurationType) => {
    this.props.onChange({ roomsConfiguration });
  };

  render = () => {
    const { search, location } = this.props;

    return (
      <View style={styles.form}>
        <View style={styles.destination}>
          <TextInput
            value={location}
            onChangeText={this.handleDestinationChange}
            placeholder="Where do you go?"
            iconName="location-city"
          />
        </View>
        <View style={styles.row}>
          <DatePicker
            placeholder="Start date"
            format={DISPLAY_DATE_FORMAT}
            date={moment(search.checkin, DATA_DATE_FORMAT).toDate()}
            minDate={new Date()}
            onDateChange={this.handleCheckinChange}
            style={styles.datePicker}
          />
          <DatePicker
            placeholder="End date"
            format={DISPLAY_DATE_FORMAT}
            date={moment(search.checkout, DATA_DATE_FORMAT).toDate()}
            minDate={moment()
              .add(1, 'day')
              .toDate()}
            onDateChange={this.handleCheckoutChange}
            style={styles.datePicker}
          />
          <Guests
            guests={search.roomsConfiguration}
            onChange={this.handleGuestsChange}
          />
        </View>
      </View>
    );
  };
}

export default SearchForm;

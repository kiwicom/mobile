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
const MIN_NO_OF_NIGHTS = 1;
const MAX_NO_OF_NIGHTS = 30;

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

type DateInputType = 'checkin' | 'checkout';

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

  handleDateChange = (datestring: string, type: DateInputType) => {
    const date = moment(datestring, DISPLAY_DATE_FORMAT);
    const checkin =
      type === 'checkin' ? date : moment(this.props.search.checkin);
    const checkout =
      type === 'checkout' ? date : moment(this.props.search.checkout);
    const dates = this.getValidDates(checkin, checkout, type);

    if (dates) {
      this.props.onChange(dates);
    }
  };

  handleGuestsChange = (roomsConfiguration: RoomConfigurationType) => {
    this.props.onChange({ roomsConfiguration });
  };

  getValidDates = (
    checkin: moment,
    checkout: moment,
    typeBeingChanged: DateInputType,
  ) => {
    if (checkin === null || checkout === null) {
      return null;
    }
    const diff = moment(checkout).diff(checkin, 'days');
    if (diff < MIN_NO_OF_NIGHTS || diff > MAX_NO_OF_NIGHTS) {
      if (typeBeingChanged === 'checkout') {
        return {
          checkin: moment(checkout)
            .subtract(1, 'day')
            .toDate(),
          checkout: checkout.toDate(),
        };
      } else if (typeBeingChanged === 'checkin') {
        return {
          checkin: checkin.toDate(),
          checkout: moment(checkin)
            .add(1, 'day')
            .toDate(),
        };
      }
    }

    return {
      checkin: checkin.toDate(),
      checkout: checkout.toDate(),
    };
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
            date={search.checkin}
            minDate={new Date()}
            onDateChange={this.handleCheckinChange}
            style={styles.datePicker}
          />
          <DatePicker
            placeholder="End date"
            format={DISPLAY_DATE_FORMAT}
            date={search.checkout}
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

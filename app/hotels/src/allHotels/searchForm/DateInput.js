// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { DatePicker } from '@kiwicom/react-native-app-common';

import type { OnChangeSearchParams } from './SearchParametersType';

type Props = {
  checkin: Date | null,
  checkout: Date | null,
  onChange: (search: OnChangeSearchParams) => void,
};

type DateInputType = 'checkin' | 'checkout';

const DISPLAY_DATE_FORMAT = 'DD/MM/YYYY';
const MIN_NO_OF_NIGHTS = 1;
const MAX_NO_OF_NIGHTS = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },
  datePicker: {
    flex: 1,
    marginRight: 10,
  },
});

export default class DateInput extends React.Component<Props> {
  handleCheckinChange = (date: string) =>
    this.handleDateChange(date, 'checkin');

  handleCheckoutChange = (date: string) =>
    this.handleDateChange(date, 'checkout');

  handleDateChange = (datestring: string, type: DateInputType) => {
    const date = moment(datestring, DISPLAY_DATE_FORMAT);
    const checkin = type === 'checkin' ? date : moment(this.props.checkin);
    const checkout = type === 'checkout' ? date : moment(this.props.checkout);
    const dates = this.getValidDates(checkin, checkout, type);

    if (dates) {
      this.props.onChange(dates);
    }
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

  render() {
    const props = this.props;

    return (
      <View style={styles.container}>
        <DatePicker
          placeholder="Start date"
          format={DISPLAY_DATE_FORMAT}
          date={props.checkin}
          minDate={new Date()}
          onDateChange={this.handleCheckinChange}
          style={styles.datePicker}
        />
        <DatePicker
          placeholder="End date"
          format={DISPLAY_DATE_FORMAT}
          date={props.checkout}
          minDate={moment()
            .add(1, 'day')
            .toDate()}
          onDateChange={this.handleCheckoutChange}
          style={styles.datePicker}
        />
      </View>
    );
  }
}

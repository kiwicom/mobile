// @flow

import * as React from 'react';
import { DatePickerAndroid } from 'react-native';

import DatePickerButton from './DatePickerButton';
import type { Props } from './DatePickerProps';

export default class DatePicker extends React.Component<Props> {
  openDatePicker = () => {
    // The DatePickerButton onPress expects a method () => void,
    // We have to wrap the call to show datePicker with a method with ^^ signature
    this.showDatePicker();
  };

  showDatePicker = async () => {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: this.props.date,
      minDate: this.props.minDate,
      maxDate: this.props.maxDate,
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      this.props.onDateChange(new Date(year, month, day));
    }
  };

  render = () => (
    <DatePickerButton
      onPress={this.openDatePicker}
      date={this.props.date}
      format={this.props.format}
      iconComponent={this.props.iconComponent}
    />
  );
}

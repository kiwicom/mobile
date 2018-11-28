// @flow

import * as React from 'react';
import { DatePickerAndroid } from 'react-native';
import { DateUtils } from '@kiwicom/mobile-localization';

import DatePickerButton from './DatePickerButton';
import type { Props } from './DatePickerProps';

export default class DatePicker extends React.Component<Props> {
  static defaultProps = {
    disabled: false,
  };

  openDatePicker = () => {
    // The DatePickerButton onPress expects a method () => void,
    // We have to wrap the call to show datePicker with a method with ^^ signature
    this.showDatePicker();
  };

  showDatePicker = async () => {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: this.props.date || DateUtils.getUTCToday(),
      minDate: this.props.minDate,
      maxDate: this.props.maxDate,
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      this.props.onDateChange(new Date(Date.UTC(year, month, day)));
    }
  };

  render() {
    return (
      <DatePickerButton
        onPress={this.openDatePicker}
        date={this.props.date}
        iconComponent={this.props.iconComponent}
        formatFunction={this.props.formatFunction}
        disabled={this.props.disabled}
      />
    );
  }
}

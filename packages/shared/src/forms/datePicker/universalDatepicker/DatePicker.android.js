// @flow

import * as React from 'react';
import { DatePickerAndroid } from 'react-native'; // TODO: This is deprecated and will be removed in a future release https://facebook.github.io/react-native/docs/0.60/timepickerandroid#__docusaurus

import type { Props } from './DatePickerTypes';

export default class AndroidDatePicker extends React.Component<Props> {
  static defaultProps = {
    mode: 'date',
    datePickerMode: 'default',
  };

  componentDidMount = () => {
    if (this.props.isVisible) {
      this.showDatePicker();
    }
  };

  componentDidUpdate = (prevProps: Props) => {
    const { isVisible } = this.props;
    if (!prevProps.isVisible && isVisible) {
      this.showDatePicker();
    }
  };

  showDatePicker = async () => {
    const {
      minDate,
      maxDate,
      datePickerMode,
      date = new Date(),
      onConfirm,
      onDismiss,
    } = this.props;
    let picker;
    try {
      picker = await DatePickerAndroid.open({
        date,
        minDate,
        maxDate,
        mode: datePickerMode,
      });
    } catch (e) {
      onDismiss();
      return;
    }

    if (
      picker.action == null ||
      picker.year == null ||
      picker.month == null ||
      picker.day == null
    ) {
      onDismiss();
      return;
    }
    const { action, year, month, day } = picker;
    if (action !== 'dismissedAction') {
      let customDate;
      if (date && !isNaN(date.getTime())) {
        const hour = date.getHours();
        const minute = date.getMinutes();
        customDate = new Date(year, month, day, hour, minute);
      } else {
        customDate = new Date(year, month, day);
      }

      onConfirm(customDate);
    } else {
      onDismiss();
    }
  };

  render() {
    return null;
  }
}

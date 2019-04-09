// @flow

import * as React from 'react';
import { DatePicker as UniversalDatePicker } from '@kiwicom/universal-components';

import DatePickerButton from './DatePickerButton';

type DateFormatterFunctions =
  | 'formatToDate'
  | 'formatToTime'
  | 'formatToShortDate'
  | 'formatToBirthday'
  | 'formatForMachine';

type Props = {|
  +date: ?Date,
  +onDateChange: (date: Date) => void,
  +placeholder?: string,
  +minDate?: Date,
  +maxDate?: Date,
  +iconComponent?: React.Node,
  +formatFunction?: DateFormatterFunctions,
  +disabled: boolean,
  +customButton?: React.Node | null,
  +labels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
|};

export default function DatePicker(props: Props) {
  const [isVisible, setIsVisible] = React.useState(false);

  function hidePicker() {
    setIsVisible(false);
  }
  function showPicker() {
    setIsVisible(true);
  }
  function onConfirm(newDate: Date) {
    props.onDateChange(newDate);
    hidePicker();
  }
  return (
    <>
      <DatePickerButton
        customButton={props.customButton}
        onPress={showPicker}
        date={props.date}
        iconComponent={props.iconComponent}
        formatFunction={props.formatFunction}
        disabled={props.disabled}
      />
      <UniversalDatePicker
        isVisible={isVisible}
        labels={props.labels}
        onDismiss={hidePicker}
        date={props.date ?? new Date()}
        onConfirm={onConfirm}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
    </>
  );
}

DatePicker.defaultProps = {
  disabled: false,
};

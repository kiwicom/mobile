// @flow

import * as React from 'react';
import { DatePickerIOS } from 'react-native';
import {
  Translation,
  DeviceInfo,
  DateUtils,
} from '@kiwicom/mobile-localization';

import DatePickerButton from './DatePickerButton';
import BarPopup from '../../popup/BarPopup';
import type { Props } from './DatePickerProps';

type State = {|
  isPickerOpen: boolean,
  date: Date,
|};

export default class DatePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isPickerOpen: false,
      date: props.date || DateUtils.getUTCToday(),
    };
  }

  static getDerivedStateFromProps = ({ date }: Props) => ({ date });

  static defaultProps = {
    disabled: false,
  };

  togglePopup = () => {
    this.setState(state => ({
      isPickerOpen: !state.isPickerOpen,
    }));
  };

  onSave = () => {
    // if this.state.date is null, fallback sent to DatepickerIOS is today's date
    // if user clicks save and this.state.date is null, then he has selected today's date
    this.props.onDateChange(this.state.date || DateUtils.getUTCToday());
  };

  onDateChange = (date: Date | string) => {
    const selectedDate = new Date(date);
    this.setState({
      date: new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
        ),
      ),
    });
  };

  render = () => {
    const {
      date,
      minDate,
      maxDate,
      iconComponent,
      formatFunction,
      disabled,
      ...rest
    } = this.props;

    return (
      <React.Fragment>
        <DatePickerButton
          onPress={this.togglePopup}
          date={date}
          iconComponent={iconComponent}
          formatFunction={formatFunction}
          disabled={disabled}
        />
        <BarPopup
          isVisible={this.state.isPickerOpen}
          buttonTitle={
            <Translation id="hotels_search.date_picker.select_date" />
          }
          onSave={this.onSave}
          onClose={this.togglePopup}
        >
          <DatePickerIOS
            {...rest}
            minimumDate={minDate}
            maximumDate={maxDate}
            date={this.state.date || DateUtils.getUTCToday()}
            onDateChange={this.onDateChange}
            locale={DeviceInfo.getLocaleDashed()}
            mode="date"
          />
        </BarPopup>
      </React.Fragment>
    );
  };
}

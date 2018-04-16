// @flow

import * as React from 'react';
import { DatePickerIOS } from 'react-native';
import { Translation, GetDeviceLocale } from '@kiwicom/mobile-localization';

import DatePickerButton from './DatePickerButton';
import BarPopup from '../../popup/BarPopup';
import type { Props } from './DatePickerProps';

type State = {|
  isPickerOpen: boolean,
  date: Date,
|};

export default class DatePicker extends React.Component<Props, State> {
  state = {
    isPickerOpen: false,
    date: new Date(),
  };

  componentDidMount = () => {
    this.setState({ date: this.props.date });
  };

  togglePopup = () => {
    this.setState(state => ({
      isPickerOpen: !state.isPickerOpen,
    }));
  };

  onSave = () => {
    this.props.onDateChange(this.state.date);
  };

  onDateChange = (date: Date | string) => {
    this.setState({ date: new Date(date) });
  };

  render = () => {
    const {
      date,
      format,
      minDate,
      maxDate,
      iconComponent,
      ...rest
    } = this.props;
    return (
      <React.Fragment>
        <DatePickerButton
          onPress={this.togglePopup}
          date={date}
          format={format}
          iconComponent={iconComponent}
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
            date={this.state.date}
            onDateChange={this.onDateChange}
            locale={GetDeviceLocale()}
            mode="date"
          />
        </BarPopup>
      </React.Fragment>
    );
  };
}

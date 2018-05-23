// @flow

import * as React from 'react';
import { View } from 'react-native';
import { DateUtils } from '@kiwicom/mobile-localization';
import { DatePicker, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';

import type { OnChangeSearchParams } from './SearchParametersType';

type Props = {|
  checkin: Date,
  checkout: Date,
  onChange: (search: OnChangeSearchParams) => void,
|};

const isCheckoutBeforeCheckin = diff => diff <= 0;

const isCheckoutMoreThan30DaysFromCheckin = (diffInDays: number) => {
  return diffInDays > 30;
};

export default class DateInput extends React.Component<Props> {
  handleCheckinChange = (date: Date) => {
    const checkin = date;
    let checkout = this.props.checkout;

    const diffInDays = DateUtils.diffInDays(checkout, checkin);
    if (isCheckoutBeforeCheckin(diffInDays)) {
      // we have to move checkout one day after checkin
      checkout = DateUtils(checkin).addDays(1);
    } else if (isCheckoutMoreThan30DaysFromCheckin(diffInDays)) {
      // search range is limited to 30 days only
      checkout = DateUtils(checkin).addDays(30);
    }

    this.handleDateChange(checkin, checkout);
  };

  handleCheckoutChange = (date: Date) => {
    let checkin = this.props.checkin;
    const checkout = date;

    const diffInDays = DateUtils.diffInDays(checkout, checkin);
    if (isCheckoutBeforeCheckin(diffInDays)) {
      // we have to move checkin one day earlier
      checkin = DateUtils(checkout).addDays(-1);
    } else if (isCheckoutMoreThan30DaysFromCheckin(diffInDays)) {
      // search range is limited to 30 days only
      checkin = DateUtils(checkout).addDays(-30);
    }

    this.handleDateChange(checkin, checkout);
  };

  handleDateChange = (checkin: Date, checkout: Date) => {
    this.props.onChange({
      checkin,
      checkout,
    });
  };

  render() {
    const props = this.props;

    return (
      <View style={styles.container}>
        {/* 
          Booking.com API has a max 360 days in the future requirement for checkout
          Max allowed checkin should then be 359 days in the future
        */}
        <View style={styles.leftDatePickerWrapper}>
          <DatePicker
            placeholder="Start date"
            date={props.checkin}
            minDate={new Date()}
            maxDate={DateUtils().addDays(359)}
            onDateChange={this.handleCheckinChange}
            iconComponent={<TextIcon code="&#xe0a3;" />}
          />
        </View>
        <View style={styles.rightDatePickerWrapper}>
          <DatePicker
            placeholder="End date"
            date={props.checkout}
            minDate={DateUtils().addDays(1)}
            maxDate={DateUtils().addDays(360)}
            onDateChange={this.handleCheckoutChange}
            iconComponent={<TextIcon code="&#xe0a2;" />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  leftDatePickerWrapper: {
    flexGrow: 1,
    minWidth: 110,
    android: {
      marginEnd: 8,
    },
    ios: {
      marginEnd: 10,
    },
  },
  rightDatePickerWrapper: {
    flexGrow: 1,
    minWidth: 110,
  },
});

// @flow

import * as React from 'react';
import OriginalDatePicker from 'react-native-datepicker';

import { textInput as textInputColors } from '../../styles/colors';

export default function DatePicker(props: Object) {
  return (
    <OriginalDatePicker
      {...props}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      showIcon={false}
      customStyles={{
        dateInput: {
          padding: 10,
          backgroundColor: textInputColors.background,
          borderColor: textInputColors.border,
          borderWidth: 1,
          alignItems: 'flex-start',
        },
      }}
    />
  );
}

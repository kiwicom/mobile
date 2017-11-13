// @flow

import * as React from 'react';
import OriginalDatePicker from 'react-native-datepicker';

import config from '../../../config/application';
import { styles } from './TextInput';

export default function DatePicker(props: Object) {
  return (
    <OriginalDatePicker
      {...props}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      confirmBtnText="Select date"
      cancelBtnText="Cancel"
      showIcon={false}
      duration={config.animations.duration}
      style={{
        // styles for 'TouchableComponent' around date picker
        width: null, // removes default width
      }}
      customStyles={{
        // date input wrapper (View)
        dateInput: {
          flex: styles.input.flex,
          height: styles.wrapper.height,
          margin: 0,
          borderWidth: 0,
          alignItems: 'flex-start',
          backgroundColor: styles.input.backgroundColor,
          padding: styles.input.padding,
        },
        // text inside of the date input wrapper (Text)
        dateText: {
          color: styles.input.color,
          fontSize: styles.input.fontSize,
        },
        // touchable area around the 'dateInput' (View)
        dateTouchBody: {
          ...styles.wrapper,
        },
      }}
    />
  );
}

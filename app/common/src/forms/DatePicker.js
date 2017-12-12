// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';
import OriginalDatePicker from 'react-native-datepicker';
import defaultsDeep from 'lodash/defaultsDeep';

import { styles } from './TextInput';

const customStyles = StyleSheet.create({
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
});

const defaultProps = {
  mode: 'date',
  placeholder: 'select date',
  format: 'YYYY-MM-DD',
  confirmBtnText: 'Select date',
  cancelBtnText: 'Cancel',
  showIcon: false,
  duration: 100,
  style: {
    // styles for 'TouchableComponent' around date picker
    width: null, // removes default width
  },
  customStyles,
};

export default function DatePicker(props: Object) {
  return <OriginalDatePicker {...defaultsDeep({}, props, defaultProps)} />;
}

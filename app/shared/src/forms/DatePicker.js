// @flow

import * as React from 'react';
import OriginalDatePicker from 'react-native-datepicker';
import defaultsDeep from 'lodash/defaultsDeep';

import { styles } from './TextInput';
import StyleSheet from '../PlatformStyleSheet';

const customStyles = StyleSheet.create({
  // date input wrapper (View)
  dateInput: {
    flex: styles.input.flex,
    height: styles.wrapper.height,
    borderWidth: 0,
    padding: styles.input.padding,
    backgroundColor: styles.input.backgroundColor,
  },
  // text inside of the date input wrapper (Text)
  dateText: {
    color: styles.input.color,
    fontSize: styles.input.fontSize,
  },
  // touchable area around the 'dateInput' (View)
  dateTouchBody: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 3, // Android only
    margin: 3, // needed in order to see elevation on Android
    android: {
      borderRadius: 2,
    },
    ios: {
      borderRadius: 0,
    },
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

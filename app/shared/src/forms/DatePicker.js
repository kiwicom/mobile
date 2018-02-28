// @flow

import * as React from 'react';
import { View } from 'react-native';
import OriginalDatePicker from 'react-native-datepicker';

import StyleSheet from '../PlatformStyleSheet';

const customStyles = StyleSheet.create({
  // date input wrapper (View)
  dateInput: {
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'transparent',
  },
  // text inside of the date input wrapper (Text)
  dateText: {
    color: '#30363d',
    android: {
      fontSize: 16,
    },
    ios: {
      fontSize: 14,
    },
  },
  // touchable area around the 'dateInput' (View)
  dateTouchBody: {
    backgroundColor: '#fff',
    android: {
      borderRadius: 3,
      height: 48,
    },
    ios: {
      borderRadius: 0,
      height: 47,
    },
  },
  originalDatePickerWrapper: {
    elevation: 1,
    android: {
      borderRadius: 3,
      height: 48,
    },
    ios: {
      borderRadius: 0,
      height: 47,
    },
  },
});

export default class DatePicker extends React.Component<{}> {
  static defaultProps = {
    mode: 'date',
    placeholder: 'select date',
    format: 'YYYY-MM-DD',
    confirmBtnText: 'Select date',
    cancelBtnText: 'Cancel',
    showIcon: false,
    duration: 100,
    customStyles,
  };

  render = () => {
    return (
      <View style={customStyles.originalDatePickerWrapper}>
        <OriginalDatePicker
          {...this.props}
          style={{
            // styles for 'TouchableComponent' around date picker
            width: null, // removes default width
          }}
        />
      </View>
    );
  };
}

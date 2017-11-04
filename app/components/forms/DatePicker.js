// @flow

import * as React from 'react';
import OriginalDatePicker from 'react-native-datepicker';
import { View, Dimensions } from 'react-native';

import config from '../../config/application';
import { colours as inputColours } from './TextInput';

export default function DatePicker(props: Object) {
  return (
    <View
      style={{
        height: 40,
        backgroundColor: '#ededed',
        padding: 10,
        marginBottom: 5,
      }}
    >
      <OriginalDatePicker
        {...props}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        duration={config.animations.duration}
        style={{
          width: Dimensions.get('window').width, // FIXME: how to do it better?
        }}
        customStyles={{
          dateInput: {
            flex: 1,
            height: 0,
            margin: 0,
            borderWidth: 0,
            alignItems: 'flex-start',
          },
          placeholderText: {
            colours: inputColours.text,
          },
          dateTouchBody: {
            flexDirection: 'row',
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    </View>
  );
}

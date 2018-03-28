// @flow

import * as React from 'react';
import { View } from 'react-native';
import OriginalDatePicker from 'react-native-datepicker';

import StyleSheet from '../PlatformStyleSheet';
import Icon from '../icons/Icon';
import Color from '../Color';

const customStyles = StyleSheet.create({
  // date input wrapper (View)
  // eslint-disable-next-line react-native/no-unused-styles
  dateInput: {
    borderWidth: 0,
    padding: 10,
    paddingLeft: 40,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
  },
  // text inside of the date input wrapper (Text)
  // eslint-disable-next-line react-native/no-unused-styles
  dateText: {
    color: Color.textDark,
    android: {
      fontSize: 16,
    },
    ios: {
      fontSize: 14,
    },
  },
  dateIcon: {
    position: 'absolute',
    left: 0,
    marginLeft: 10,
  },
  // touchable area around the 'dateInput' (View)
  // eslint-disable-next-line react-native/no-unused-styles
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
  // Confirm button text styling
  // eslint-disable-next-line react-native/no-unused-styles
  btnTextConfirm: {
    color: Color.brand,
  },
  // Cancel button text styling
  // eslint-disable-next-line react-native/no-unused-styles
  btnTextCancel: {
    color: Color.brand,
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

type Props = {
  iconComponent: React.Node,
};

export default class DatePicker extends React.Component<Props> {
  static defaultProps = {
    mode: 'date',
    placeholder: 'select date',
    format: 'YYYY-MM-DD',
    confirmBtnText: 'Select date',
    cancelBtnText: 'Cancel',
    showIcon: true,
    duration: 100,
    customStyles,
  };

  render = () => {
    const iconComponent = (
      <View style={customStyles.dateIcon}>
        {this.props.iconComponent === undefined ? (
          <Icon name="date-range" size={20} />
        ) : (
          this.props.iconComponent
        )}
      </View>
    );

    return (
      <View style={customStyles.originalDatePickerWrapper}>
        <OriginalDatePicker
          {...this.props}
          iconComponent={iconComponent}
          style={{
            // styles for 'TouchableComponent' around date picker
            width: null, // removes default width
          }}
        />
      </View>
    );
  };
}

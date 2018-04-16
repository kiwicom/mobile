// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/react-native-app-localization';
import { View } from 'react-native';

import Touchable from '../../Touchable';
import StyleSheet from '../../PlatformStyleSheet';
import Text from '../../Text';
import Color from '../../Color';

const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
  date: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  dateText: {
    color: Color.textDark,
    android: {
      fontSize: 16,
    },
    ios: {
      paddingTop: 2,
      fontSize: 14,
    },
    marginLeft: 5,
  },
});

type Props = {|
  onPress: () => void,
  date: Date,
  iconComponent?: React.Node,
  format?: string,
|};

export default function DatePickerButton(props: Props) {
  return (
    <Touchable style={styles.dateTouchBody} onPress={props.onPress}>
      <View style={styles.date}>
        {props.iconComponent}
        <Text style={styles.dateText}>
          {DateFormatter(props.date).format(props.format)}
        </Text>
      </View>
    </Touchable>
  );
}

DatePickerButton.defaultProps = {
  format: 'MMM DD',
};

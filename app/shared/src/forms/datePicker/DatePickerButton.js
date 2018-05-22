// @flow

import * as React from 'react';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { View } from 'react-native';

import Touchable from '../../Touchable';
import StyleSheet from '../../PlatformStyleSheet';
import Text from '../../Text';
import Color from '../../Color';

type Props = {|
  onPress: () => void,
  date: Date,
  iconComponent?: React.Node,
|};

export default function DatePickerButton(props: Props) {
  return (
    <Touchable style={styles.dateTouchBody} onPress={props.onPress}>
      <View style={styles.date}>
        {props.iconComponent}
        <Text style={styles.dateText}>
          <Translation passThrough={DateFormatter(props.date).formatToDate()} />
        </Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  dateTouchBody: {
    backgroundColor: Color.inputBackground,
    borderRadius: 6,
    android: {
      height: 48,
    },
    ios: {
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

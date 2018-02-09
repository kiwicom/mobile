// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/react-native-app-shared';
import {
  TextInput as OriginalTextInput,
  View,
  StyleSheet,
  Platform,
} from 'react-native';

export const styles = {
  input: {
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 15,
    padding: 10,
    flex: 1,
  },
  wrapper: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 5,
    flexDirection: 'row',
    borderRadius: Platform.select({
      ios: 0,
      android: 2,
    }),
  },
  icon: {
    marginLeft: 10,
    alignSelf: 'center',
  },
};

// not exact - additional properties allowed
type Props = {
  iconName?: string, // only Material icons allowed here
};

export default function TextInput(props: Props) {
  const stylesheetStyles = StyleSheet.create(styles);
  return (
    <View style={stylesheetStyles.wrapper}>
      {props.iconName && (
        <Icon name={props.iconName} size={20} style={stylesheetStyles.icon} />
      )}
      <OriginalTextInput
        underlineColorAndroid="transparent"
        autoCorrect={false}
        {...props}
        style={stylesheetStyles.input}
      />
    </View>
  );
}

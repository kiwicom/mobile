// @flow

import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput as OriginalTextInput, View } from 'react-native';

import Color from '../Color';

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
  return (
    <View style={styles.wrapper}>
      {props.iconName && (
        <MaterialIcons
          name={props.iconName}
          size={20}
          color={Color.icon.grey}
          style={styles.icon}
        />
      )}
      <OriginalTextInput
        underlineColorAndroid="transparent"
        {...props}
        style={styles.input}
      />
    </View>
  );
}

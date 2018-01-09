// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/react-native-app-common';
import { TextInput as OriginalTextInput, View } from 'react-native';

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
        <Icon name={props.iconName} size={20} style={styles.icon} />
      )}
      <OriginalTextInput
        underlineColorAndroid="transparent"
        {...props}
        style={styles.input}
      />
    </View>
  );
}

// @flow

import * as React from 'react';
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
    backgroundColor: '#ededed',
    marginBottom: 5,
  },
};

export default function TextInput(props: Object) {
  return (
    <View style={styles.wrapper}>
      <OriginalTextInput
        underlineColorAndroid="transparent"
        {...props}
        style={{
          ...styles.input,
        }}
      />
    </View>
  );
}

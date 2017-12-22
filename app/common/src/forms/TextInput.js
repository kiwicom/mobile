// @flow

import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput as OriginalTextInput, View } from 'react-native';
import defaultsDeep from 'lodash/defaultsDeep';
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
};

export default function TextInput(props: Object) {
  return (
    <View style={styles.wrapper}>
      {props.icon && (
        <MaterialIcons {...defaultsDeep(props.icon, defaultIconProps)} />
      )}
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

const defaultIconProps = {
  size: 20,
  color: Color.icon.grey,
  style: {
    marginLeft: 10,
    alignSelf: 'center',
  },
};

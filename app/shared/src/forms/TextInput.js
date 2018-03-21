// @flow

import * as React from 'react';
import { TextInput as OriginalTextInput, View } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import Icon from '../icons/Icon';
import Color from '../Color';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: Color.textDark,
    backgroundColor: 'transparent',
    padding: 10,
    android: {
      fontSize: 16,
    },
    ios: {
      fontSize: 14,
    },
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 1, // Android only
    android: {
      borderRadius: 3,
      height: 48,
    },
    ios: {
      borderRadius: 0,
      height: 47,
    },
  },
  icon: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});

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
        autoCorrect={false}
        {...props}
        style={styles.input}
      />
    </View>
  );
}

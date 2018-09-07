// @flow

import * as React from 'react';
import { Keyboard, View } from 'react-native';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';
import StyleSheet from '../PlatformStyleSheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {|
  children: React.Node,
|};

const DismissKeyboardView = ({ children }: Props) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;

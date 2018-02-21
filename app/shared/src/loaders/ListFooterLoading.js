// @flow

import * as React from 'react';
import { View } from 'react-native';

import IconLoading from './IconLoading';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  isLoading: boolean,
|};

const styles = StyleSheet.create({
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default function ListFooterLoading({ isLoading }: Props) {
  if (isLoading) {
    return (
      <View style={styles.loadingView}>
        <IconLoading />
      </View>
    );
  }
  return null;
}

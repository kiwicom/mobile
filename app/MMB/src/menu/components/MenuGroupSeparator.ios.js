// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet } from '@kiwicom/mobile-shared';

type Props = {|
  withoutIcons: boolean,
|};

export default function MenuGroupSeparator(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      <View
        style={[
          styleSheet.separatorLeft,
          props.withoutIcons ? styleSheet.separatorLeftWithoutIcons : null,
        ]}
      />
      <View style={styleSheet.separatorRight} />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  separatorLeft: {
    height: 1,
    width: 45,
    backgroundColor: Color.white,
  },
  separatorLeftWithoutIcons: {
    width: 15,
  },
  separatorRight: {
    height: 1,
    width: '100%',
    backgroundColor: Color.backgroundGray,
  },
});

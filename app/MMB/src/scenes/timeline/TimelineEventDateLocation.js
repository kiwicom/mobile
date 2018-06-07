// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  +time: string,
|};

export default function TimelineEventDateLocation(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Translation passThrough={props.time} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: { fontSize: 10 },
});

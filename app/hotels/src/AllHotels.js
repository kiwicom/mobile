// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@kiwicom/native-common';

type Props = {
  onGoToHotelsMap: () => void,
  onGoToSingleHotel: () => void,
};

export default function AllHotels(props: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is AllHotels component</Text>
      <Button title="All hotels map" onPress={props.onGoToHotelsMap} />
      <Button title="Single hotel" onPress={props.onGoToSingleHotel} />
    </View>
  );
}

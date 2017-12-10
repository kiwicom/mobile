// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@kiwicom/react-native-app-common';

type Props = {
  onGoToSingleHotel: () => void,
};

export default function AllHotels(props: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is AllHotelsMap component</Text>
      <Button title="Single hotel" onPress={props.onGoToSingleHotel} />
    </View>
  );
}

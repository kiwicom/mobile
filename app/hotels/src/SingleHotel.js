// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@kiwicom/native-common';

type Props = {
  onGoToHotelGallery: () => void,
};

export default function AllHotels(props: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is SingleHotel component</Text>
      <Button title="Single hotel gallery" onPress={props.onGoToHotelGallery} />
    </View>
  );
}

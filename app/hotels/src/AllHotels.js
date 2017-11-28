// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, type Navigation } from '@kiwicom/native-common';

type Props = {
  navigation: Navigation,
};

export default function AllHotels(props: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is AllHotels component</Text>
      <Button
        title="All hotels map"
        onPress={() => props.navigation.navigate('AllHotelsMap')}
      />
      <Button
        title="Single hotel"
        onPress={() => props.navigation.navigate('SingleHotel')}
      />
    </View>
  );
}

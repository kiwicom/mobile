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
      <Text>This is SingleHotel component</Text>
      <Button
        title="Single hotel gallery"
        onPress={() => props.navigation.navigate('Gallery')}
      />
    </View>
  );
}

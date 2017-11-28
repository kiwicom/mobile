// @flow

import * as React from 'react';
import { View, Text } from 'react-native';

// FIXME: toto není správně (používají se komponenty z jiného balíku)
import Button from '../../native/src/components/visual/buttons/Button';

export default function AllHotels(props) {
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

// @flow

import * as React from 'react';
import { Text, ScrollView, View } from 'react-native';

type CardProps = {|
  children: React.Node,
|};

const Card = ({ children }: CardProps) => (
  <View
    style={{
      padding: 20,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 2,
      backgroundColor: '#fff',
      marginRight: 5, // TODO: except last card
      height: 100,
    }}
  >
    {children}
  </View>
);

export default function HotelSuggestions() {
  return (
    <ScrollView horizontal={true}>
      <Card>
        <Text>TODO HOTEL 1</Text>
      </Card>
      <Card>
        <Text>TODO HOTEL 2</Text>
      </Card>
      <Card>
        <Text>TODO HOTEL 3</Text>
      </Card>
      <Card>
        <Text>TODO HOTEL 4</Text>
      </Card>
    </ScrollView>
  );
}

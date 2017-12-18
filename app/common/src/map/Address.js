// @flow

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Color from '../Color';

type Props = {|
  address: string,
|};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: Color.grey._100,
    borderTopWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  mapIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  header: {
    fontWeight: 'bold',
  },
});

class Address extends React.Component<Props> {
  render = () => {
    const { address } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Ionicons name="md-map" size={24} color={Color.brand} />
        </View>
        <View>
          <Text style={styles.header}>Address</Text>
          <Text>{address}</Text>
        </View>
      </View>
    );
  };
}

export default Address;

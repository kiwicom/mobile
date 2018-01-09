// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Icon } from '@kiwicom/react-native-app-common';

import type { Address as AddressData } from './__generated__/Address.graphql';

type Props = {|
  data: AddressData,
|};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: Color.grey.$100,
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
  content: {
    flex: 1,
  },
});

class Address extends React.Component<Props> {
  render = () => {
    const { data: address } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Icon name="map" size={24} color={Color.brand} />
        </View>
        <View style={styles.content}>
          <Text style={styles.header}>Address</Text>
          <Text numberOfLines={2}>
            {address.street}, {address.city} {address.zip}
          </Text>
        </View>
      </View>
    );
  };
}

export default createFragmentContainer(
  Address,
  graphql`
    fragment Address on Address {
      street
      city
      zip
    }
  `,
);

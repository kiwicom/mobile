// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Icon, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { Address_address as AddressType } from './__generated__/Address_address.graphql';

type Props = {|
  +address: ?AddressType,
|};

class Address extends React.Component<Props> {
  render() {
    const street = this.props.address?.street ?? '';
    const city = this.props.address?.city ?? '';
    const zip = this.props.address?.zip ?? '';

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Icon name="map" color={defaultTokens.paletteProductNormal} />
        </View>
        <View style={styles.content}>
          <Text style={styles.header}>
            <Translation id="hotels.map.address" />
          </Text>
          <Text numberOfLines={2}>
            <Translation passThrough={`${street}, ${city} ${zip}`} />
          </Text>
        </View>
      </View>
    );
  }
}

export default createFragmentContainer(Address, {
  address: graphql`
    fragment Address_address on Address {
      street
      city
      zip
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 50,
  },
  mapIcon: {
    alignSelf: 'center',
    marginEnd: 10,
  },
  header: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

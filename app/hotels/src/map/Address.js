// @flow strict

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Icon, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { Address_address } from './__generated__/Address_address.graphql';

type ContainerProps = {|
  +address: $FlowFixMeProps,
|};

type Props = {
  ...ContainerProps,
  +address: ?Address_address,
};

class Address extends React.Component<Props> {
  render = () => {
    const street = idx(this.props, _ => _.address.street) || '';
    const city = idx(this.props, _ => _.address.city) || '';
    const zip = idx(this.props, _ => _.address.zip) || '';

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Icon
            name="map"
            size={24}
            color={defaultTokens.paletteProductNormal}
          />
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
  };
}

export default (createFragmentContainer(
  Address,
  graphql`
    fragment Address_address on Address {
      street
      city
      zip
    }
  `,
): React.ComponentType<ContainerProps>);

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

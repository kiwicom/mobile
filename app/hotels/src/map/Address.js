// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import {
  Color,
  Icon,
  StyleSheet,
  Text,
} from '@kiwicom/react-native-app-shared';
import { Translation } from '@kiwicom/react-native-app-localization';

import type { Address_address } from './__generated__/Address_address.graphql';

type ContainerProps = {|
  address: $FlowFixMeProps,
|};

type Props = {
  ...ContainerProps,
  address: ?Address_address,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: Color.grey.$200,
    borderTopWidth: 1,
    marginHorizontal: 10,
    height: 65,
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
    justifyContent: 'center',
  },
});

class Address extends React.Component<Props> {
  render = () => {
    const street = idx(this.props, _ => _.address.street) || '';
    const city = idx(this.props, _ => _.address.city) || '';
    const zip = idx(this.props, _ => _.address.zip) || '';

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Icon name="map" size={24} color={Color.brand} />
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

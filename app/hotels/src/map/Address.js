// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, View, Text } from 'react-native';
import { Color, Icon } from '@kiwicom/react-native-app-shared';

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
    borderTopColor: '#edeff2',
    borderTopWidth: 1,
    marginHorizontal: 10,
    height: 70,
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
    const { address } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Icon name="map" size={24} color={Color.brand} />
        </View>
        <View style={styles.content}>
          <Text style={styles.header}>Address</Text>
          <Text numberOfLines={2}>
            {idx(address, _ => _.street)}, {idx(address, _ => _.city)}{' '}
            {idx(address, _ => _.zip)}
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

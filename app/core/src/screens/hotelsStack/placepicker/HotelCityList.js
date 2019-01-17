// @flow strict

import * as React from 'react';
import { FlatList } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import type { HotelCityList as Cities } from './__generated__/HotelCityList.graphql';
import HotelCityItem from './HotelCityItem';

type Props = {|
  +data: Cities,
  +onPress: () => void,
|};

type ItemType = {|
  +node?: {| +id: string |},
|};

class HotelCityList extends React.Component<Props> {
  keyExtractor = (item: ItemType) => item.node?.id;

  renderItem = ({ item }: { item: ItemType }) => (
    <HotelCityItem data={item.node} onPress={this.props.onPress} />
  );

  render() {
    const data = this.props.data.edges ?? [];
    return (
      <>
        <Translation passThrough="Results" />
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </>
    );
  }
}

export default createFragmentContainer(
  HotelCityList,
  graphql`
    fragment HotelCityList on HotelCityConnection {
      edges {
        node {
          id
          ...HotelCityItem
        }
      }
    }
  `,
);

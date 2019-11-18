// @flow

import * as React from 'react';
import { FlatList } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-shared';

import type { HotelCityList_data as Cities } from './__generated__/HotelCityList_data.graphql';
import HotelCityItem from './HotelCityItem';

type Props = {|
  +data: ?Cities,
  +onPress: () => void,
|};

const keyExtractor = (item, index) => item?.node?.id ?? index.toString();

function HotelCityList(props: Props) {
  const data = props.data?.edges ?? [];
  const renderItem = ({ item }) => <HotelCityItem data={item?.node} onPress={props.onPress} />;
  return (
    <>
      <Translation passThrough="Results" />
      <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
    </>
  );
}

export default createFragmentContainer(HotelCityList, {
  data: graphql`
    fragment HotelCityList_data on HotelCityConnection {
      edges {
        node {
          id
          ...HotelCityItem_data
        }
      }
    }
  `,
});

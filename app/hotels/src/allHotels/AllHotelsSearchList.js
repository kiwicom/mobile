// @flow strict

import * as React from 'react';
import { FlatList } from 'react-native';
import { GeneralError } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList_data as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList_data.graphql';
import { withHotelsContext, type HotelsContextState } from '../HotelsContext';

type Props = {|
  +data: ?AllHotelsSearchListProps,
  +setHotelId: (id: string) => void,
  +ListFooterComponent: React.Node,
|};

type HotelType = {|
  +id: string,
|};

export class AllHotelsSearchList extends React.Component<Props> {
  componentDidMount() {
    const data = this.props.data ?? [];

    if (data.length > 0 && data[0].hotelId != null) {
      this.props.setHotelId(data[0].hotelId);
    }
  }

  keyExtractor = (item: ?HotelType) => item?.id;

  renderItem = ({ item, index }: {| +item: ?HotelType, +index: number |}) => (
    <AllHotelsSearchRow
      key={item?.id}
      data={item}
      testID={index === 0 ? 'firstHotelResult' : ''}
    />
  );

  render() {
    const hotels = this.props.data || [];

    if (hotels.length === 0) {
      return (
        <GeneralError
          errorMessage={
            <Translation id="hotels_search.all_hotels_search_list.no_hotels_found" />
          }
        />
      );
    }

    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        data={this.props.data ?? []}
        ListFooterComponent={this.props.ListFooterComponent}
      />
    );
  }
}

const select = ({ setHotelId }: HotelsContextState) => ({ setHotelId });

export default createFragmentContainer(
  withHotelsContext(select)(AllHotelsSearchList),
  {
    data: graphql`
      fragment AllHotelsSearchList_data on AllHotelsInterface
        @relay(plural: true) {
        id
        ...AllHotelsSearchRow_data
        hotelId
      }
    `,
  },
);

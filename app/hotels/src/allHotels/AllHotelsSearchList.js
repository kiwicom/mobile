// @flow strict

import * as React from 'react';
import { FlatList } from 'react-native';
import { GeneralError, Translation } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList_data as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList_data.graphql';
import { HotelsContext, type HotelsContextState } from '../HotelsContext';

type Props = {|
  +data: ?AllHotelsSearchListProps,
  +ListFooterComponent: React.Node,
|};

type HotelType = {|
  +id: string,
|};

const keyExtractor = (item: ?HotelType) => item?.id;

const renderItem = ({
  item,
  index,
}: {|
  +item: ?HotelType,
  +index: number,
|}) => (
  <AllHotelsSearchRow
    key={item?.id}
    data={item}
    testID={index === 0 ? 'firstHotelResult' : ''}
  />
);

function getFirst<T>(list: $ReadOnlyArray<T>): ?T {
  return list[0];
}

export const AllHotelsSearchList = (props: Props) => {
  const {
    actions: { setHotelId },
  }: HotelsContextState = React.useContext(HotelsContext);
  const hotels = props.data ?? [];

  React.useEffect(() => {
    const hotel = getFirst(hotels);
    const hotelId = hotel?.hotelId;
    if (hotelId != null) {
      setHotelId(hotelId);
    }
    // TODO: create a `componentDidMount` hook
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={hotels}
      ListFooterComponent={props.ListFooterComponent}
    />
  );
};

export default createFragmentContainer(AllHotelsSearchList, {
  data: graphql`
    fragment AllHotelsSearchList_data on AllHotelsInterface
      @relay(plural: true) {
      id
      ...AllHotelsSearchRow_data
      hotelId
    }
  `,
});

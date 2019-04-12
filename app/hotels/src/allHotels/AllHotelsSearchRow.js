// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Touchable, AdaptableLayout } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import { type HotelsContextState, HotelsContext } from '../HotelsContext';
import type { AllHotelsSearchRow_data as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow_data.graphql';
import SearchRowContent from './SearchRowContent';

type Props = {|
  +navigation: NavigationType,
  +data: ?AllHotelsSearchRowProps,
  +testID?: string,
|};

function AllHotelsSearchRow(props: Props) {
  const hotelId = props.data?.hotelId;
  const {
    setHotelId,
    checkin,
    checkout,
    roomsConfiguration,
    apiProvider,
  }: HotelsContextState = React.useContext(HotelsContext);
  function onGoToSingleHotel() {
    if (hotelId != null) {
      setHotelId(hotelId);

      props.navigation.navigate('SingleHotel', {
        checkin,
        checkout,
        roomsConfiguration,
        apiProvider,
      });
    }
  }

  function setActiveHotelId() {
    if (hotelId != null) {
      setHotelId(hotelId);
    }
  }

  return (
    <AdaptableLayout
      renderOnNarrow={
        <Touchable
          onPress={onGoToSingleHotel}
          style={style.container}
          delayPressIn={100}
          testID={props.testID}
        >
          <SearchRowContent hotel={props.data} />
        </Touchable>
      }
      renderOnWide={
        <Touchable
          onPress={setActiveHotelId}
          style={style.container}
          delayPressIn={100}
          testID={props.testID}
        >
          <SearchRowContent hotel={props.data} />
        </Touchable>
      }
    />
  );
}

export default createFragmentContainer(withNavigation(AllHotelsSearchRow), {
  data: graphql`
    fragment AllHotelsSearchRow_data on AllHotelsInterface {
      ...HotelTitle_data
      ...SearchRowContent_hotel
      hotelId
    }
  `,
});

const style = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    paddingTop: 8,
  },
});

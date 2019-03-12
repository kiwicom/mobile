// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Device } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import RoomSummary from './RoomSummary';
import type { BookingSummary_room as Room } from './__generated__/BookingSummary_room.graphql';

type Props = {|
  +goBack: () => void,
  +room: ?Room,
|};

const BookingSummary = (props: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <RoomSummary room={props.room} goBack={props.goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    end: 0,
    start: 0,
    bottom: 0,
    backgroundColor: defaultTokens.paletteWhite,
    paddingBottom: Device.isIPhoneX ? 36 : 8,
  },
});

export default createFragmentContainer(BookingSummary, {
  room: graphql`
    fragment BookingSummary_room on HotelAvailabilityInterface {
      ...RoomSummary_room
    }
  `,
});

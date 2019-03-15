// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  AdaptableLayout,
  CloseButton,
} from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import BookNow from '../bookNow/BookNow';
import type { SummaryButtons_rooms as RoomsType } from './__generated__/SummaryButtons_rooms.graphql';

type Props = {|
  +maxPersons: number,
  +rooms: ?RoomsType,
  +amount: ?string,
  +goBack: () => void,
|};

function SummaryButtons(props: Props) {
  return (
    <View style={styles.row}>
      <AdaptableLayout
        renderOnNarrow={
          <View style={styles.closeWrapper}>
            <CloseButton onPress={props.goBack} />
          </View>
        }
      />

      {props.maxPersons > 0 && (
        <View style={styles.bookNowWrapper}>
          <BookNow
            rooms={props.rooms}
            maxPersons={props.maxPersons}
            amount={props.amount}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  closeWrapper: {
    flex: 1,
    marginEnd: 8,
  },
  bookNowWrapper: {
    flex: 1,
  },
});

export default createFragmentContainer(SummaryButtons, {
  rooms: graphql`
    fragment SummaryButtons_rooms on HotelAvailabilityInterface {
      ...BookNow_rooms
    }
  `,
});

// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';

import RoomRow from './RoomRow';
import type { RoomList_data as RoomListType } from './__generated__/RoomList_data.graphql';

type Props = {|
  +data: ?RoomListType,
|};

class RoomList extends React.Component<Props> {
  render() {
    const data = this.props.data?.availableRooms ?? [];
    const numberOfRooms = data.reduce((acc, curr) => {
      const selectedCount = curr?.selectedCount ?? 0;
      return acc + selectedCount;
    }, 0);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Translation
            id="single_hotel.room_list.rooms"
            textTransform="uppercase"
          />
        </Text>
        {data.map((availableRoom, index) => (
          <React.Fragment key={availableRoom?.id}>
            {index !== 0 && (
              <SeparatorFullWidth
                height={StyleSheet.hairlineWidth}
                color={defaultTokens.paletteInkLighter}
              />
            )}
            <RoomRow
              availableRoom={availableRoom}
              testID={index === data.length - 1 ? 'lastAvailableRoom' : ''}
              numberOfRooms={numberOfRooms}
            />
          </React.Fragment>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  title: {
    paddingStart: 16,
    paddingTop: 16,
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
    fontWeight: '800',
  },
});

export default createFragmentContainer(RoomList, {
  data: graphql`
    fragment RoomList_data on HotelAvailabilityInterface {
      availableRooms {
        id
        ...RoomRow_availableRoom
        selectedCount
      }
    }
  `,
});

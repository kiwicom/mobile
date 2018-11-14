// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import isEqual from 'react-fast-compare';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';

import RoomRow from './RoomRow';
import type { RoomList as RoomListType } from './__generated__/RoomList.graphql';

type ContainerProps = {|
  +data: any,
  +select: (availabilityId: string, maxPersons: number) => void,
  +deselect: (availabilityId: string, maxPersons: number) => void,
  +selected: {
    [string]: number,
  },
  +disabled: boolean,
|};

type Props = {|
  ...ContainerProps,
  +data: ?RoomListType,
|};

class RoomList extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props) => !isEqual(nextProps, this.props);

  render() {
    const { select, deselect, selected, disabled } = this.props;
    const data = this.props.data || [];

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Translation
            id="single_hotel.room_list.rooms"
            textTransform="uppercase"
          />
        </Text>
        {data.map((availableRoom, index) => (
          <React.Fragment key={availableRoom.id}>
            {index != 0 && (
              <SeparatorFullWidth
                height={StyleSheet.hairlineWidth}
                color={defaultTokens.paletteInkLighter}
              />
            )}
            <RoomRow
              availableRoom={availableRoom}
              select={select}
              deselect={deselect}
              selected={selected}
              disabled={disabled}
              testID={index === data.length - 1 ? 'lastAvailableRoom' : ''}
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

export default (createFragmentContainer(
  RoomList,
  graphql`
    fragment RoomList on HotelRoomAvailabilityInterface @relay(plural: true) {
      id
      ...RoomRow_availableRoom
    }
  `,
): React.ComponentType<ContainerProps>);

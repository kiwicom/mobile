// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import idx from 'idx';
import {
  NetworkImage,
  SimpleCard,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';
import ReadMore from 'react-native-read-more-text';
import { createFragmentContainer, graphql } from 'react-relay';

import RoomPicker from '../roomPicker/RoomPicker';
import BeddingInfo from './BeddingInfo';
import type { RoomRow_availableRoom } from './__generated__/RoomRow_availableRoom.graphql';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderRadius: 2,
  },
  details: {
    flex: 1,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#30363d',
  },
  delimiter: {
    height: 1,
    backgroundColor: '#edeff2',
    marginVertical: 6,
  },
  description: {
    fontSize: 12,
    color: '#30363d',
  },
  roomPicker: {
    marginTop: 10,
  },
});

type ContainerProps = {|
  availableRoom: ?Object,
  select: (availabilityId: string) => void,
  deselect: (availabilityId: string) => void,
  selected: {
    [string]: number,
  },
|};

type Props = {
  ...ContainerProps,
  availableRoom: ?RoomRow_availableRoom,
};

export class RoomRow extends React.Component<Props> {
  select = () => {
    const { availableRoom, select } = this.props;
    const originalId = idx(availableRoom, _ => _.originalId);
    if (originalId) {
      select(originalId);
    }
  };

  deselect = () => {
    const { availableRoom, deselect } = this.props;
    const originalId = idx(availableRoom, _ => _.originalId);
    if (originalId) {
      deselect(originalId);
    }
  };

  render = () => {
    const availableRoom = this.props.availableRoom;
    const title = idx(availableRoom, _ => _.room.description.title) || 'Room';
    const description = idx(availableRoom, _ => _.room.description.text);
    const thumbnailUrl = idx(
      availableRoom,
      _ => _.room.photos.edges[0].node.thumbnailUrl,
    );
    const price = idx(availableRoom, _ => _.minimalPrice.amount);
    const currency = idx(availableRoom, _ => _.minimalPrice.currency);
    const selectableCount =
      idx(availableRoom, _ => _.incrementalPrice.length) || 0;
    const originalId = idx(availableRoom, _ => _.originalId) || '';
    const selectedCount = idx(this.props.selected, _ => _[originalId]) || 0;

    return (
      <SimpleCard>
        <View style={styles.row}>
          <NetworkImage
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnail}
          />
          <View style={styles.details}>
            <BeddingInfo room={idx(availableRoom, _ => _.room)} />
            <Text style={styles.title}>{title}</Text>
            {description != null && (
              <View>
                <View style={styles.delimiter} />
                <ReadMore numberOfLines={2}>
                  <Text style={styles.description}>{description}</Text>
                </ReadMore>
              </View>
            )}
          </View>
        </View>
        {price &&
          currency && (
            <View style={styles.roomPicker}>
              <RoomPicker
                price={price}
                currency={currency}
                selectedCount={selectedCount}
                selectableCount={selectableCount}
                increment={this.select}
                decrement={this.deselect}
              />
            </View>
          )}
      </SimpleCard>
    );
  };
}

export default (createFragmentContainer(
  RoomRow,
  graphql`
    fragment RoomRow_availableRoom on HotelRoomAvailability {
      originalId
      room {
        description {
          title
          text
        }
        photos {
          edges {
            node {
              thumbnailUrl
            }
          }
        }
        ...BeddingInfo_room
      }
      minimalPrice {
        amount
        currency
      }
      incrementalPrice {
        amount
        currency
      }
    }
  `,
): React.ComponentType<ContainerProps>);

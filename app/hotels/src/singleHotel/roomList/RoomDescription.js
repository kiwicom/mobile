// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Text, StyleSheet, ReadMore } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { RoomDescription_room as RoomDescriptionType } from './__generated__/RoomDescription_room.graphql';

type ContainerProps = {|
  +room: ?Object,
|};

type Props = {|
  ...ContainerProps,
  +room: RoomDescriptionType,
|};

export const RoomDescription = (props: Props) => {
  const description = idx(props, _ => _.room.description.text);

  if (description != null) {
    return (
      <View>
        <View style={styles.delimiter} />
        <ReadMore
          numberOfLines={2}
          style={styles.readMore}
          truncatedText={
            <Translation id="single_hotel.room_description.read_more" />
          }
          revealedText={<Translation id="single_hotel.room_description.hide" />}
        >
          <Text style={styles.description}>
            <Translation passThrough={description} />
          </Text>
        </ReadMore>
      </View>
    );
  }

  return null;
};

export default (createFragmentContainer(
  RoomDescription,
  graphql`
    fragment RoomDescription_room on HotelRoom {
      description {
        text
      }
    }
  `,
): React.ComponentType<ContainerProps>);

const styles = StyleSheet.create({
  delimiter: {
    height: 1,
    backgroundColor: defaultTokens.paletteCloudLight,
    marginVertical: 6,
  },
  description: {
    fontSize: 12,
    color: defaultTokens.colorTextAttention,
  },
  readMore: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: '600',
    fontSize: 12,
  },
});

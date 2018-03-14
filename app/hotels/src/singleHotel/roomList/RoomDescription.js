// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import { Text, StyleSheet } from '@kiwicom/react-native-app-shared';
import ReadMore from 'react-native-read-more-text';

import type { RoomDescription_room as RoomDescriptionType } from './__generated__/RoomDescription_room.graphql';

type ContainerProps = {|
  room: ?Object,
|};

type Props = {|
  ...ContainerProps,
  room: RoomDescriptionType,
|};

const styles = StyleSheet.create({
  delimiter: {
    height: 1,
    backgroundColor: '#edeff2',
    marginVertical: 6,
  },
  description: {
    fontSize: 12,
    color: '#30363d',
  },
});

const RoomDescription = (props: Props) => {
  const description = idx(props, _ => _.room.description.text);

  if (description != null) {
    return (
      <View>
        <View style={styles.delimiter} />
        <ReadMore numberOfLines={2}>
          <Text style={styles.description}>{description}</Text>
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

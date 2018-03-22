// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import {
  Text,
  StyleSheet,
  Color,
  ReadMore,
} from '@kiwicom/react-native-app-shared';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

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
    backgroundColor: Color.backgroundGray,
    marginVertical: 6,
  },
  description: {
    fontSize: 12,
    color: Color.textDark,
  },
  readMore: {
    color: Color.brand,
    fontWeight: '600',
    fontSize: 12,
  },
});

export const RoomDescription = (props: Props) => {
  const description = idx(props, _ => _.room.description.text);

  if (description != null) {
    return (
      <View>
        <View style={styles.delimiter} />
        <ReadMore
          numberOfLines={2}
          style={styles.readMore}
          truncatedText="Read more"
          revealedText="Hide"
        >
          <Text style={styles.description}>
            <DummyTranslation id={description} />
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

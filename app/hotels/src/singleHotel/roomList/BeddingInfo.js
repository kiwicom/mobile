// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet } from '@kiwicom/react-native-app-shared';

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';
import formatBeddingInfo from './formatBeddingInfo';

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 15,
    color: '#79818a',
  },
});

type ContainerProps = {|
  room: any,
|};

type Props = {
  ...ContainerProps,
  room: ?BeddingInfo_room,
};

export class BeddingInfo extends React.Component<Props> {
  render = () => {
    const { room } = this.props;
    const info = formatBeddingInfo(room);

    return (
      <View>
        <Text style={styles.text}>{info}</Text>
      </View>
    );
  };
}

export default (createFragmentContainer(
  BeddingInfo,
  graphql`
    fragment BeddingInfo_room on HotelRoom {
      type
      maxPersons
      bedding {
        type
        amount
      }
    }
  `,
): React.ComponentType<ContainerProps>);

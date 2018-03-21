// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  StyleSheet,
  Text,
  TextIcon,
  Icon,
  Color,
} from '@kiwicom/react-native-app-shared';
import idx from 'idx';

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';
import formatBeddingInfo from './formatBeddingInfo';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    color: Color.textLight,
  },
  icon: {
    color: Color.textLight,
    fontSize: 12,
    marginRight: 2,
    android: {
      alignSelf: 'center',
    },
    ios: {
      alignSelf: 'flex-end',
    },
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
    const maxPersons = idx(this.props.room, _ => _.maxPersons);
    return (
      <View>
        <View style={styles.row}>
          <TextIcon style={styles.icon}>&#xe0a5;</TextIcon>
          <Text style={styles.text}> {info}</Text>
        </View>
        <View style={styles.row}>
          <Icon size={14} name="person" />
          <Text style={styles.text}> {maxPersons} Guest(s)</Text>
        </View>
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

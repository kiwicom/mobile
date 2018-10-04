// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';
import formatBeddingInfo from './formatBeddingInfo';

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
          <TextIcon code="&#xe085;" style={styles.icon} />
          <Text style={styles.text}>
            <Translation passThrough={` ${info}`} />
          </Text>
        </View>
        <View style={styles.row}>
          <TextIcon code="(" style={styles.icon} />
          <Text style={styles.text}>
            <Translation passThrough={' '} />
            <Translation
              id="single_hotel.bedding_info.guests"
              values={{ numberOfGuests: maxPersons }}
            />
          </Text>
        </View>
      </View>
    );
  };
}

export default (createFragmentContainer(
  BeddingInfo,
  graphql`
    fragment BeddingInfo_room on HotelRoom {
      maxPersons
      bedding {
        type
        amount
      }
    }
  `,
): React.ComponentType<ContainerProps>);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    color: defaultTokens.colorTextSecondary,
  },
  icon: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 14,
    marginEnd: 2,
    alignSelf: 'center',
  },
});

// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text, Icon, Translation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { BeddingInfo_room as RoomType } from './__generated__/BeddingInfo_room.graphql';

type Props = {|
  +room: ?RoomType,
|};

export class BeddingInfo extends React.Component<Props> {
  formatBeddingInfo = (): $ReadOnlyArray<React.Element<typeof Translation>> => {
    const { room } = this.props;
    const beddingOptions = room?.bedding ?? [];
    const beddingTranslation = [];
    beddingOptions.forEach((beddingOption, index) => {
      const type = beddingOption?.type;
      const amount = beddingOption?.amount;
      if (index > 0) {
        beddingTranslation.push(
          <Translation
            key={`key-${index}`}
            id="single_hotel.bedding_info.or"
          />,
        );
      }
      beddingTranslation.push(
        <Translation
          key={`${type || ''}-${amount || ''}`}
          passThrough={[amount, type].filter(value => value != null).join(' ')}
        />,
      );
    });
    return beddingTranslation;
  };

  render() {
    const { room } = this.props;
    const maxPersons = room?.maxPersons;

    return (
      <View>
        <View style={styles.row}>
          <Icon
            name="accommodation"
            style={styles.icon}
            color={defaultTokens.colorTextSecondary}
          />
          <Text style={styles.text}>{this.formatBeddingInfo()}</Text>
        </View>
        <View style={styles.row}>
          <Icon
            name="passengers"
            style={styles.icon}
            color={defaultTokens.colorTextSecondary}
          />
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
  }
}

export default createFragmentContainer(BeddingInfo, {
  room: graphql`
    fragment BeddingInfo_room on HotelRoomInterface {
      maxPersons
      bedding {
        type
        amount
      }
    }
  `,
});

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
    fontSize: 14,
    marginEnd: 2,
    alignSelf: 'center',
    width: 14,
    height: 14,
    lineHeight: 14,
  },
});

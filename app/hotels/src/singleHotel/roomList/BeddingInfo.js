// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, Text, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { BeddingInfo_room } from './__generated__/BeddingInfo_room.graphql';

type ContainerProps = {|
  room: any,
|};

type Props = {
  ...ContainerProps,
  room: ?BeddingInfo_room,
};

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
          <TextIcon code="&#xe085;" style={styles.icon} />
          <Text style={styles.text}>{this.formatBeddingInfo()}</Text>
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
  }
}

export default (createFragmentContainer(
  BeddingInfo,
  graphql`
    fragment BeddingInfo_room on HotelRoomInterface {
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

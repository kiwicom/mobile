// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import idx from 'idx';

import type { BoardingPassReturn as BoardingPassReturnType } from './__generated__/BoardingPassReturn.graphql';

type Props = {|
  +data: BoardingPassReturnType,
|};

export const BoardingPassReturn = (props: Props) => {
  const outbound = idx(props.data, _ => _.outbound.legs) || [];
  return (
    <React.Fragment>
      <View style={styles.row}>
        <TextIcon code="&#xe079;" style={styles.outboundIcon} />
        <Translation passThrough="departure" />
      </View>
      <SeparatorFullWidth />
      {outbound.map(item => (
        <Translation
          passThrough={idx(item, _ => _.departure.airport.city.name)}
          key={idx(item, _ => _.id)}
        />
      ))}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  BoardingPassReturn,
  graphql`
    fragment BoardingPassReturn on BookingReturn {
      outbound {
        legs {
          id
          departure {
            airport {
              city {
                name
              }
            }
          }
          boardingPass {
            boardingPassUrl
          }
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  outboundIcon: {
    color: Color.brand,
    transform: [{ rotate: '90deg' }],
    marginEnd: 18,
    fontSize: 18,
  },
});
